var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SuiPopupModule } from "../popup/index";
import { SuiLocalizationModule } from "../../behaviors/localization/index";
import { SuiUtilityModule } from "../../misc/util/index";
import { SuiCalendarViewTitle } from "./components/calendar-view-title";
import { SuiCalendarYearView } from "./views/year-view";
import { SuiCalendarMonthView } from "./views/month-view";
import { SuiCalendarItem } from "./directives/calendar-item";
import { SuiCalendarDateView } from "./views/date-view";
import { SuiDatepicker } from "./components/datepicker";
import { SuiCalendarHourView } from "./views/hour-view";
import { SuiCalendarMinuteView } from "./views/minute-view";
import { SuiDatepickerInputDirective } from "./directives/input.directive";
import { SuiDatepickerDirective, SuiDatepickerDirectiveValueAccessor, SuiDatepickerDirectiveValidator } from "./directives/datepicker.directive";
var SuiDatepickerModule = (function () {
    function SuiDatepickerModule() {
    }
    return SuiDatepickerModule;
}());
SuiDatepickerModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            SuiPopupModule,
            SuiLocalizationModule,
            SuiUtilityModule
        ],
        declarations: [
            SuiCalendarItem,
            SuiCalendarViewTitle,
            SuiCalendarYearView,
            SuiCalendarMonthView,
            SuiCalendarDateView,
            SuiCalendarHourView,
            SuiCalendarMinuteView,
            SuiDatepicker,
            SuiDatepickerDirective,
            SuiDatepickerDirectiveValueAccessor,
            SuiDatepickerDirectiveValidator,
            SuiDatepickerInputDirective
        ],
        exports: [
            SuiDatepickerDirective,
            SuiDatepickerDirectiveValueAccessor,
            SuiDatepickerDirectiveValidator,
            SuiDatepickerInputDirective
        ],
        entryComponents: [
            SuiDatepicker
        ]
    })
], SuiDatepickerModule);
export { SuiDatepickerModule };
//# sourceMappingURL=datepicker.module.js.map