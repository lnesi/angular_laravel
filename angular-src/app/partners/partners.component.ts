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
} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { PartnerService } from "../services/partner.service";
import { Partner } from "../models/Partner";
import { AppComponent } from "../app.component"
import { MasterList } from "../objects/MasterList.component";


@Component({
  templateUrl: 'partners.component.html',
  styleUrls: ['partners.component.scss'],
  providers: [PartnerService]
})
export class PartnersComponent extends MasterList {
  title = "Partners Page";

  constructor(
    partnerService: PartnerService,
    app: AppComponent,
    cdRef: ChangeDetectorRef,
    dialog: MdDialog,
    snackBar: MdSnackBar) {
    super(app, partnerService, cdRef, dialog, snackBar);
  }
}


const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
export class BasePartnertAddEdit {
  TITLE: string = "";
  loading: boolean = true
  partner: Partner = null
  nameFormControl = new FormControl('', [Validators.required]);
  abbrFormControl = new FormControl('', [Validators.required]);
  urlFormControl = new FormControl('', [Validators.required, Validators.pattern(URL_REGEX)]);
  constructor(public snackBar: MdSnackBar, protected partnerService: PartnerService, protected router: Router) {}
  save() {}
  validate() {
    if (this.nameFormControl.valid && this.abbrFormControl.valid && this.urlFormControl.valid) {
      this.save();
    } else {
      this.snackBar.open("Please complete the form before continue", null, { duration: 2000 });
    };
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'partnerform.component.html',
  styleUrls: ['partners.component.scss'],
  providers: [PartnerService]
})
export class AddPartnerComponent extends BasePartnertAddEdit {

  constructor(snackBar: MdSnackBar, partnerService: PartnerService, router: Router) {
    super(snackBar, partnerService, router);
    this.partner = new Partner();
    this.TITLE = "Add Partner";
    this.loading = false;
  }

  save() {
    this.loading = true;
    this.partnerService.store(this.partner).then(response => {
      this.loading = false;
      this.snackBar.open("The partners as been addded.", null, { duration: 2000 });
      this.router.navigate(['/admin//partners']);
    });
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'partnerform.component.html',
  styleUrls: ['partners.component.scss'],
  providers: [PartnerService]
})
export class EditPartnerComponent extends BasePartnertAddEdit implements AfterViewInit {

  constructor(snackBar: MdSnackBar, partnerService: PartnerService, router: Router, private route: ActivatedRoute) {
    super(snackBar, partnerService, router);
    this.TITLE = "Edit Partner";
    this.loading = true;
  }
  save() {
    this.loading = true;
    this.partnerService.update(this.partner).then(response => {
      this.loading = false;
      this.partner = response;
      this.snackBar.open("The partners as been updated.", null, { duration: 2000 });
    });
  }
  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      this.partnerService.get(+params['id']).then(response => {
        this.loading = false;
        this.partner = response;
      });
    });

  }
}
