webpackJsonp([1],{

/***/ "../../../../../angular-src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../angular-src async recursive";

/***/ }),

/***/ "../../../../../angular-src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.appName{\n\tmargin-right: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav>\n  <md-toolbar color=\"primary\">\n    <span routerLink=\"/\" class=\"appName\">App</span>\n    <div *ngIf=\"currentUser && currentUser.is_admin\">\n    <button md-button [mdMenuTriggerFor]=\"appMenu\">\n      <md-icon>settings</md-icon>\n    </button>\n    <md-menu #appMenu=\"mdMenu\" xPosition=\"after\" yPosition=\"below\" [overlapTrigger]=\"false\">\n      <a routerLink=\"admin/partners\" md-menu-item> Partners </a>\n      <a routerLink=\"admin/users\" md-menu-item> Users </a>\n    </md-menu>\n    </div>\n    <span class=\"example-fill-remaining-space\"></span>\n    <button md-button [mdMenuTriggerFor]=\"userMenu\">\n      <md-icon>person</md-icon> {{currentUser.name}}</button>\n    <md-menu #userMenu=\"mdMenu\" xPosition=\"before\" yPosition=\"below\" [overlapTrigger]=\"false\">\n      <a md-menu-item (click)=\"logout()\">\n        <md-icon>exit_to_app</md-icon> Logout </a>\n    </md-menu>\n  </md-toolbar>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../angular-src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__("../../../../../angular-src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../angular-src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    AppComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.getCurrent().then(function (user) { return _this.currentUser = user; });
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout().then(function (response) {
            window.location.href = "/";
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../angular-src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../angular-src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["b" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AdminGuard */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["b" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../angular-src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../angular-src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../angular-src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_password_strength_bar__ = __webpack_require__("../../../../ng2-password-strength-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_password_strength_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_password_strength_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../angular-src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_users_component__ = __webpack_require__("../../../../../angular-src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__partners_partners_component__ = __webpack_require__("../../../../../angular-src/app/partners/partners.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_errorpages_component__ = __webpack_require__("../../../../../angular-src/app/common/errorpages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__objects_MasterList_component__ = __webpack_require__("../../../../../angular-src/app/objects/MasterList.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var adminPath = {
    path: 'admin',
    canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AdminGuard */]],
    children: [
        { path: 'users', component: __WEBPACK_IMPORTED_MODULE_11__users_users_component__["a" /* UsersComponent */] },
        { path: 'users/add', component: __WEBPACK_IMPORTED_MODULE_11__users_users_component__["b" /* AddUserComponent */] },
        { path: 'users/invite', component: __WEBPACK_IMPORTED_MODULE_11__users_users_component__["c" /* InviteUserComponent */] },
        { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_11__users_users_component__["d" /* EditUserComponent */] },
        { path: 'partners', component: __WEBPACK_IMPORTED_MODULE_12__partners_partners_component__["a" /* PartnersComponent */] },
        { path: 'partners/add', component: __WEBPACK_IMPORTED_MODULE_12__partners_partners_component__["b" /* AddPartnerComponent */] },
        { path: 'partners/:id', component: __WEBPACK_IMPORTED_MODULE_12__partners_partners_component__["c" /* EditPartnerComponent */] }
    ]
};
var routes = [adminPath,
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_13__common_errorpages_component__["a" /* PageNotFoundComponent */] },
    { path: '403', component: __WEBPACK_IMPORTED_MODULE_13__common_errorpages_component__["b" /* UnAuthorizePageComponent */] },
    { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__partners_partners_component__["a" /* PartnersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__partners_partners_component__["b" /* AddPartnerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__partners_partners_component__["c" /* EditPartnerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__common_errorpages_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_13__common_errorpages_component__["b" /* UnAuthorizePageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_11__users_users_component__["b" /* AddUserComponent */],
            __WEBPACK_IMPORTED_MODULE_11__users_users_component__["d" /* EditUserComponent */],
            __WEBPACK_IMPORTED_MODULE_11__users_users_component__["c" /* InviteUserComponent */],
            __WEBPACK_IMPORTED_MODULE_14__objects_MasterList_component__["a" /* ConfirmDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MdOptionModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_password_strength_bar__["PasswordStrengthBarModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["b" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_14__objects_MasterList_component__["a" /* ConfirmDialog */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../angular-src/app/common/errorpages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UnAuthorizePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "<h1>404</h1><p>Page not Foaund</p>"
    })
], PageNotFoundComponent);

var UnAuthorizePageComponent = (function () {
    function UnAuthorizePageComponent() {
    }
    return UnAuthorizePageComponent;
}());
UnAuthorizePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "<h1>403</h1><p>You do not have permission to see this page.</p>"
    })
], UnAuthorizePageComponent);

