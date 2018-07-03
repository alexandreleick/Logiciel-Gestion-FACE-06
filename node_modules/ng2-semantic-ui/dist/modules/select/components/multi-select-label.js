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
import { Component, Input, HostBinding, HostListener, EventEmitter, ViewContainerRef, ViewChild, Renderer2, ElementRef, Output, ChangeDetectorRef, TemplateRef } from "@angular/core";
import { SuiTransition, TransitionController, Transition, TransitionDirection } from "../../transition/index";
import { HandledEvent, SuiComponentFactory } from "../../../misc/util/index";
// See https://github.com/Microsoft/TypeScript/issues/13449.
var templateRef = TemplateRef;
var SuiMultiSelectLabel = (function (_super) {
    __extends(SuiMultiSelectLabel, _super);
    function SuiMultiSelectLabel(renderer, element, changeDetector, componentFactory) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this.componentFactory = componentFactory;
        // Initialise transition functionality.
        _this._transitionController = new TransitionController(false, "inline-block");
        _this.setTransitionController(_this._transitionController);
        _this.onDeselected = new EventEmitter();
        _this._labelClasses = true;
        _this._transitionController.animate(new Transition("scale", 100, TransitionDirection.In));
        return _this;
    }
    Object.defineProperty(SuiMultiSelectLabel.prototype, "template", {
        get: function () {
            return this._template;
        },
        set: function (template) {
            this._template = template;
            if (this.template) {
                this.componentFactory.createView(this.templateSibling, this.template, {
                    $implicit: this.value,
                    query: this.query
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiMultiSelectLabel.prototype.deselectOption = function (e) {
        var _this = this;
        e.eventHandled = true;
        this._transitionController.animate(new Transition("scale", 100, TransitionDirection.Out, function () {
            return _this.onDeselected.emit(_this.value);
        }));
    };
    SuiMultiSelectLabel.prototype.onClick = function (e) {
        e.eventHandled = true;
    };
    return SuiMultiSelectLabel;
}(SuiTransition));
__decorate([
    HostBinding("class.ui"),
    HostBinding("class.label"),
    __metadata("design:type", Boolean)
], SuiMultiSelectLabel.prototype, "_labelClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SuiMultiSelectLabel.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SuiMultiSelectLabel.prototype, "query", void 0);
__decorate([
    Output("deselected"),
    __metadata("design:type", EventEmitter)
], SuiMultiSelectLabel.prototype, "onDeselected", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SuiMultiSelectLabel.prototype, "formatter", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef),
    __metadata("design:paramtypes", [TemplateRef])
], SuiMultiSelectLabel.prototype, "template", null);
__decorate([
    ViewChild("templateSibling", { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], SuiMultiSelectLabel.prototype, "templateSibling", void 0);
__decorate([
    HostListener("click", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HandledEvent]),
    __metadata("design:returntype", void 0)
], SuiMultiSelectLabel.prototype, "onClick", null);
SuiMultiSelectLabel = __decorate([
    Component({
        selector: "sui-multi-select-label",
        template: "\n<span #templateSibling></span>\n<span *ngIf=\"!template\" [innerHTML]=\"formatter(value)\"></span>\n<i class=\"delete icon\" (click)=\"deselectOption($event)\"></i>\n"
    }),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef,
        ChangeDetectorRef,
        SuiComponentFactory])
], SuiMultiSelectLabel);
export { SuiMultiSelectLabel };
//# sourceMappingURL=multi-select-label.js.map