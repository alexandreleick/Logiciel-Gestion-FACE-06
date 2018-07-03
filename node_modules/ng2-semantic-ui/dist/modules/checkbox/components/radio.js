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
import { Component, Directive, Input, Output, HostListener, HostBinding, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/index";
var SuiRadio = (function () {
    function SuiRadio() {
        this._radioClasses = true;
        this.isChecked = false;
        this.onCurrentValueChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this._radioClasses = true;
    }
    Object.defineProperty(SuiRadio.prototype, "checkedAttribute", {
        get: function () {
            return this.isChecked ? "" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiRadio.prototype, "isDisabledAttribute", {
        get: function () {
            return this.isDisabled ? "disabled" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    SuiRadio.prototype.onMouseDown = function (e) {
        e.preventDefault();
    };
    SuiRadio.prototype.onClick = function () {
        if (!this.isDisabled && !this.isReadonly) {
            this.currentValue = this.value;
            this.onCurrentValueChange.emit(this.currentValue);
            this.update();
            this.focusRadio();
        }
    };
    SuiRadio.prototype.onFocusOut = function () {
        this.onTouched.emit();
    };
    SuiRadio.prototype.update = function () {
        this.isChecked = this.currentValue === this.value;
    };
    SuiRadio.prototype.writeValue = function (value) {
        this.currentValue = value;
        this.update();
    };
    SuiRadio.prototype.focusRadio = function () {
        this._radioElement.nativeElement.focus();
    };
    return SuiRadio;
}());
__decorate([
    HostBinding("class.ui"),
    HostBinding("class.radio"),
    HostBinding("class.checkbox"),
    __metadata("design:type", Boolean)
], SuiRadio.prototype, "_radioClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SuiRadio.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SuiRadio.prototype, "value", void 0);
__decorate([
    HostBinding("class.checked"),
    __metadata("design:type", Boolean)
], SuiRadio.prototype, "isChecked", void 0);
__decorate([
    Output("currentValueChange"),
    __metadata("design:type", EventEmitter)
], SuiRadio.prototype, "onCurrentValueChange", void 0);
__decorate([
    Output("touched"),
    __metadata("design:type", EventEmitter)
], SuiRadio.prototype, "onTouched", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiRadio.prototype, "isDisabled", void 0);
__decorate([
    HostBinding("class.read-only"),
    Input(),
    __metadata("design:type", Boolean)
], SuiRadio.prototype, "isReadonly", void 0);
__decorate([
    ViewChild("radio"),
    __metadata("design:type", ElementRef)
], SuiRadio.prototype, "_radioElement", void 0);
__decorate([
    HostListener("mousedown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], SuiRadio.prototype, "onMouseDown", null);
__decorate([
    HostListener("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuiRadio.prototype, "onClick", null);
__decorate([
    HostListener("focusout"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuiRadio.prototype, "onFocusOut", null);
SuiRadio = __decorate([
    Component({
        selector: "sui-radio-button",
        template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [ngModel]=\"isChecked\"\n       (ngModel)=\"currentValue = value\"\n       #radio>\n<label>\n    <ng-content></ng-content>\n</label>\n"
    }),
    __metadata("design:paramtypes", [])
], SuiRadio);
export { SuiRadio };
var SuiRadioValueAccessor = SuiRadioValueAccessor_1 = (function (_super) {
    __extends(SuiRadioValueAccessor, _super);
    function SuiRadioValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    return SuiRadioValueAccessor;
}(CustomValueAccessor));
SuiRadioValueAccessor = SuiRadioValueAccessor_1 = __decorate([
    Directive({
        selector: "sui-radio-button",
        host: {
            "(currentValueChange)": "onChange($event)",
            "(touched)": "onTouched()"
        },
        providers: [customValueAccessorFactory(SuiRadioValueAccessor_1)]
    }),
    __metadata("design:paramtypes", [SuiRadio])
], SuiRadioValueAccessor);
export { SuiRadioValueAccessor };
var SuiRadioValueAccessor_1;
//# sourceMappingURL=radio.js.map