//# sourceMappingURL=errorpages.component.js.map

/***/ }),

/***/ "../../../../../angular-src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Dashboard</h1>\n<div>\n\tContent\n\n</div>"

/***/ }),

/***/ "../../../../../angular-src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.title = "Dashboard Page";
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../angular-src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../angular-src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../angular-src/app/models/Partner.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Partner; });
var Partner = (function () {
    function Partner(name, abbr, url) {
        if (name === void 0) { name = ""; }
        if (abbr === void 0) { abbr = ""; }
        if (url === void 0) { url = ""; }
        this.name = name;
        this.abbr = abbr;
        this.url = url;
    }
    return Partner;
}());

//# sourceMappingURL=Partner.js.map

/***/ }),

/***/ "../../../../../angular-src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Partner__ = __webpack_require__("../../../../../angular-src/app/models/Partner.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });

var User = (function () {
    function User() {
    }
    User.prototype.construtor = function () {
        this.partner = new __WEBPACK_IMPORTED_MODULE_0__Partner__["a" /* Partner */]();
    };
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../angular-src/app/objects/MasterList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MasterList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MasterList = (function () {
    function MasterList(app, service, cdRef, dialog, snackBar) {
        this.app = app;
        this.service = service;
        this.cdRef = cdRef;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.dataList = null;
        this.loading = false;
    }
    MasterList.prototype.ngAfterViewInit = function () {
        this.laodData();
    };
    MasterList.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    MasterList.prototype.laodData = function () {
        var _this = this;
        this.loading = true;
        this.service.getAll().then(function (data) {
            _this.dataList = data;
            _this.loading = false;
        });
    };
    MasterList.prototype.delete = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(ConfirmDialog, { data: { title: "Attention!", message: "Are you sure you want to delete?" } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1) {
                if (item.active == 0) {
                    _this.doDelete(item);
                }
                else {
                    _this.snackBar.open("You cannot delete while active.", null, { duration: 2000 });
                }
            }
        });
    };
    MasterList.prototype.doDelete = function (item) {
        var _this = this;
        this.loading = true;
        this.service.delete(item.id).then(function (data) {
            _this.loading = false;
            _this.dataList = data;
        });
    };
    MasterList.prototype.toggleActive = function (item) {
        var _this = this;
        var action;
        if (item.active == 0) {
            action = "activate";
        }
        else {
            action = "deactivate";
        }
        item.active = 1 - item.active;
        var dialogRef = this.dialog.open(ConfirmDialog, { data: { title: "Attention!", message: "Are you sure you want to " + action + "?" } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 0) {
                item.active = 1 - item.active;
            }
            else {
                _this.doUpdate(item);
            }
        });
    };
    MasterList.prototype.doUpdate = function (item) {
        var _this = this;
        this.loading = true;
        this.service.toggle(item).then(function (data) {
            _this.loading = false;
        });
    };
    return MasterList;
}());

var ConfirmDialog = (function () {
    function ConfirmDialog(data) {
        this.data = data;
    }
    return ConfirmDialog;
}());
ConfirmDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'confirm-dialog',
        template: __webpack_require__("../../../../../angular-src/app/objects/confirmdialog.template.html"),
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], ConfirmDialog);

//# sourceMappingURL=MasterList.component.js.map

/***/ }),

/***/ "../../../../../angular-src/app/objects/confirmdialog.template.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{data.title}}</h2>\n<p> {{data.message}} </p>\n<br>\n<button md-raised-button color=\"primary\"  md-dialog-close=\"1\">Yes!</button>\n<button md-raised-button color=\"accent\"  md-dialog-close=\"0\" >No!</button>"

