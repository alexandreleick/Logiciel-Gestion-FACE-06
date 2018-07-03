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
import { Directive, Input, ElementRef, TemplateRef, Renderer2 } from "@angular/core";
import { Util, PositioningPlacement, SuiComponentFactory } from "../../../misc/util/index";
import { PopupConfig, PopupTrigger } from "../classes/popup-config";
import { SuiPopupConfig } from "../services/popup.service";
import { SuiPopupTemplateController } from "../classes/popup-template-controller";
var templateRef = TemplateRef;
var SuiPopupDirective = (function (_super) {
    __extends(SuiPopupDirective, _super);
    function SuiPopupDirective(renderer, element, componentFactory, popupDefaults) {
        return _super.call(this, renderer, element, componentFactory, new PopupConfig(popupDefaults)) || this;
    }
    Object.defineProperty(SuiPopupDirective.prototype, "popupHeader", {
        set: function (header) {
            this.popup.config.header = header;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupText", {
        set: function (text) {
            this.popup.config.text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupInverted", {
        set: function (inverted) {
            this.popup.config.isInverted = Util.DOM.parseBooleanAttribute(inverted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupBasic", {
        set: function (basic) {
            this.popup.config.isBasic = Util.DOM.parseBooleanAttribute(basic);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransition", {
        set: function (transition) {
            this.popup.config.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransitionDuration", {
        set: function (duration) {
            this.popup.config.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupPlacement", {
        set: function (placement) {
            this.popup.config.placement = placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupDelay", {
        set: function (delay) {
            this.popup.config.delay = delay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTrigger", {
        get: function () {
            return this.popup.config.trigger;
        },
        set: function (trigger) {
            this.popup.config.trigger = trigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTemplate", {
        set: function (template) {
            this.template = template;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTemplateContext", {
        set: function (context) {
            this.context = context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupConfig", {
        set: function (config) {
            this.configure(config);
        },
        enumerable: true,
        configurable: true
    });
    return SuiPopupDirective;
}(SuiPopupTemplateController));
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiPopupDirective.prototype, "popupHeader", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiPopupDirective.prototype, "popupText", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SuiPopupDirective.prototype, "popupInverted", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SuiPopupDirective.prototype, "popupBasic", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiPopupDirective.prototype, "popupTransition", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SuiPopupDirective.prototype, "popupTransitionDuration", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiPopupDirective.prototype, "popupPlacement", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SuiPopupDirective.prototype, "popupDelay", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiPopupDirective.prototype, "popupTrigger", null);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef),
    __metadata("design:paramtypes", [TemplateRef])
], SuiPopupDirective.prototype, "popupTemplate", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SuiPopupDirective.prototype, "popupTemplateContext", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SuiPopupDirective.prototype, "popupConfig", null);
SuiPopupDirective = __decorate([
    Directive({
        selector: "[suiPopup]",
        exportAs: "suiPopup"
    }),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef,
        SuiComponentFactory,
        SuiPopupConfig])
], SuiPopupDirective);
export { SuiPopupDirective };
//# sourceMappingURL=popup.directive.js.map