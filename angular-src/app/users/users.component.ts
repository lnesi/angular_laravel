import {
  Component,
  AfterViewInit,
  ViewChild,
  AfterViewChecked,
  ChangeDetectorRef
} from '@angular/core';

import {
  MdDialog,
  MdSlideToggleModule,
  MdIcon,
  MdCheckbox,
  MdProgressBar,
  MdSnackBar,
  MdInputContainer,
  MdSelect,
  MdOption
} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { PartnerService } from "../services/partner.service";
import { UserService } from "../services/user.service";
import { Partner } from "../models/Partner";
import { User } from "../models/User";
import { AppComponent } from "../app.component"
import { MasterList } from "../objects/MasterList.component";
import { PasswordStrengthBarComponent } from 'ng2-password-strength-bar';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
  providers: [UserService]
})
export class UsersComponent extends MasterList {
  constructor(app: AppComponent, userService: UserService, chDef: ChangeDetectorRef, dialog: MdDialog, snackbar: MdSnackBar) {
    super(app, userService, chDef, dialog, snackbar);
  }
}

function PasswordConfirmation(from: FormControl): ValidatorFn {
  return function(control: AbstractControl): {
    [key: string]: any } {
    let isValid = control.value == from.value;
    return isValid ? null : { 'passwordConfirmation': 'The Password confirmation does not match' }
  };
}

function RemoteValidation(service: UserService): AsyncValidatorFn {
  return function(control: AbstractControl): Promise < {
    [key: string]: any } > {
    return service.validateEmail(control.value);

  }
}


@Component({
  templateUrl: 'adduser.component.html',
  styleUrls: ['users.component.scss'],
  providers: [UserService, PartnerService]
})
export class AddUserComponent implements AfterViewInit {
  @ViewChild("strengthChecker") strengthChecker: PasswordStrengthBarComponent;
  @ViewChild("inPartner") inPartner: MdSelect;
  @ViewChild("password") password: MdInputContainer;
  @ViewChild("inEmail") inEmail: MdInputContainer;
  loading: boolean = false;
  user: User
  inihack: boolean = false
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)], RemoteValidation(this.userService));
  partnerFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  passwordConfirmFormControl = new FormControl('', [Validators.required, PasswordConfirmation(this.passwordFormControl)]);
  partnerList: Partner[] = null;
  validEmail: boolean = true

  constructor(
    private partnerService: PartnerService,
    private userService: UserService,
    public snackBar: MdSnackBar,
    public router: Router,
    private cdRef: ChangeDetectorRef) {
    this.user = new User();
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
    this.partnerService.getAll().then(response => { this.partnerList = response });

  }

  save() {
    this.loading = true;
    this.userService.store(this.user).then(response => {
      this.user = response;
      this.loading = false;
      this.snackBar.open("The user has been created.", null, { duration: 2000 });
      this.router.navigate(['/admin/users']);
    });

  }

  isValidPartner() {
    if (this.inPartner)
      return this.inPartner._elementRef.nativeElement.classList.contains('ng-touched');
    return false;
  }

  validate() {
    this.inihack = true;

    if (!this.partnerFormControl.valid) {
      this.inPartner._elementRef.nativeElement.classList.remove('ng-valid', 'ng-untouched');
      this.inPartner._elementRef.nativeElement.classList.add('ng-invalid', 'mat-input-invalid', 'ng-touched');
    }

    if (this.nameFormControl.valid && this.emailFormControl.valid && this.partnerFormControl.valid && this.passwordFormControl.valid && this.passwordConfirmFormControl.valid) {
      if (this.strengthChecker.getStrengthIndexAndColor(this.user.password).idx >= 3) {
        this.save();
      } else {
        console.log(); //.push("ng-invalid");
        this.password._elementRef.nativeElement.classList.remove("ng-valid");
        this.password._elementRef.nativeElement.classList.add("ng-invalid");
        this.password._elementRef.nativeElement.classList.add("mat-input-invalid");
        console.log(this.password._elementRef.nativeElement, this.password._elementRef.nativeElement.classList);
        this.snackBar.open("The password provided is to weak", null, { duration: 2000 });
      };
    } else {
      this.snackBar.open("Please complete the form before continue", null, { duration: 2000 });
    };
  }
}

@Component({
  templateUrl: 'edituser.component.html',
  styleUrls: ['users.component.scss'],
  providers: [UserService]
})
export class EditUserComponent implements AfterViewInit{
  loading:boolean=false
  user:User=null;
  nameFormControl = new FormControl('', [Validators.required]);
  constructor(
    private userService:UserService,
    public router: Router, 
    public snackBar:MdSnackBar,
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute){

  }
  ngAfterViewInit(){
    this.loading=true;
    this.cdRef.detectChanges();
    this.route.params.subscribe(params => {
      console.log("epa",params['id'])
        this.userService.get(params['id']).then(response=>{
          this.loading = false;
          this.user=response;
        });
    }); 
  }
  save(){
    this.loading = true;
    this.userService.update(this.user).then(response=>{
      this.loading=false;
      this.user=response;
      this.snackBar.open("The User has been updated", null, { duration: 2000 });
    });
  }
  validate(){
     if (this.nameFormControl.valid){
       this.save();
     }else{
       this.snackBar.open("Please complete the form before continue", null, { duration: 2000 });
     }
  }
}

@Component({
  templateUrl: 'inviteuser.component.html',
  styleUrls: ['users.component.scss'],
  providers: [UserService, PartnerService]
})
export class InviteUserComponent implements AfterViewInit{
  @ViewChild("inPartner") inPartner: MdSelect;
  user:User
  loading:boolean=false
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)], RemoteValidation(this.userService));
  partnerFormControl = new FormControl('', [Validators.required]);
  partnerList: Partner[] = null;
  validEmail: boolean = true
  inihack:boolean=false
  constructor(
    private partnerService: PartnerService,
    private userService: UserService,
    public snackBar: MdSnackBar,
    public router: Router,
    private cdRef: ChangeDetectorRef) {
    this.user = new User();
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
    this.partnerService.getAll().then(response => { this.partnerList = response });

  }

  save(){
    this.loading = true;
    this.userService.invite(this.user).then(response => {
      this.user = response;
      this.loading = false;
      this.snackBar.open("The invitation has been sent.", null, { duration: 2000 });
      this.router.navigate(['/admin/users']);
    });
  }

  validate() {
    this.inihack = true;

    if (!this.partnerFormControl.valid) {
      this.inPartner._elementRef.nativeElement.classList.remove('ng-valid', 'ng-untouched');
      this.inPartner._elementRef.nativeElement.classList.add('ng-invalid', 'mat-input-invalid', 'ng-touched');
    }

    if (this.nameFormControl.valid && this.emailFormControl.valid && this.partnerFormControl.valid) {
      this.save();
    } else {
      this.snackBar.open("Please complete the form before continue", null, { duration: 2000 });
    };
  }
}