/***/ }),

/***/ "../../../../../angular-src/app/partners/partnerform.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{TITLE}}</h1>\n<md-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></md-progress-bar>\n<form *ngIf=\"!loading\">\n  <md-input-container class=\"form-control full-width\">\n    <input mdInput #inName placeholder=\"Name\" type=\"text\" required=\"required\" [(ngModel)]=\"partner.name\" [formControl]=\"nameFormControl\">\n    <md-error *ngIf=\"nameFormControl.hasError('required')\">Email is <strong>required</strong></md-error>\n  </md-input-container>\n  <md-input-container class=\"form-control\">\n    <input mdInput #inAbbr placeholder=\"Abbr\" type=\"text\" maxlength=\"5\" required=\"required\" [(ngModel)]=\"partner.abbr\" [formControl]=\"abbrFormControl\">\n    <md-hint align=\"end\">{{inAbbr.value.length}} / 5</md-hint>\n    <md-error *ngIf=\"abbrFormControl.hasError('required')\">Email is <strong>required</strong></md-error>\n  </md-input-container>\n  <md-input-container class=\"form-control full-width\">\n    <input mdInput #inUrl placeholder=\"URL (https)\" type=\"url\" required=\"required\" [(ngModel)]=\"partner.url\" [formControl]=\"urlFormControl\">\n    <md-error *ngIf=\"urlFormControl.hasError('required')\">Email is <strong>required</strong></md-error>\n    <md-error *ngIf=\"urlFormControl.hasError('pattern')\">Needs to be a valid URL</md-error>\n  </md-input-container>\n  <a routerLink=\"/admin/partners\" md-button>\n    <md-icon class=\"actionsIcon\">arrow_back</md-icon> Back</a>\n  <button class=\"pull-right\" md-button (click)=\"validate()\">\n    <md-icon class=\"actionsIcon\">save</md-icon> Save</button>\n</form>\n"

/***/ }),

/***/ "../../../../../angular-src/app/partners/partners.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Partners <a routerLink=\"/admin/partners/add\" md-button ><md-icon class=\"actionsIcon\">add</md-icon></a></h1>\n<md-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></md-progress-bar>\n<table *ngIf=\"!loading\" class=\"table\" cellspacing=\"0\" cellpadding=\"0\">\n  <thead>\n    <tr>\n      <th width=\"50%\">Name</th>\n      <th width=\"20%\">Abbr</th>\n      <th width=\"10%\">Edit</th>\n      <th width=\"10%\">Delete</th>\n      <th width=\"10%\">Active(Y/N)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of dataList\">\n      <td>{{item.name}}</td>\n      <td>{{item.abbr}}</td>\n      <td>\n        <a md-button routerLink=\"/admin/partners/{{item.id}}\">\n          <md-icon class=\"actionsIcon\">edit</md-icon>\n        </a>\n      </td>\n      <td>\n        <button md-button (click)=\"delete(item)\">\n          <md-icon>delete</md-icon>\n        </button>\n      </td>\n      <td>\n        <md-slide-toggle [checked]=\"item.active\" (change)=\"toggleActive(item)\"> </md-slide-toggle>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<!-- Button trigger modal -->\n"

/***/ }),

/***/ "../../../../../angular-src/app/partners/partners.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/app/partners/partners.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_partner_service__ = __webpack_require__("../../../../../angular-src/app/services/partner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Partner__ = __webpack_require__("../../../../../angular-src/app/models/Partner.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../angular-src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__objects_MasterList_component__ = __webpack_require__("../../../../../angular-src/app/objects/MasterList.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnersComponent; });
/* unused harmony export BasePartnertAddEdit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddPartnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EditPartnerComponent; });
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








var PartnersComponent = (function (_super) {
    __extends(PartnersComponent, _super);
    function PartnersComponent(partnerService, app, cdRef, dialog, snackBar) {
        var _this = _super.call(this, app, partnerService, cdRef, dialog, snackBar) || this;
        _this.title = "Partners Page";
        return _this;
    }
    return PartnersComponent;
}(__WEBPACK_IMPORTED_MODULE_7__objects_MasterList_component__["b" /* MasterList */]));
PartnersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../angular-src/app/partners/partners.component.html"),
        styles: [__webpack_require__("../../../../../angular-src/app/partners/partners.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */]) === "function" && _e || Object])
], PartnersComponent);

var URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
var BasePartnertAddEdit = (function () {
    function BasePartnertAddEdit(snackBar, partnerService, router) {
        this.snackBar = snackBar;
        this.partnerService = partnerService;
        this.router = router;
        this.TITLE = "";
        this.loading = true;
        this.partner = null;
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.abbrFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.urlFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(URL_REGEX)]);
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

var AddPartnerComponent = (function (_super) {
    __extends(AddPartnerComponent, _super);
    function AddPartnerComponent(snackBar, partnerService, router) {
        var _this = _super.call(this, snackBar, partnerService, router) || this;
        _this.partner = new __WEBPACK_IMPORTED_MODULE_5__models_Partner__["a" /* Partner */]();
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
            _this.router.navigate(['/admin//partners']);
        });
    };
    return AddPartnerComponent;
}(BasePartnertAddEdit));
AddPartnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../angular-src/app/partners/partnerform.component.html"),
        styles: [__webpack_require__("../../../../../angular-src/app/partners/partners.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _h || Object])
], AddPartnerComponent);

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../angular-src/app/partners/partnerform.component.html"),
        styles: [__webpack_require__("../../../../../angular-src/app/partners/partners.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _m || Object])
], EditPartnerComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=partners.component.js.map

/***/ }),

/***/ "../../../../../angular-src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getCurrent = function () {
        return this.http.get('/ajax/user').toPromise()
            .then(function (response) { return response.json(); });
    };
    AuthService.prototype.logout = function () {
        return this.http.post('/logout', {}).toPromise().then();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var AdminGuard = (function () {
    function AdminGuard(auth, router) {
        this.auth = auth;
        this.router = router;
        this.currentUser = null;
        console.log("constructor canActivate");
    }
    AdminGuard.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.getCurrent().then(function (response) {
                if (response.is_admin == 1) {
                    resolve(true);
                }
                else {
                    _this.router.navigate(['/403']);
                    resolve(false);
                }
            });
        });
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [AuthService, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminGuard);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../angular-src/app/services/partner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PartnerService = (function () {
    function PartnerService(http) {
        this.http = http;
    }
    PartnerService.prototype.getAll = function () {
        return this.http.get("/ajax/admin/partners").toPromise().then(function (response) { return response.json(); });
    };
    PartnerService.prototype.delete = function (id) {
        return this.http.delete("/ajax/admin/partners/" + id).toPromise().then(function (response) { return response.json(); });
    };
    PartnerService.prototype.toggle = function (partner) {
        return this.http.post("/ajax/admin/partners/" + partner.id + "/toggle", partner).toPromise().then(function (response) { return response.json(); });
    };
    PartnerService.prototype.store = function (partner) {
        return this.http.post("/ajax/admin/partners", partner).toPromise().then(function (response) { return response.json(); });
    };
    PartnerService.prototype.get = function (id) {
        return this.http.get("/ajax/admin/partners/" + id).toPromise().then(function (response) { return response.json(); });
    };
    PartnerService.prototype.update = function (partner) {
        return this.http.patch("/ajax/admin/partners/" + partner.id, partner).toPromise().then(function (response) { return response.json(); });
    };
    return PartnerService;
}());
PartnerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PartnerService);

var _a;
//# sourceMappingURL=partner.service.js.map

/***/ }),

