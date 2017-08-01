import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdMenuModule,
  MdToolbarModule,
  MdButtonModule,
  MdDialogModule,
  MdTableModule,
  MdSlideToggleModule,
  MdIconModule,
  MdCheckboxModule,
  MdProgressBarModule,
  MdSnackBarModule,
  MdInputModule,
  MdOptionModule,
  MdSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { AdminGuard,AuthService } from "./services/auth.service";
import { UsersComponent, AddUserComponent, EditUserComponent,InviteUserComponent } from './users/users.component';
import { PartnersComponent, AddPartnerComponent, EditPartnerComponent } from './partners/partners.component';
import { PageNotFoundComponent,UnAuthorizePageComponent } from './common/errorpages.component';
import { ConfirmDialog } from "./objects/MasterList.component"


var adminPath={
  path:'admin',
  canActivate:[AdminGuard],
  children:[
    { path: 'users', component: UsersComponent },
    { path: 'users/add', component: AddUserComponent },
    { path: 'users/invite', component: InviteUserComponent },
    { path: 'users/:id', component: EditUserComponent },
    { path: 'partners', component: PartnersComponent },
    { path: 'partners/add', component: AddPartnerComponent },
    { path: 'partners/:id', component: EditPartnerComponent }
  ]
}
var routes = [adminPath,
  { path: '', component: DashboardComponent },
  { path: '404',component: PageNotFoundComponent },
  { path: '403',component: UnAuthorizePageComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PartnersComponent,
    AddPartnerComponent,
    EditPartnerComponent,
    PageNotFoundComponent,
    UnAuthorizePageComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    InviteUserComponent,
    ConfirmDialog
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule,
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdDialogModule,
    MdTableModule,
    MdSlideToggleModule,
    MdIconModule,
    MdCheckboxModule,
    MdProgressBarModule,
    MdSnackBarModule,
    MdInputModule,
    MdOptionModule,
    MdSelectModule,
    PasswordStrengthBarModule
  ],
  providers: [AdminGuard,AuthService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialog]
})
export class AppModule {}
