"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prezidentas = void 0;
var Prezidentas = /** @class */ (function () {
    function Prezidentas(vardas) {
        this._reitingas = 0;
        this.vardas = vardas;
    }
    Prezidentas.prototype.pridetiReitingo = function () {
        this._reitingas++;
    };
    Prezidentas.prototype.atimtiReitingo = function () {
        this._reitingas--;
    };
    Object.defineProperty(Prezidentas.prototype, "reitingas", {
        get: function () {
            return this._reitingas;
        },
        enumerable: false,
        configurable: true
    });
    return Prezidentas;
}());
exports.Prezidentas = Prezidentas;