/***/ "../../../../../angular-src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get("/ajax/admin/users").toPromise().then(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete("/ajax/admin/users/" + id).toPromise().then(function (response) { return response.json(); });
    };
    UserService.prototype.toggle = function (user) {
        return this.http.post("/ajax/admin/users/" + user.id + "/toggle", user).toPromise().then(function (response) { return response.json(); });
    };
    UserService.prototype.store = function (user) {
        return this.http.post("/ajax/admin/users", user).toPromise().then(function (response) { return response.json(); });
    };
    UserService.prototype.get = function (id) {
        return this.http.get("/ajax/admin/users/" + id).toPromise().then(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.patch("/ajax/admin/users/" + user.id, user).toPromise().then(function (response) { return response.json(); });
    };
    UserService.prototype.validateEmail = function (email) {
        return this.http.post("/ajax/users/validate", { "email": email }).toPromise().then(function (response) {
            return response.json().result ? null : { 'emailNotRegistered': 'The email is already registered' };
        });
    };
    UserService.prototype.invite = function (user) {
        return this.http.post("/ajax/admin/users/invite", user).toPromise().then(function (response) { return response.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../angular-src/app/users/adduser.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Add User</h1>\n<md-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></md-progress-bar>\n<form *ngIf=\"!loading\">\n  \n\n    <md-select #inPartner class=\"form-control-select full-width\" placeholder=\"Partner\" name=\"partner\" required=\"required\" [formControl]=\"partnerFormControl\" [(ngModel)]=\"user.partner_id\">\n      <md-option *ngFor=\"let partner of partnerList\" value=\"{{partner.id}}\">\n\t    {{ partner.name }}\n\t  </md-option>\n    </md-select>\n    <md-error class=\"select-error\" *ngIf=\"user.partner_id==null && inihack\">Partner is <strong>required</strong></md-error>\n\n  <md-input-container #inName class=\"form-control full-width\">\n    <input mdInput  placeholder=\"Full Name\" type=\"text\" required=\"required\" [(ngModel)]=\"user.name\" [formControl]=\"nameFormControl\">\n    <md-error *ngIf=\"nameFormControl.hasError('required')\">Name is <strong>required</strong></md-error>\n  </md-input-container>\n\n  <md-input-container #inEmail class=\"form-control full-width\">\n    <input mdInput  placeholder=\"Email\" type=\"text\" required=\"required\" [(ngModel)]=\"user.email\" [formControl]=\"emailFormControl\">\n    <md-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></md-error>\n    <md-error *ngIf=\"emailFormControl.hasError('pattern')\">Please enter a valid email address</md-error>\n    <md-error *ngIf=\"emailFormControl.hasError('emailNotRegistered')\">The email address is already registered</md-error>\n  </md-input-container>\n\n  <md-input-container #password class=\"form-control full-width\" style=\"margin-bottom:25px;\">\n    <input mdInput  placeholder=\"Password\" name=\"password\" type=\"password\" required=\"required\" [(ngModel)]=\"user.password\" [formControl]=\"passwordFormControl\">\n    <md-error *ngIf=\"passwordFormControl.hasError('required')\">Password is <strong>required</strong></md-error>\n    <md-hint><ng2-password-strength-bar #strengthChecker  [passwordToCheck]=\"user.password\" barLabel=\"Stength:\"></ng2-password-strength-bar></md-hint>\n  </md-input-container>\n\n  <md-input-container class=\"form-control full-width\">\n    <input mdInput name=\"confirmPassword\" placeholder=\"Confirm Password\" type=\"password\" required=\"required\" [formControl]=\"passwordConfirmFormControl\">\n    <md-error *ngIf=\"passwordConfirmFormControl.hasError('required')\">Password confirmation is <strong>required</strong></md-error>\n    <md-error *ngIf=\"passwordConfirmFormControl.hasError('passwordConfirmation')\">Password confirmation does not match</md-error>\n  </md-input-container>\n  <p>\n  <a routerLink=\"/admin/users\" md-button><md-icon class=\"actionsIcon\">arrow_back</md-icon> Back</a>\n  <button class=\"pull-right\" md-button (click)=\"validate()\"><md-icon class=\"actionsIcon\">save</md-icon> Save</button>\n  </p>\n</form>\n"

/***/ }),

/***/ "../../../../../angular-src/app/users/edituser.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Edit User</h1>\n<md-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></md-progress-bar>\n<form *ngIf=\"user\">\n <md-input-container  class=\"form-control full-width\" *ngIf=\"user.partner\">\n    <input  mdInput  placeholder=\"Partner\" type=\"text\"  [(ngModel)]=\"user.partner.name\" name=\"parner\" disabled>\n  </md-input-container>\n\t<md-input-container class=\"form-control full-width\">\n    <input mdInput  placeholder=\"Full Name\" type=\"text\" required=\"required\" [(ngModel)]=\"user.name\" [formControl]=\"nameFormControl\">\n    <md-error *ngIf=\"nameFormControl.hasError('required')\">Name is <strong>required</strong></md-error>\n  </md-input-container>\n   <md-input-container  class=\"form-control full-width\">\n    <input mdInput  placeholder=\"Email\" type=\"text\"  [(ngModel)]=\"user.email\" name=\"email\" disabled>\n  </md-input-container>\n  <p>\n  <a routerLink=\"/admin/users\" md-button><md-icon class=\"actionsIcon\">arrow_back</md-icon> Back</a>\n  <button class=\"pull-right\" md-button (click)=\"validate()\"><md-icon class=\"actionsIcon\">save</md-icon> Save</button>\n  </p>\n</form>"

/***/ }),

