"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrezidentasComponent = void 0;
var core_1 = require("@angular/core");
var PrezidentasComponent = /** @class */ (function () {
    function PrezidentasComponent() {
        this.onFavoriteSelected = new core_1.EventEmitter();
    }
    PrezidentasComponent.prototype.ngOnInit = function () { };
    __decorate([
        (0, core_1.Input)()
    ], PrezidentasComponent.prototype, "prezidentas", void 0);
    __decorate([
        (0, core_1.Output)()
    ], PrezidentasComponent.prototype, "onFavoriteSelected", void 0);
    PrezidentasComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-prezidentas',
            templateUrl: './prezidentas.component.html',
            styleUrls: ['./prezidentas.component.scss'],
        })
    ], PrezidentasComponent);
    return PrezidentasComponent;
}());
exports.PrezidentasComponent = PrezidentasComponent;
