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
import { Component, Directive, Input, Output, EventEmitter, HostBinding, HostListener } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/index";
var SuiRating = (function () {
    function SuiRating() {
        this.hoveredIndex = -1;
        this.value = 0;
        this.valueChange = new EventEmitter();
        this.maximum = 5;
        this.isReadonly = false;
        this._ratingClasses = true;
    }
    Object.defineProperty(SuiRating.prototype, "maximum", {
        get: function () {
            return this._maximum;
        },
        set: function (value) {
            this._maximum = +value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiRating.prototype, "icons", {
        get: function () {
            // tslint:disable-next-line:prefer-literal
            return new Array(this.maximum);
        },
        enumerable: true,
        configurable: true
    });
    SuiRating.prototype.onClick = function (i) {
        if (!this.isReadonly) {
            this.value = i + 1;
            this.valueChange.emit(this.value);
        }
    };
    SuiRating.prototype.onMouseover = function (i) {
        this.hoveredIndex = i;
    };
    SuiRating.prototype.onMouseout = function () {
        this.hoveredIndex = -1;
    };
    SuiRating.prototype.writeValue = function (value) {
        this.value = value;
    };
    return SuiRating;
}());
__decorate([
    HostBinding("class.ui"),
    HostBinding("class.rating"),
    __metadata("design:type", Boolean)
], SuiRating.prototype, "_ratingClasses", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SuiRating.prototype, "valueChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SuiRating.prototype, "maximum", null);
__decorate([
    HostBinding("class.read-only"),
    Input(),
    __metadata("design:type", Boolean)
], SuiRating.prototype, "isReadonly", void 0);
__decorate([
    HostListener("mouseout"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuiRating.prototype, "onMouseout", null);
SuiRating = __decorate([
    Component({
        selector: "sui-rating",
        template: "\n<i class=\"icon\"\n   *ngFor=\"let icon of icons; let i = index\"\n   (mouseover)=\"onMouseover(i)\"\n   (click)=\"onClick(i)\"\n   [class.selected]=\"hoveredIndex >= i && !isReadonly\"\n   [class.active]=\"value > i\">\n</i>\n",
        styles: ["\n:host.read-only .icon {\n    cursor: auto\n}\n"]
    }),
    __metadata("design:paramtypes", [])
], SuiRating);
export { SuiRating };
var SuiRatingValueAccessor = SuiRatingValueAccessor_1 = (function (_super) {
    __extends(SuiRatingValueAccessor, _super);
    function SuiRatingValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    return SuiRatingValueAccessor;
}(CustomValueAccessor));
SuiRatingValueAccessor = SuiRatingValueAccessor_1 = __decorate([
    Directive({
        selector: "sui-rating",
        host: { "(valueChange)": "onChange($event)" },
        providers: [customValueAccessorFactory(SuiRatingValueAccessor_1)]
    }),
    __metadata("design:paramtypes", [SuiRating])
], SuiRatingValueAccessor);
export { SuiRatingValueAccessor };
var SuiRatingValueAccessor_1;
//# sourceMappingURL=rating.js.map