/***/ "../../../../../angular-src/app/users/inviteuser.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Invite User</h1>\n<md-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></md-progress-bar>\n<form *ngIf=\"!loading\">\n  \n\n    <md-select #inPartner class=\"form-control-select full-width\" placeholder=\"Partner\" name=\"partner\" required=\"required\" [formControl]=\"partnerFormControl\" [(ngModel)]=\"user.partner_id\">\n      <md-option *ngFor=\"let partner of partnerList\" value=\"{{partner.id}}\">\n\t    {{ partner.name }}\n\t  </md-option>\n    </md-select>\n    <md-error class=\"select-error\" *ngIf=\"user.partner_id==null && inihack\">Partner is <strong>required</strong></md-error>\n\n  <md-input-container #inName class=\"form-control full-width\">\n    <input mdInput  placeholder=\"Full Name\" type=\"text\" required=\"required\" [(ngModel)]=\"user.name\" [formControl]=\"nameFormControl\">\n    <md-error *ngIf=\"nameFormControl.hasError('required')\">Name is <strong>required</strong></md-error>\n  </md-input-container>\n\n  <md-input-container #inEmail class=\"form-control full-width\">\n    <input mdInput  placeholder=\"Email\" type=\"text\" required=\"required\" [(ngModel)]=\"user.email\" [formControl]=\"emailFormControl\">\n    <md-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></md-error>\n    <md-error *ngIf=\"emailFormControl.hasError('pattern')\">Please enter a valid email address</md-error>\n    <md-error *ngIf=\"emailFormControl.hasError('emailNotRegistered')\">The email address is already registered</md-error>\n  </md-input-container>\n\n  <p>\n  <a routerLink=\"/admin/users\" md-button><md-icon class=\"actionsIcon\">arrow_back</md-icon> Back</a>\n  <button class=\"pull-right\" md-button (click)=\"validate()\"><md-icon class=\"actionsIcon\">mail</md-icon> Send</button>\n  </p>\n</form>\n"

/***/ }),

/***/ "../../../../../angular-src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Users <a routerLink=\"/admin/users/add\" md-button ><md-icon class=\"actionsIcon\">add</md-icon> add</a> <a routerLink=\"/admin/users/invite\" md-button ><md-icon class=\"actionsIcon\">mail</md-icon> New invite</a></h1>\n\n<md-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></md-progress-bar>\n<table *ngIf=\"!loading\" class=\"table\" cellspacing=\"0\" cellpadding=\"0\">\n  <thead>\n    <tr>\n      <th width=\"50%\">Name</th>\n      <th width=\"20%\">Email</th>\n      <th width=\"10%\">Edit</th>\n      <th width=\"10%\">Delete</th>\n      <th width=\"10%\">Active(Y/N)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of dataList\">\n      <td>{{item.name}}</td>\n      <td>{{item.email}}</td>\n      <td>\n        <a md-button routerLink=\"/admin/users/{{item.id}}\">\n          <md-icon class=\"actionsIcon\">edit</md-icon>\n        </a>\n      </td>\n      <td>\n        <button md-button (click)=\"delete(item)\">\n          <md-icon *ngIf=\"!item.is_admin\">delete</md-icon>\n        </button>\n      </td>\n      <td>\n        <md-slide-toggle [checked]=\"item.active\" *ngIf=\"!item.is_admin\" (change)=\"toggleActive(item)\"> </md-slide-toggle>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<!-- Button trigger modal -->\n"

