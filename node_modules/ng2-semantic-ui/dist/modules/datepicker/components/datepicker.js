var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, HostListener } from "@angular/core";
import { CalendarService } from "./../services/calendar.service";
import { DatetimeConfig } from "../classes/calendar-config";
import { SuiLocalizationService } from "../../../behaviors/localization/index";
export var DatepickerMode = {
    Year: "year",
    Month: "month",
    Date: "date",
    Datetime: "datetime",
    Time: "time"
};
var SuiDatepicker = (function () {
    function SuiDatepicker(localizationService) {
        this.service = new CalendarService(new DatetimeConfig(), localizationService.get().datepicker);
        this._calendarClasses = true;
    }
    SuiDatepicker.prototype.onMouseDown = function (e) {
        e.preventDefault();
    };
    return SuiDatepicker;
}());
__decorate([
    HostBinding("class.ui"),
    HostBinding("class.active"),
    HostBinding("class.calendar"),
    __metadata("design:type", Boolean)
], SuiDatepicker.prototype, "_calendarClasses", void 0);
__decorate([
    HostListener("mousedown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], SuiDatepicker.prototype, "onMouseDown", null);
SuiDatepicker = __decorate([
    Component({
        selector: "sui-datepicker",
        template: "\n<ng-container [ngSwitch]=\"service.currentView\">\n    <sui-calendar-year-view [service]=\"service\" *ngSwitchCase=\"0\"></sui-calendar-year-view>\n    <sui-calendar-month-view [service]=\"service\" *ngSwitchCase=\"1\"></sui-calendar-month-view>    \n    <sui-calendar-date-view [service]=\"service\" *ngSwitchCase=\"2\"></sui-calendar-date-view>    \n    <sui-calendar-hour-view [service]=\"service\" *ngSwitchCase=\"3\"></sui-calendar-hour-view>    \n    <sui-calendar-minute-view [service]=\"service\" *ngSwitchCase=\"4\"></sui-calendar-minute-view>    \n</ng-container>\n",
        styles: ["\n:host {\n    user-select: none;\n}\n"]
    }),
    __metadata("design:paramtypes", [SuiLocalizationService])
], SuiDatepicker);
export { SuiDatepicker };
//# sourceMappingURL=datepicker.js.map