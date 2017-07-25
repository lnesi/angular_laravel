import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule }    from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdMenuModule, MdToolbarModule, MdButtonModule } from '@angular/material';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnersComponent } from './partners/partners.component';



var routes=[
      { path: '', component: DashboardComponent },
      { path: 'partners', component: PartnersComponent }
    ];

@NgModule({
  declarations: [
    AppComponent,DashboardComponent,PartnersComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes,{ useHash: true }),
    BrowserAnimationsModule,
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
