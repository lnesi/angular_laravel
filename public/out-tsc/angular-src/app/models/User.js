"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Partner_1 = require("./Partner");
var User = (function () {
    function User() {
    }
    User.prototype.construtor = function () {
        this.partner = new Partner_1.Partner();
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map