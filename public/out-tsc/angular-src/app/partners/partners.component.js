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
var Partner_1 = require("../models/Partner");
var app_component_1 = require("../app.component");
var MasterList_component_1 = require("../objects/MasterList.component");
var PartnersComponent = (function (_super) {
    __extends(PartnersComponent, _super);
    function PartnersComponent(partnerService, app, cdRef, dialog, snackBar) {
        var _this = _super.call(this, app, partnerService, cdRef, dialog, snackBar) || this;
        _this.title = "Partners Page";
        return _this;
    }
    return PartnersComponent;
}(MasterList_component_1.MasterList));
PartnersComponent = __decorate([
    core_1.Component({
        templateUrl: 'partners.component.html',
        styleUrls: ['partners.component.scss'],
        providers: [partner_service_1.PartnerService]
    }),
    __metadata("design:paramtypes", [partner_service_1.PartnerService,
        app_component_1.AppComponent,
        core_1.ChangeDetectorRef,
        material_1.MdDialog,
        material_1.MdSnackBar])
], PartnersComponent);
exports.PartnersComponent = PartnersComponent;
var URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
var BasePartnertAddEdit = (function () {
    function BasePartnertAddEdit(snackBar, partnerService, router) {
        this.snackBar = snackBar;
        this.partnerService = partnerService;
        this.router = router;
        this.TITLE = "";
        this.loading = true;
        this.partner = null;
        this.nameFormControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.abbrFormControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.urlFormControl = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(URL_REGEX)]);
    }
    BasePartnertAddEdit.prototype.save = function () { };
    BasePartnertAddEdit.prototype.validate = function () {
        if (this.nameFormControl.valid && this.abbrFormControl.valid && this.urlFormControl.valid) {
            this.save();
        }
        else {
            this.snackBar.open("Please complete the form before continue", null, { duration: 2000 });
        }
        ;
    };
    return BasePartnertAddEdit;
}());
exports.BasePartnertAddEdit = BasePartnertAddEdit;
var AddPartnerComponent = (function (_super) {
    __extends(AddPartnerComponent, _super);
    function AddPartnerComponent(snackBar, partnerService, router) {
        var _this = _super.call(this, snackBar, partnerService, router) || this;
        _this.partner = new Partner_1.Partner();
        _this.TITLE = "Add Partner";
        _this.loading = false;
        return _this;
    }
    AddPartnerComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this.partnerService.store(this.partner).then(function (response) {
            _this.loading = false;
            _this.snackBar.open("The partners as been addded.", null, { duration: 2000 });
            _this.router.navigate(['/partners']);
        });
    };
    return AddPartnerComponent;
}(BasePartnertAddEdit));
AddPartnerComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: 'partnerform.component.html',
        styleUrls: ['partners.component.scss'],
        providers: [partner_service_1.PartnerService]
    }),
    __metadata("design:paramtypes", [material_1.MdSnackBar, partner_service_1.PartnerService, router_1.Router])
], AddPartnerComponent);
exports.AddPartnerComponent = AddPartnerComponent;
var EditPartnerComponent = (function (_super) {
    __extends(EditPartnerComponent, _super);
    function EditPartnerComponent(snackBar, partnerService, router, route) {
        var _this = _super.call(this, snackBar, partnerService, router) || this;
        _this.route = route;
        _this.TITLE = "Edit Partner";
        _this.loading = true;
        return _this;
    }
    EditPartnerComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this.partnerService.update(this.partner).then(function (response) {
            _this.loading = false;
            _this.partner = response;
            _this.snackBar.open("The partners as been updated.", null, { duration: 2000 });
        });
    };
    EditPartnerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.partnerService.get(+params['id']).then(function (response) {
                _this.loading = false;
                _this.partner = response;
            });
        });
    };
    return EditPartnerComponent;
}(BasePartnertAddEdit));
EditPartnerComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: 'partnerform.component.html',
        styleUrls: ['partners.component.scss'],
        providers: [partner_service_1.PartnerService]
    }),
    __metadata("design:paramtypes", [material_1.MdSnackBar, partner_service_1.PartnerService, router_1.Router, router_1.ActivatedRoute])
], EditPartnerComponent);
exports.EditPartnerComponent = EditPartnerComponent;
//# sourceMappingURL=partners.component.js.map