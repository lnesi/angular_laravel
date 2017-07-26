import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule }    from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MdMenuModule, 
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

import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnersComponent , AddPartnerComponent } from './partners/partners.component';

import {ConfirmDialog} from "./objects/MasterList"



var routes=[
      { path: '', component: DashboardComponent },
      { path: 'partners', component: PartnersComponent },
      { path: 'partners/add', component: AddPartnerComponent }
    ];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PartnersComponent,
    AddPartnerComponent,
    ConfirmDialog
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes,{ useHash: true }),
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
  entryComponents:[ConfirmDialog]
})
export class AppModule { }
