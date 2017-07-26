import { Component, AfterViewInit } from '@angular/core';
import { PartnerService } from "../services/partner.service";
import { Partner } from "../models/Partner";
import {AppComponent} from "../app.component"
import {MdDialog,MdTable} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: 'partners.component.html',
  styleUrls: ['partners.component.css'],
  providers: [PartnerService]
})

export class PartnersComponent implements AfterViewInit{
  title = "Partners Page";
  dataList: Partner[] = null
  
  constructor(private partnerService: PartnerService,
              private app:AppComponent,
              public dialog: MdDialog){}

  ngAfterViewInit(){

    this.partnerService.getAll().then(data=>this.dataList=data);
  }

  delete(){
    console.log("deleting");
    this.dialog.open(ConfirmDelete);
  }
}

@Component({
  selector: 'confirm-delete',
  template:`<p> Hi, I'm a dialog! </p>`,
})
export class ConfirmDelete {}