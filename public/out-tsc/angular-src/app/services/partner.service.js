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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var PartnerService = (function () {
    function PartnerService(http) {
        this.http = http;
    }
    PartnerService.prototype.getAll = function () {
        return this.http.get("/ajax/partners").toPromise().then(function (response) { return response.json(); });
    };
    PartnerService.prototype.delete = function (id) {
        return this.http.delete("/ajax/partners/" + id).toPromise().then(function (response) { return response.json(); });
    };
    PartnerService.prototype.toggle = function (partner) {
        return this.http.post("/ajax/partners/" + partner.id + "/toggle", partner).toPromise().then(function (response) { return response.json(); });
    };
    PartnerService.prototype.store = function (partner) {
        return this.http.post("/ajax/partners", partner).toPromise().then(function (response) { return response.json(); });
    };
    PartnerService.prototype.get = function (id) {
        return this.http.get("/ajax/partners/" + id).toPromise().then(function (response) { return response.json(); });
    };
    PartnerService.prototype.update = function (partner) {
        return this.http.patch("/ajax/partners/" + partner.id, partner).toPromise().then(function (response) { return response.json(); });
    };
    return PartnerService;
}());
PartnerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PartnerService);
exports.PartnerService = PartnerService;
//# sourceMappingURL=partner.service.js.map