/***/ }),

/***/ "../../../../../angular-src/app/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_partner_service__ = __webpack_require__("../../../../../angular-src/app/services/partner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../angular-src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_User__ = __webpack_require__("../../../../../angular-src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../angular-src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__objects_MasterList_component__ = __webpack_require__("../../../../../angular-src/app/objects/MasterList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_password_strength_bar__ = __webpack_require__("../../../../ng2-password-strength-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_password_strength_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_password_strength_bar__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddUserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EditUserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return InviteUserComponent; });
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










var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var UsersComponent = (function (_super) {
    __extends(UsersComponent, _super);
    function UsersComponent(app, userService, chDef, dialog, snackbar) {
        return _super.call(this, app, userService, chDef, dialog, snackbar) || this;
    }
    return UsersComponent;
}(__WEBPACK_IMPORTED_MODULE_8__objects_MasterList_component__["b" /* MasterList */]));
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../angular-src/app/users/users.component.html"),
        styles: [__webpack_require__("../../../../../angular-src/app/users/users.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */]) === "function" && _e || Object])
], UsersComponent);

function PasswordConfirmation(from) {
    return function (control) {
        var isValid = control.value == from.value;
        return isValid ? null : { 'passwordConfirmation': 'The Password confirmation does not match' };
    };
}
function RemoteValidation(service) {
    return function (control) {
        return service.validateEmail(control.value);
    };
}
var AddUserComponent = (function () {
    function AddUserComponent(partnerService, userService, snackBar, router, cdRef) {
        this.partnerService = partnerService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
        this.cdRef = cdRef;
        this.loading = false;
        this.inihack = false;
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(EMAIL_REGEX)], RemoteValidation(this.userService));
        this.partnerFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.passwordFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.passwordConfirmFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, PasswordConfirmation(this.passwordFormControl)]);
        this.partnerList = null;
        this.validEmail = true;
        this.user = new __WEBPACK_IMPORTED_MODULE_6__models_User__["a" /* User */]();
    }
    AddUserComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.cdRef.detectChanges();
        this.partnerService.getAll().then(function (response) { _this.partnerList = response; });
    };
    AddUserComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this.userService.store(this.user).then(function (response) {
            _this.user = response;
            _this.loading = false;
            _this.snackBar.open("The user has been created.", null, { duration: 2000 });
            _this.router.navigate(['/admin/users']);
        });
    };
    AddUserComponent.prototype.isValidPartner = function () {
        if (this.inPartner)
            return this.inPartner._elementRef.nativeElement.classList.contains('ng-touched');
        return false;
    };
    AddUserComponent.prototype.validate = function () {
        this.inihack = true;
        if (!this.partnerFormControl.valid) {
            this.inPartner._elementRef.nativeElement.classList.remove('ng-valid', 'ng-untouched');
            this.inPartner._elementRef.nativeElement.classList.add('ng-invalid', 'mat-input-invalid', 'ng-touched');
        }
        if (this.nameFormControl.valid && this.emailFormControl.valid && this.partnerFormControl.valid && this.passwordFormControl.valid && this.passwordConfirmFormControl.valid) {
            if (this.strengthChecker.getStrengthIndexAndColor(this.user.password).idx >= 3) {
                this.save();
            }
            else {
                console.log(); //.push("ng-invalid");
                this.password._elementRef.nativeElement.classList.remove("ng-valid");
                this.password._elementRef.nativeElement.classList.add("ng-invalid");
                this.password._elementRef.nativeElement.classList.add("mat-input-invalid");
                console.log(this.password._elementRef.nativeElement, this.password._elementRef.nativeElement.classList);
                this.snackBar.open("The password provided is to weak", null, { duration: 2000 });
            }
            ;
        }
        else {
            this.snackBar.open("Please complete the form before continue", null, { duration: 2000 });
        }
        ;
    };
    return AddUserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("strengthChecker"),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9_ng2_password_strength_bar__["PasswordStrengthBarComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ng2_password_strength_bar__["PasswordStrengthBarComponent"]) === "function" && _f || Object)
], AddUserComponent.prototype, "strengthChecker", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("inPartner"),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdSelect */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdSelect */]) === "function" && _g || Object)
], AddUserComponent.prototype, "inPartner", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("password"),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdInputContainer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdInputContainer */]) === "function" && _h || Object)
], AddUserComponent.prototype, "password", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("inEmail"),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdInputContainer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdInputContainer */]) === "function" && _j || Object)
], AddUserComponent.prototype, "inEmail", void 0);
AddUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../angular-src/app/users/adduser.component.html"),
        styles: [__webpack_require__("../../../../../angular-src/app/users/users.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _p || Object])
], AddUserComponent);

