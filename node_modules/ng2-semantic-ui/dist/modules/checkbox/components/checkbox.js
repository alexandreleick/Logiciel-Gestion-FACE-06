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
var SuiCheckbox = (function () {
    function SuiCheckbox() {
        this.isChecked = false;
        this.onCheckChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this._checkboxClasses = true;
    }
    Object.defineProperty(SuiCheckbox.prototype, "checkedAttribute", {
        get: function () {
            return this.isChecked ? "" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCheckbox.prototype, "isDisabledAttribute", {
        get: function () {
            return this.isDisabled ? "disabled" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    SuiCheckbox.prototype.onMouseDown = function (e) {
        e.preventDefault();
    };
    SuiCheckbox.prototype.onClick = function () {
        if (!this.isDisabled && !this.isReadonly) {
            this.toggle();
            this.focusCheckbox();
        }
    };
    SuiCheckbox.prototype.onFocusOut = function () {
        this.onTouched.emit();
    };
    SuiCheckbox.prototype.toggle = function () {
        this.isChecked = !this.isChecked;
        this.onCheckChange.emit(this.isChecked);
    };
    SuiCheckbox.prototype.writeValue = function (value) {
        this.isChecked = value;
    };
    SuiCheckbox.prototype.focusCheckbox = function () {
        this._checkboxElement.nativeElement.focus();
    };
    return SuiCheckbox;
}());
__decorate([
    HostBinding("class.ui"),
    HostBinding("class.checkbox"),
    __metadata("design:type", Boolean)
], SuiCheckbox.prototype, "_checkboxClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SuiCheckbox.prototype, "name", void 0);
__decorate([
    HostBinding("class.checked"),
    __metadata("design:type", Boolean)
], SuiCheckbox.prototype, "isChecked", void 0);
__decorate([
    Output("checkChange"),
    __metadata("design:type", EventEmitter)
], SuiCheckbox.prototype, "onCheckChange", void 0);
__decorate([
    Output("touched"),
    __metadata("design:type", EventEmitter)
], SuiCheckbox.prototype, "onTouched", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SuiCheckbox.prototype, "isDisabled", void 0);
__decorate([
    HostBinding("class.read-only"),
    Input(),
    __metadata("design:type", Boolean)
], SuiCheckbox.prototype, "isReadonly", void 0);
__decorate([
    ViewChild("checkbox"),
    __metadata("design:type", ElementRef)
], SuiCheckbox.prototype, "_checkboxElement", void 0);
__decorate([
    HostListener("mousedown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], SuiCheckbox.prototype, "onMouseDown", null);
__decorate([
    HostListener("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuiCheckbox.prototype, "onClick", null);
__decorate([
    HostListener("focusout"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuiCheckbox.prototype, "onFocusOut", null);
SuiCheckbox = __decorate([
    Component({
        selector: "sui-checkbox",
        exportAs: "suiCheckbox",
        template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [(ngModel)]=\"isChecked\"\n       #checkbox>\n<label>\n    <ng-content></ng-content>\n</label>\n"
    }),
    __metadata("design:paramtypes", [])
], SuiCheckbox);
export { SuiCheckbox };
var SuiCheckboxValueAccessor = SuiCheckboxValueAccessor_1 = (function (_super) {
    __extends(SuiCheckboxValueAccessor, _super);
    function SuiCheckboxValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    return SuiCheckboxValueAccessor;
}(CustomValueAccessor));
SuiCheckboxValueAccessor = SuiCheckboxValueAccessor_1 = __decorate([
    Directive({
        selector: "sui-checkbox",
        host: {
            "(checkChange)": "onChange($event)",
            "(touched)": "onTouched()"
        },
        providers: [customValueAccessorFactory(SuiCheckboxValueAccessor_1)]
    }),
    __metadata("design:paramtypes", [SuiCheckbox])
], SuiCheckboxValueAccessor);
export { SuiCheckboxValueAccessor };
var SuiCheckboxValueAccessor_1;
//# sourceMappingURL=checkbox.js.map