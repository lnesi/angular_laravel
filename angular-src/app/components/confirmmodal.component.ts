import { Component,NgModule,CUSTOM_ELEMENTS_SCHEMA,NgZone } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'lntb-confirm-modal',
  templateUrl: './confirmmodal.component.html',
})

export class lntbConfirmModal{
	show(){
		
		   
		 
	}
}


@NgModule({
  declarations: [ lntbConfirmModal ],
  exports: [ lntbConfirmModal ],
  imports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class lntbConfirmModalModule {}