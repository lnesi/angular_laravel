import { Component, Inject, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { MdDialog, MdSnackBar, MD_DIALOG_DATA } from '@angular/material';
import { AppComponent } from "../app.component";


export class MasterList implements AfterViewInit, AfterViewChecked {
  dataList: any[] = null
  loading: boolean = false
  constructor(
    public app: AppComponent,
    protected service: any,
    protected cdRef: ChangeDetectorRef,
    public dialog: MdDialog,
    public snackBar: MdSnackBar) {

  }

  ngAfterViewInit() {
    this.laodData();
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  laodData() {
    this.loading = true;
    this.service.getAll().then(data => {
      this.dataList = data;
      this.loading = false;
    });
  }

  delete(item: any) {
    let dialogRef = this.dialog.open(ConfirmDialog, { data: { title: "Attention!", message: "Are you sure you want to delete?" } });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        if (item.active == 0) {
          this.doDelete(item);
        } else {
          this.snackBar.open("You cannot delete while active.", "OK", {
            duration: 2000,
          });
        }
      }
    });
  }

  doDelete(item) {
    this.loading = true;
    this.service.delete(item.id).then(data => {
      this.loading = false;
      this.dataList = data;
    });
  }

  toggleActive(item) {
    let action;
    if (item.active == 0) {
      action = "activate"
    } else {
      action = "deactivate"
    }
    item.active = 1 - item.active;
    let dialogRef = this.dialog.open(ConfirmDialog, { data: { title: "Attention!", message: "Are you sure you want to " + action + "?" } });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 0) {
        item.active = 1 - item.active;
      }else{
        this.doUpdate(item);
      }
    });

  }

  doUpdate(item){
    this.loading = true;
    this.service.toggle(item).then(data => {
      this.loading = false;
    });
  }

}

@Component({
  selector: 'confirm-dialog',
  templateUrl: "confirmdialog.template.html",
})
export class ConfirmDialog {
  constructor(@Inject(MD_DIALOG_DATA) public data: any) {}
}
