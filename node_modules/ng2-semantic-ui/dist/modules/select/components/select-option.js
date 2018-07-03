var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, HostListener, EventEmitter, ViewContainerRef, ViewChild, Renderer2, ElementRef, Output, ChangeDetectorRef } from "@angular/core";
import { SuiDropdownMenuItem } from "../../dropdown/index";
import { HandledEvent } from "../../../misc/util/index";
var SuiSelectOption = (function (_super) {
    __extends(SuiSelectOption, _super);
    function SuiSelectOption(renderer, element, changeDetector) {
        var _this = 
        // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
        // This is not done via adding the .item class because it isn't supported by Angular.
        _super.call(this, renderer, element) || this;
        _this.changeDetector = changeDetector;
        _this._optionClasses = true;
        _this.isActive = false;
        _this.onSelected = new EventEmitter();
        // By default we make the default text an empty label, for the brief moment when it isn't displaying the correct one.
        _this.renderedText = "";
        _this.usesTemplate = false;
        return _this;
    }
    Object.defineProperty(SuiSelectOption.prototype, "formatter", {
        set: function (formatter) {
            if (!this.usesTemplate) {
                this.renderedText = formatter(this.value);
            }
            else {
                this.renderedText = undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiSelectOption.prototype.onClick = function (e) {
        var _this = this;
        e.eventHandled = true;
        setTimeout(function () { return _this.onSelected.emit(_this.value); });
    };
    return SuiSelectOption;
}(SuiDropdownMenuItem));
__decorate([
    HostBinding("class.item"),
    __metadata("design:type", Boolean)
], SuiSelectOption.prototype, "_optionClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SuiSelectOption.prototype, "value", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SuiSelectOption.prototype, "onSelected", void 0);
__decorate([
    HostBinding("class.active"),
    __metadata("design:type", Boolean)
], SuiSelectOption.prototype, "isActive", void 0);
__decorate([
    ViewChild("templateSibling", { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], SuiSelectOption.prototype, "templateSibling", void 0);
__decorate([
    HostListener("click", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HandledEvent]),
    __metadata("design:returntype", void 0)
], SuiSelectOption.prototype, "onClick", null);
SuiSelectOption = __decorate([
    Component({
        selector: "sui-select-option",
        template: "\n<span #templateSibling></span>\n<span [innerHTML]=\"renderedText\"></span>\n"
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef, ChangeDetectorRef])
], SuiSelectOption);
export { SuiSelectOption };
//# sourceMappingURL=select-option.js.map