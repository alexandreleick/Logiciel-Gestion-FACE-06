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
import { Directive, ElementRef, Renderer2, EventEmitter, Output, Input, HostListener } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor, customValidatorFactory, CustomValidator, PositioningPlacement, SuiComponentFactory, KeyCode } from "../../../misc/util/index";
import { SuiLocalizationService } from "../../../behaviors/localization/index";
import { SuiPopupComponentController, PopupConfig, PopupTrigger } from "../../popup/index";
import { SuiDatepicker, DatepickerMode } from "../components/datepicker";
import { YearConfig, MonthConfig, DatetimeConfig, TimeConfig, DateConfig } from "../classes/calendar-config";
var SuiDatepickerDirective = SuiDatepickerDirective_1 = (function (_super) {
    __extends(SuiDatepickerDirective, _super);
    function SuiDatepickerDirective(renderer, element, componentFactory, localizationService) {
        var _this = _super.call(this, renderer, element, componentFactory, SuiDatepicker, new PopupConfig({
            trigger: PopupTrigger.Focus,
            placement: PositioningPlacement.BottomLeft,
            transition: "scale",
            transitionDuration: 200
        })) || this;
        _this.renderer = renderer;
        _this.localizationService = localizationService;
        // This ensures the popup is drawn correctly (i.e. no border).
        _this.renderer.addClass(_this.popup.elementRef.nativeElement, "ui");
        _this.renderer.addClass(_this.popup.elementRef.nativeElement, "calendar");
        _this.onLocaleUpdate();
        _this.localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
        _this.onSelectedDateChange = new EventEmitter();
        _this.onValidatorChange = new EventEmitter();
        _this.mode = DatepickerMode.Datetime;
        return _this;
    }
    Object.defineProperty(SuiDatepickerDirective.prototype, "selectedDate", {
        get: function () {
            return this._selectedDate;
        },
        set: function (date) {
            this._selectedDate = date;
            this.onSelectedDateChange.emit(date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (mode) {
            this._mode = mode || DatepickerMode.Datetime;
            switch (this._mode) {
                case DatepickerMode.Year:
                    this.config = new YearConfig();
                    break;
                case DatepickerMode.Month:
                    this.config = new MonthConfig();
                    break;
                case DatepickerMode.Date:
                default:
                    this.config = new DateConfig();
                    break;
                case DatepickerMode.Datetime:
                    this.config = new DatetimeConfig();
                    break;
                case DatepickerMode.Time:
                    this.config = new TimeConfig();
                    break;
            }
            this.writeValue(this.selectedDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "localeValues", {
        get: function () {
            return this.localizationService.override(this._localeValues, this.localeOverrides);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "placement", {
        set: function (placement) {
            this.popup.config.placement = placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "transition", {
        set: function (transition) {
            this.popup.config.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "transitionDuration", {
        set: function (duration) {
            this.popup.config.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    SuiDatepickerDirective.prototype.popupOnOpen = function () {
        var _this = this;
        if (this.componentInstance) {
            this.componentInstance.service.config = this.config;
            this.componentInstance.service.localeValues = this.localeValues;
            this.componentInstance.service.currentDate = this.initialDate || new Date();
            this.componentInstance.service.selectedDate = this.selectedDate;
            this.componentInstance.service.maxDate = this.maxDate;
            this.componentInstance.service.minDate = this.minDate;
            if (this.firstDayOfWeek != undefined) {
                this.componentInstance.service.firstDayOfWeek = this.firstDayOfWeek;
            }
            this.componentInstance.service.reset();
            this.componentInstance.service.onDateChange.subscribe(function (d) {
                _this.selectedDate = d;
                _this.close();
            });
        }
    };
    SuiDatepickerDirective.prototype.ngOnChanges = function (_a) {
        var maxDate = _a.maxDate, minDate = _a.minDate, mode = _a.mode;
        if (maxDate || minDate || mode) {
            this.onValidatorChange.emit();
        }
    };
    SuiDatepickerDirective.prototype.onLocaleUpdate = function () {
        this._localeValues = this.localizationService.get().datepicker;
    };
    SuiDatepickerDirective.prototype.validate = function (c) {
        var value = c.value;
        if (value != undefined) {
            // We post process the min & max date because sometimes this puts the date outside of the allowed range.
            if (this.minDate && value < this.minDate) {
                return { suiMinDate: { required: this.minDate, actual: value } };
            }
            if (this.maxDate && value > this.maxDate) {
                return { suiMaxDate: { required: this.maxDate, actual: value } };
            }
        }
        // Angular expects null
        // tslint:disable-next-line:no-null-keyword
        return null;
    };
    SuiDatepickerDirective.prototype.writeValue = function (value) {
        this.selectedDate = value;
        if (this.componentInstance) {
            this.componentInstance.service.selectedDate = value;
        }
    };
    SuiDatepickerDirective.prototype.onKeyDown = function (e) {
        if (e.keyCode === KeyCode.Escape) {
            this.close();
        }
    };
    return SuiDatepickerDirective;
}(SuiPopupComponentController));
__decorate([
    Input("pickerMode"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiDatepickerDirective.prototype, "mode", null);
__decorate([
    Input("pickerInitialDate"),
    __metadata("design:type", Date)
], SuiDatepickerDirective.prototype, "initialDate", void 0);
__decorate([
    Input("pickerMaxDate"),
    __metadata("design:type", Date)
], SuiDatepickerDirective.prototype, "maxDate", void 0);
__decorate([
    Input("pickerMinDate"),
    __metadata("design:type", Date)
], SuiDatepickerDirective.prototype, "minDate", void 0);
__decorate([
    Input("pickerFirstDayOfWeek"),
    __metadata("design:type", Number)
], SuiDatepickerDirective.prototype, "firstDayOfWeek", void 0);
__decorate([
    Input("pickerLocaleOverrides"),
    __metadata("design:type", Object)
], SuiDatepickerDirective.prototype, "localeOverrides", void 0);
__decorate([
    Input("pickerPlacement"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiDatepickerDirective.prototype, "placement", null);
__decorate([
    Input("pickerTransition"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiDatepickerDirective.prototype, "transition", null);
__decorate([
    Input("pickerTransitionDuration"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SuiDatepickerDirective.prototype, "transitionDuration", null);
__decorate([
    Output("pickerSelectedDateChange"),
    __metadata("design:type", EventEmitter)
], SuiDatepickerDirective.prototype, "onSelectedDateChange", void 0);
__decorate([
    Output("pickerValidatorChange"),
    __metadata("design:type", EventEmitter)
], SuiDatepickerDirective.prototype, "onValidatorChange", void 0);
__decorate([
    HostListener("keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], SuiDatepickerDirective.prototype, "onKeyDown", null);
SuiDatepickerDirective = SuiDatepickerDirective_1 = __decorate([
    Directive({
        selector: "[suiDatepicker]",
        providers: [customValidatorFactory(SuiDatepickerDirective_1)]
    }),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef,
        SuiComponentFactory,
        SuiLocalizationService])
], SuiDatepickerDirective);
export { SuiDatepickerDirective };
var SuiDatepickerDirectiveValueAccessor = SuiDatepickerDirectiveValueAccessor_1 = (function (_super) {
    __extends(SuiDatepickerDirectiveValueAccessor, _super);
    function SuiDatepickerDirectiveValueAccessor(host) {
        var _this = _super.call(this, host) || this;
        _this.host = host;
        return _this;
    }
    return SuiDatepickerDirectiveValueAccessor;
}(CustomValueAccessor));
SuiDatepickerDirectiveValueAccessor = SuiDatepickerDirectiveValueAccessor_1 = __decorate([
    Directive({
        selector: "[suiDatepicker]",
        host: { "(pickerSelectedDateChange)": "onChange($event)" },
        providers: [customValueAccessorFactory(SuiDatepickerDirectiveValueAccessor_1)]
    }),
    __metadata("design:paramtypes", [SuiDatepickerDirective])
], SuiDatepickerDirectiveValueAccessor);
export { SuiDatepickerDirectiveValueAccessor };
var SuiDatepickerDirectiveValidator = SuiDatepickerDirectiveValidator_1 = (function (_super) {
    __extends(SuiDatepickerDirectiveValidator, _super);
    function SuiDatepickerDirectiveValidator(host) {
        var _this = _super.call(this, host) || this;
        _this.host = host;
        return _this;
    }
    return SuiDatepickerDirectiveValidator;
}(CustomValidator));
SuiDatepickerDirectiveValidator = SuiDatepickerDirectiveValidator_1 = __decorate([
    Directive({
        selector: "[suiDatepicker]",
        host: { "(pickerValidatorChange)": "onValidatorChange()" },
        providers: [customValidatorFactory(SuiDatepickerDirectiveValidator_1)]
    }),
    __metadata("design:paramtypes", [SuiDatepickerDirective])
], SuiDatepickerDirectiveValidator);
export { SuiDatepickerDirectiveValidator };
var SuiDatepickerDirective_1, SuiDatepickerDirectiveValueAccessor_1, SuiDatepickerDirectiveValidator_1;
//# sourceMappingURL=datepicker.directive.js.map