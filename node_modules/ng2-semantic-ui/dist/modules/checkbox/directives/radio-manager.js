var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ContentChildren, QueryList, ElementRef } from "@angular/core";
import { SuiRadio } from "../components/radio";
import { Util } from "../../../misc/util/index";
var SuiRadioManager = SuiRadioManager_1 = (function () {
    function SuiRadioManager(element) {
        this.element = element;
        this.isNested = false;
        this._radioSubs = [];
    }
    SuiRadioManager.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.updateNesting();
        this._subManagers.changes.subscribe(function () { return _this.updateNesting(); });
        this.updateRadios();
        this._renderedRadios.changes.subscribe(function () { return _this.updateRadios(); });
    };
    SuiRadioManager.prototype.updateNesting = function () {
        var _this = this;
        this._subManagers
            .filter(function (m) { return m !== _this; })
            .forEach(function (m) { return m.isNested = true; });
    };
    SuiRadioManager.prototype.updateRadios = function () {
        var _this = this;
        this._radioSubs.forEach(function (s) { return s.unsubscribe(); });
        this._radioSubs = [];
        var groups = Util.Array.groupBy(this._renderedRadios.toArray(), "name");
        Object
            .keys(groups)
            .map(function (k) { return groups[k]; })
            .forEach(function (g) { return g
            .forEach(function (r) { return _this._radioSubs
            .push(r.onCurrentValueChange
            .subscribe(function (v) {
            if (!_this.isNested) {
                g.forEach(function (radio) { return radio.writeValue(v); });
            }
        })); }); });
    };
    return SuiRadioManager;
}());
__decorate([
    ContentChildren(SuiRadioManager_1, { descendants: true }),
    __metadata("design:type", QueryList)
], SuiRadioManager.prototype, "_subManagers", void 0);
__decorate([
    ContentChildren(SuiRadio, { descendants: true }),
    __metadata("design:type", QueryList)
], SuiRadioManager.prototype, "_renderedRadios", void 0);
SuiRadioManager = SuiRadioManager_1 = __decorate([
    Directive({
        selector: "form:not([ngForm]):not([[ngForm]]),ngForm,[ngForm]"
    }),
    __metadata("design:paramtypes", [ElementRef])
], SuiRadioManager);
export { SuiRadioManager };
var SuiRadioManager_1;
//# sourceMappingURL=radio-manager.js.map