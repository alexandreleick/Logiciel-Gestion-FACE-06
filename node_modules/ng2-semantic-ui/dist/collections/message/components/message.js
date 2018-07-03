var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TransitionController, Transition, TransitionDirection } from "../../../modules/transition/index";
var SuiMessage = (function () {
    function SuiMessage() {
        this.isDismissable = true;
        this.onDismiss = new EventEmitter();
        this.isDismissed = false;
        this.transitionController = new TransitionController();
        this.transition = "fade";
        this.transitionDuration = 300;
        this.class = "";
    }
    SuiMessage.prototype.dismiss = function () {
        var _this = this;
        this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, function () {
            _this.isDismissed = true;
            _this.onDismiss.emit(_this);
        }));
    };
    return SuiMessage;
}());
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiMessage.prototype, "isDismissable", void 0);
__decorate([
    Output("dismiss"),
    __metadata("design:type", EventEmitter)
], SuiMessage.prototype, "onDismiss", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SuiMessage.prototype, "transition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SuiMessage.prototype, "transitionDuration", void 0);
__decorate([
    Input("class"),
    __metadata("design:type", String)
], SuiMessage.prototype, "class", void 0);
SuiMessage = __decorate([
    Component({
        selector: "sui-message",
        template: "\n<div class=\"ui message {{ class }}\" *ngIf=\"!isDismissed\" [suiTransition]=\"transitionController\">\n    <i class=\"close icon\" *ngIf=\"isDismissable\" (click)=\"dismiss()\"></i>\n    <ng-content></ng-content>\n</div>\n",
        styles: ["\n/* Fix for CSS Bug */\n.ui.icon.visible.message {\n    display: flex !important;\n}\n"]
    }),
    __metadata("design:paramtypes", [])
], SuiMessage);
export { SuiMessage };
//# sourceMappingURL=message.js.map