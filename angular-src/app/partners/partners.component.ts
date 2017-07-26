import { 
  Component, 
  AfterViewInit,
  ViewChild,
  AfterViewChecked,
  ChangeDetectorRef 
} from '@angular/core';

import { 
  MdDialog, 
  MdSlideToggleModule,
  MdIcon,
  MdCheckbox,
  MdProgressBar,
  MdSnackBar,
  MdInputContainer, 
} from '@angular/material';

import { PartnerService } from "../services/partner.service";
import { Partner } from "../models/Partner";
import { AppComponent } from "../app.component"
import {MasterList} from "../objects/MasterList";

@Component({
  selector: 'app-root',
  templateUrl: 'partners.component.html',
  styleUrls: ['partners.component.scss'],
  providers: [PartnerService]
})

export class PartnersComponent extends MasterList  {
   title = "Partners Page";

  constructor(
    partnerService: PartnerService,
    app: AppComponent,
    cdRef : ChangeDetectorRef,
    dialog: MdDialog,
    snackBar: MdSnackBar) {
    super(app,partnerService,cdRef,dialog,snackBar);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'addpartner.component.html',
  styleUrls: ['partners.component.scss'],
  providers: [PartnerService]
})
export class AddPartnerComponent{

}
