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
  MdInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnersComponent, AddPartnerComponent, EditPartnerComponent } from './partners/partners.component';

import { ConfirmDialog } from "./objects/MasterList.component"



var routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'partners/add', component: AddPartnerComponent },
  { path: 'partners/:id', component: EditPartnerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PartnersComponent,
    AddPartnerComponent,
    EditPartnerComponent,
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
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialog]
})
export class AppModule {}
