"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var partner_service_1 = require("../services/partner.service");
var user_service_1 = require("../services/user.service");
var User_1 = require("../models/User");
var app_component_1 = require("../app.component");
var MasterList_component_1 = require("../objects/MasterList.component");
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var UsersComponent = (function (_super) {
    __extends(UsersComponent, _super);
    function UsersComponent(app, userService, chDef, dialog, snackbar) {
        return _super.call(this, app, userService, chDef, dialog, snackbar) || this;
    }
    return UsersComponent;
}(MasterList_component_1.MasterList));
UsersComponent = __decorate([
    core_1.Component({
        templateUrl: 'users.component.html',
        styleUrls: ['users.component.scss'],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [app_component_1.AppComponent, user_service_1.UserService, core_1.ChangeDetectorRef, material_1.MdDialog, material_1.MdSnackBar])
], UsersComponent);
exports.UsersComponent = UsersComponent;
function PasswordConfirmation() {
    console.log("PasswordConfirmation");
    return function (control) {
        console.log(control);
        // messy but you get the idea
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': 'value is only whitespace' };
    };
}
exports.PasswordConfirmation = PasswordConfirmation;
var AddUserComponent = (function () {
    function AddUserComponent(partnerService, userService, snackBar, router) {
        this.partnerService = partnerService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
        this.loading = false;
        this.nameFormControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.emailFormControl = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(EMAIL_REGEX)]);
        this.partnerFormControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.passwordFormControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.passwordConfirmFormControl = new forms_1.FormControl('', [forms_1.Validators.required, PasswordConfirmation]);
        this.partnerList = null;
        this.user = new User_1.User();
    }
    AddUserComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.partnerService.getAll().then(function (response) { _this.partnerList = response; });
    };
    AddUserComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this.userService.store(this.user).then(function (response) {
            _this.user = response;
            _this.loading = false;
            _this.snackBar.open("The user has been created.", null, { duration: 2000 });
            _this.router.navigate(['/users']);
        });
    };
    AddUserComponent.prototype.validate = function () {
        if (this.nameFormControl.valid && this.emailFormControl.valid && this.partnerFormControl.valid) {
            this.save();
        }
        else {
            this.snackBar.open("Please complete the form before continue", null, { duration: 2000 });
        }
        ;
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    core_1.Component({
        templateUrl: 'adduser.component.html',
        styleUrls: ['users.component.scss'],
        providers: [user_service_1.UserService, partner_service_1.PartnerService]
    }),
    __metadata("design:paramtypes", [partner_service_1.PartnerService, user_service_1.UserService, material_1.MdSnackBar, router_1.Router])
], AddUserComponent);
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=users.component.js.map