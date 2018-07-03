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
import { Component, Input, Output, HostBinding, HostListener, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { TransitionController, SuiTransition, TransitionDirection, Transition } from "../../transition/index";
var SuiDimmer = (function (_super) {
    __extends(SuiDimmer, _super);
    function SuiDimmer(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this._isDimmed = false;
        _this.isDimmedChange = new EventEmitter();
        _this.isClickable = true;
        _this.wrapContent = true;
        _this._dimmerClasses = true;
        return _this;
    }
    Object.defineProperty(SuiDimmer.prototype, "isDimmed", {
        get: function () {
            return this._isDimmed;
        },
        set: function (value) {
            var isDimmed = !!value;
            if (!this._transitionController) {
                // Initialise transition functionality when first setting dimmed, to ensure initial state doesn't transition.
                this._transitionController = new TransitionController(isDimmed, "block");
                this.setTransitionController(this._transitionController);
                this._isDimmed = isDimmed;
            }
            else if (this._isDimmed !== isDimmed) {
                this._isDimmed = isDimmed;
                this._transitionController.stopAll();
                this._transitionController.animate(new Transition("fade", this.transitionDuration, isDimmed ? TransitionDirection.In : TransitionDirection.Out));
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiDimmer.prototype.onClick = function () {
        if (this.isClickable) {
            this.isDimmed = false;
            this.isDimmedChange.emit(this.isDimmed);
        }
    };
    return SuiDimmer;
}(SuiTransition));
__decorate([
    HostBinding("class.ui"),
    HostBinding("class.dimmer"),
    __metadata("design:type", Boolean)
], SuiDimmer.prototype, "_dimmerClasses", void 0);
__decorate([
    HostBinding("class.active"),
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SuiDimmer.prototype, "isDimmed", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SuiDimmer.prototype, "isDimmedChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiDimmer.prototype, "isClickable", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SuiDimmer.prototype, "transition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SuiDimmer.prototype, "transitionDuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiDimmer.prototype, "wrapContent", void 0);
__decorate([
    HostListener("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuiDimmer.prototype, "onClick", null);
SuiDimmer = __decorate([
    Component({
        selector: "sui-dimmer",
        template: "\n<div [class.content]=\"wrapContent\">\n    <div [class.center]=\"wrapContent\">\n        <ng-content></ng-content>\n    </div>\n</div>\n",
        styles: ["\n:host.dimmer {\n    transition: none;\n}\n"]
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef, ChangeDetectorRef])
], SuiDimmer);
export { SuiDimmer };
//# sourceMappingURL=dimmer.js.map