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
import { Component, Renderer2 } from "@angular/core";
import { DatePrecision } from "../../../misc/util/index";
import { CalendarView, CalendarViewType } from "./calendar-view";
import { CalendarRangeService } from "../services/calendar-range.service";
import { DateParser } from "../classes/date-parser";
var CalendarRangeMonthService = (function (_super) {
    __extends(CalendarRangeMonthService, _super);
    function CalendarRangeMonthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarRangeMonthService.prototype.configureItem = function (item, baseDate) {
        item.humanReadable = this.service.localeValues.monthsShort[item.date.getMonth()];
        item.isOutsideRange = false;
    };
    return CalendarRangeMonthService;
}(CalendarRangeService));
export { CalendarRangeMonthService };
var SuiCalendarMonthView = (function (_super) {
    __extends(SuiCalendarMonthView, _super);
    function SuiCalendarMonthView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Month, new CalendarRangeMonthService(DatePrecision.Year, 4, 3)) || this;
    }
    Object.defineProperty(SuiCalendarMonthView.prototype, "year", {
        get: function () {
            return new DateParser(this.service.localeValues.formats.year, this.service.localeValues).format(this.currentDate);
        },
        enumerable: true,
        configurable: true
    });
    return SuiCalendarMonthView;
}(CalendarView));
SuiCalendarMonthView = __decorate([
    Component({
        selector: "sui-calendar-month-view",
        template: "\n<table class=\"ui celled center aligned unstackable table three column month\">\n<thead>\n    <tr>\n        <th colspan=\"3\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ year }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
    }),
    __metadata("design:paramtypes", [Renderer2])
], SuiCalendarMonthView);
export { SuiCalendarMonthView };
//# sourceMappingURL=month-view.js.map