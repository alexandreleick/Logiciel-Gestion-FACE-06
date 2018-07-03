var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding } from "@angular/core";
var SuiProgress = (function () {
    function SuiProgress() {
        this._popupClasses = true;
        this.value = 0;
        this.maximum = 100;
        this.precision = 0;
        this._overrideSuccess = false;
        this.autoSuccess = true;
        this.showProgress = true;
        this._popupClasses = true;
    }
    Object.defineProperty(SuiProgress.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            // Convert value from string to number where necessary.
            var converted = +value;
            if (Number.isNaN(converted)) {
                return;
            }
            this._value = converted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "maximum", {
        get: function () {
            return this._maximum;
        },
        set: function (value) {
            // Convert value from string to number where necessary.
            var converted = +value;
            if (Number.isNaN(converted)) {
                return;
            }
            this._maximum = converted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "precision", {
        get: function () {
            return this._precision;
        },
        set: function (value) {
            // Convert value from string to number where necessary.
            var converted = +value;
            if (Number.isNaN(converted)) {
                return;
            }
            this._precision = Math.min(Math.max(converted, 0), 20);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "_reachedMaximum", {
        get: function () {
            return this._overrideSuccess || ((this.value >= this.maximum) && this.autoSuccess);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "percentage", {
        get: function () {
            var boundedValue = Math.min(Math.max(this.value, 0), this.maximum);
            var percentage = (boundedValue / this.maximum) * 100;
            return percentage.toFixed(this.precision);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "classValue", {
        set: function (classes) {
            if (classes.includes("attached") || classes.includes("tiny")) {
                this.showProgress = false;
            }
            if (classes.includes("success")) {
                this._overrideSuccess = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    return SuiProgress;
}());
__decorate([
    HostBinding("class.ui"),
    HostBinding("class.progress"),
    __metadata("design:type", Boolean)
], SuiProgress.prototype, "_popupClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiProgress.prototype, "autoSuccess", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiProgress.prototype, "showProgress", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SuiProgress.prototype, "value", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SuiProgress.prototype, "maximum", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SuiProgress.prototype, "precision", null);
__decorate([
    HostBinding("class.success"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], SuiProgress.prototype, "_reachedMaximum", null);
__decorate([
    HostBinding("attr.data-percent"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], SuiProgress.prototype, "percentage", null);
__decorate([
    Input("class"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiProgress.prototype, "classValue", null);
SuiProgress = __decorate([
    Component({
        selector: "sui-progress",
        template: "\n<div class=\"bar\" [style.width.%]=\"percentage\">\n    <div class=\"progress\" *ngIf=\"showProgress\">{{ percentage }}%</div>\n</div>\n<div class=\"label\">\n    <ng-content></ng-content>\n</div>\n",
        styles: ["\n.bar {\n    transition-duration: 300ms !important;\n    z-index: 1;\n}\n"]
    }),
    __metadata("design:paramtypes", [])
], SuiProgress);
export { SuiProgress };
//# sourceMappingURL=progress.js.map