var EditUserComponent = (function () {
    function EditUserComponent(userService, router, snackBar, cdRef, route) {
        this.userService = userService;
        this.router = router;
        this.snackBar = snackBar;
        this.cdRef = cdRef;
        this.route = route;
        this.loading = false;
        this.user = null;
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
    }
    EditUserComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.loading = true;
        this.cdRef.detectChanges();
        this.route.params.subscribe(function (params) {
            console.log("epa", params['id']);
            _this.userService.get(params['id']).then(function (response) {
                _this.loading = false;
                _this.user = response;
            });
        });
    };
    EditUserComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this.userService.update(this.user).then(function (response) {
            _this.loading = false;
            _this.user = response;
            _this.snackBar.open("The User has been updated", null, { duration: 2000 });
        });
    };
    EditUserComponent.prototype.validate = function () {
        if (this.nameFormControl.valid) {
            this.save();
        }
        else {
            this.snackBar.open("Please complete the form before continue", null, { duration: 2000 });
        }
    };
    return EditUserComponent;
}());
EditUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../angular-src/app/users/edituser.component.html"),
        styles: [__webpack_require__("../../../../../angular-src/app/users/users.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _u || Object])
], EditUserComponent);

var InviteUserComponent = (function () {
    function InviteUserComponent(partnerService, userService, snackBar, router, cdRef) {
        this.partnerService = partnerService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
        this.cdRef = cdRef;
        this.loading = false;
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(EMAIL_REGEX)], RemoteValidation(this.userService));
        this.partnerFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.partnerList = null;
        this.validEmail = true;
        this.inihack = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_6__models_User__["a" /* User */]();
    }
    InviteUserComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.cdRef.detectChanges();
        this.partnerService.getAll().then(function (response) { _this.partnerList = response; });
    };
    InviteUserComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this.userService.invite(this.user).then(function (response) {
            _this.user = response;
            _this.loading = false;
            _this.snackBar.open("The invitation has been sent.", null, { duration: 2000 });
            _this.router.navigate(['/admin/users']);
        });
    };
    InviteUserComponent.prototype.validate = function () {
        this.inihack = true;
        if (!this.partnerFormControl.valid) {
            this.inPartner._elementRef.nativeElement.classList.remove('ng-valid', 'ng-untouched');
            this.inPartner._elementRef.nativeElement.classList.add('ng-invalid', 'mat-input-invalid', 'ng-touched');
        }
        if (this.nameFormControl.valid && this.emailFormControl.valid && this.partnerFormControl.valid) {
            this.save();
        }
        else {
            this.snackBar.open("Please complete the form before continue", null, { duration: 2000 });
        }
        ;
    };
    return InviteUserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("inPartner"),
    __metadata("design:type", typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdSelect */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdSelect */]) === "function" && _v || Object)
], InviteUserComponent.prototype, "inPartner", void 0);
InviteUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../angular-src/app/users/inviteuser.component.html"),
        styles: [__webpack_require__("../../../../../angular-src/app/users/users.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_w = typeof __WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_partner_service__["a" /* PartnerService */]) === "function" && _w || Object, typeof (_x = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _x || Object, typeof (_y = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSnackBar */]) === "function" && _y || Object, typeof (_z = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _z || Object, typeof (_0 = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _0 || Object])
], InviteUserComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../angular-src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../angular-src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../angular-src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../angular-src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../angular-src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map