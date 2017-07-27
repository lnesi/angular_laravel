"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var MasterList = (function () {
    function MasterList(app, service, cdRef, dialog, snackBar) {
        this.app = app;
        this.service = service;
        this.cdRef = cdRef;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.dataList = null;
        this.loading = false;
    }
    MasterList.prototype.ngAfterViewInit = function () {
        this.laodData();
    };
    MasterList.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    MasterList.prototype.laodData = function () {
        var _this = this;
        this.loading = true;
        this.service.getAll().then(function (data) {
            _this.dataList = data;
            _this.loading = false;
        });
    };
    MasterList.prototype.delete = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(ConfirmDialog, { data: { title: "Attention!", message: "Are you sure you want to delete?" } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1) {
                if (item.active == 0) {
                    _this.doDelete(item);
                }
                else {
                    _this.snackBar.open("You cannot delete while active.", null, { duration: 2000 });
                }
            }
        });
    };
    MasterList.prototype.doDelete = function (item) {
        var _this = this;
        this.loading = true;
        this.service.delete(item.id).then(function (data) {
            _this.loading = false;
            _this.dataList = data;
        });
    };
    MasterList.prototype.toggleActive = function (item) {
        var _this = this;
        var action;
        if (item.active == 0) {
            action = "activate";
        }
        else {
            action = "deactivate";
        }
        item.active = 1 - item.active;
        var dialogRef = this.dialog.open(ConfirmDialog, { data: { title: "Attention!", message: "Are you sure you want to " + action + "?" } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 0) {
                item.active = 1 - item.active;
            }
            else {
                _this.doUpdate(item);
            }
        });
    };
    MasterList.prototype.doUpdate = function (item) {
        var _this = this;
        this.loading = true;
        this.service.toggle(item).then(function (data) {
            _this.loading = false;
        });
    };
    return MasterList;
}());
exports.MasterList = MasterList;
var ConfirmDialog = (function () {
    function ConfirmDialog(data) {
        this.data = data;
    }
    return ConfirmDialog;
}());
ConfirmDialog = __decorate([
    core_1.Component({
        selector: 'confirm-dialog',
        templateUrl: "confirmdialog.template.html",
    }),
    __param(0, core_1.Inject(material_1.MD_DIALOG_DATA)),
    __metadata("design:paramtypes", [Object])
], ConfirmDialog);
exports.ConfirmDialog = ConfirmDialog;
//# sourceMappingURL=MasterList.component.js.map