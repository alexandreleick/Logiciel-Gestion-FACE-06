var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, ContentChildren, QueryList } from "@angular/core";
import { SuiAccordionPanel } from "./accordion-panel";
import { SuiAccordionService } from "../services/accordion.service";
var SuiAccordion = (function () {
    function SuiAccordion() {
        // Accordion service is unique to each set of panels.
        this._service = new SuiAccordionService();
        this.accordionClasses = true;
    }
    Object.defineProperty(SuiAccordion.prototype, "closeOthers", {
        get: function () {
            return this._service.closeOthers;
        },
        set: function (value) {
            this._service.closeOthers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordion.prototype, "transition", {
        set: function (transition) {
            this._service.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordion.prototype, "transitionDuration", {
        set: function (duration) {
            this._service.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    SuiAccordion.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.updatePanels();
        // Reconnect panels after they have updated.
        this._panels.changes.subscribe(function () { return _this.updatePanels(); });
    };
    SuiAccordion.prototype.updatePanels = function () {
        var _this = this;
        this._panels.forEach(function (p) { return _this._service.addPanel(p); });
    };
    return SuiAccordion;
}());
__decorate([
    HostBinding("class.ui"),
    HostBinding("class.accordion"),
    __metadata("design:type", Boolean)
], SuiAccordion.prototype, "accordionClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SuiAccordion.prototype, "closeOthers", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiAccordion.prototype, "transition", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SuiAccordion.prototype, "transitionDuration", null);
__decorate([
    ContentChildren(SuiAccordionPanel),
    __metadata("design:type", QueryList)
], SuiAccordion.prototype, "_panels", void 0);
SuiAccordion = __decorate([
    Component({
        selector: "sui-accordion",
        template: "\n<ng-content></ng-content>\n",
        styles: ["\n/* Fix for general styling issues */\n:host {\n    display: block;\n}\n\n/* Fix for styled border issue */\n:host.styled sui-accordion-panel:first-child .title {\n    border-top: none\n}\n"]
    }),
    __metadata("design:paramtypes", [])
], SuiAccordion);
export { SuiAccordion };
//# sourceMappingURL=accordion.js.map