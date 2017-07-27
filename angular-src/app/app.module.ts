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

import { UsersComponent, AddUserComponent } from './users/users.component';
import { PartnersComponent, AddPartnerComponent, EditPartnerComponent } from './partners/partners.component';
import { PageNotFoundComponent } from './common/pagenotfound.component';
import { ConfirmDialog } from "./objects/MasterList.component"



var routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'partners/add', component: AddPartnerComponent },
  { path: 'partners/:id', component: EditPartnerComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PartnersComponent,
    AddPartnerComponent,
    EditPartnerComponent,
    PageNotFoundComponent,
    UsersComponent,
    AddUserComponent,
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
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialog]
})
export class AppModule {}
