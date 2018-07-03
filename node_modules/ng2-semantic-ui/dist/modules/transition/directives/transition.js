var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Renderer2, ElementRef, Directive, Input, HostBinding, ChangeDetectorRef } from "@angular/core";
import { TransitionController } from "../classes/transition-controller";
var SuiTransition = (function () {
    function SuiTransition(_renderer, _element, _changeDetector) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetector = _changeDetector;
        this.transitionClass = true;
    }
    Object.defineProperty(SuiTransition.prototype, "suiTransition", {
        set: function (tC) {
            // Set the transition controller (e.g. '<div [suiTransition]="transitionController"></div>').
            this.setTransitionController(tC);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTransition.prototype, "isVisible", {
        get: function () {
            if (this._controller) {
                return this._controller.isVisible;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTransition.prototype, "isHidden", {
        get: function () {
            if (this._controller) {
                return this._controller.isHidden;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    // Initialises the controller with the injected renderer and elementRef.
    SuiTransition.prototype.setTransitionController = function (transitionController) {
        this._controller = transitionController;
        this._controller.registerRenderer(this._renderer);
        this._controller.registerElement(this._element.nativeElement);
        this._controller.registerChangeDetector(this._changeDetector);
    };
    return SuiTransition;
}());
__decorate([
    Input(),
    __metadata("design:type", TransitionController),
    __metadata("design:paramtypes", [TransitionController])
], SuiTransition.prototype, "suiTransition", null);
__decorate([
    HostBinding("class.transition"),
    __metadata("design:type", Boolean)
], SuiTransition.prototype, "transitionClass", void 0);
__decorate([
    HostBinding("class.visible"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], SuiTransition.prototype, "isVisible", null);
__decorate([
    HostBinding("class.hidden"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], SuiTransition.prototype, "isHidden", null);
SuiTransition = __decorate([
    Directive({
        selector: "[suiTransition]",
        exportAs: "transition"
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef, ChangeDetectorRef])
], SuiTransition);
export { SuiTransition };
//# sourceMappingURL=transition.js.map