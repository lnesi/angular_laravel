"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var ng2_password_strength_bar_1 = require("ng2-password-strength-bar");
var users_component_1 = require("./users/users.component");
var partners_component_1 = require("./partners/partners.component");
var pagenotfound_component_1 = require("./common/pagenotfound.component");
var MasterList_component_1 = require("./objects/MasterList.component");
var routes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'users/add', component: users_component_1.AddUserComponent },
    { path: 'partners', component: partners_component_1.PartnersComponent },
    { path: 'partners/add', component: partners_component_1.AddPartnerComponent },
    { path: 'partners/:id', component: partners_component_1.EditPartnerComponent },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            partners_component_1.PartnersComponent,
            partners_component_1.AddPartnerComponent,
            partners_component_1.EditPartnerComponent,
            pagenotfound_component_1.PageNotFoundComponent,
            users_component_1.UsersComponent,
            users_component_1.AddUserComponent,
            MasterList_component_1.ConfirmDialog
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot(routes, { useHash: true }),
            animations_1.BrowserAnimationsModule,
            material_1.MdMenuModule,
            material_1.MdToolbarModule,
            material_1.MdButtonModule,
            material_1.MdDialogModule,
            material_1.MdTableModule,
            material_1.MdSlideToggleModule,
            material_1.MdIconModule,
            material_1.MdCheckboxModule,
            material_1.MdProgressBarModule,
            material_1.MdSnackBarModule,
            material_1.MdInputModule,
            material_1.MdOptionModule,
            material_1.MdSelectModule,
            ng2_password_strength_bar_1.PasswordStrengthBarModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
        entryComponents: [MasterList_component_1.ConfirmDialog]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map