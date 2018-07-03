var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostBinding, HostListener, Input, EventEmitter, ChangeDetectorRef } from "@angular/core";
var CalendarItem = (function () {
    function CalendarItem(date) {
        this.date = date;
    }
    return CalendarItem;
}());
export { CalendarItem };
var SuiCalendarItem = (function () {
    function SuiCalendarItem(changeDetector) {
        this.changeDetector = changeDetector;
        this.hasFocus = false;
        this.onFocussed = new EventEmitter();
    }
    Object.defineProperty(SuiCalendarItem.prototype, "isSelectable", {
        get: function () {
            return this.item.isSelectable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarItem.prototype, "isActive", {
        get: function () {
            return this.item.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarItem.prototype, "isToday", {
        get: function () {
            return this.item.isToday;
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarItem.prototype.onMouseMove = function () {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.onFocussed.emit(this.hasFocus);
        }
    };
    SuiCalendarItem.prototype.onMouseLeave = function () {
        this.hasFocus = false;
        this.onFocussed.emit(this.hasFocus);
    };
    return SuiCalendarItem;
}());
__decorate([
    Input("calendarItem"),
    __metadata("design:type", CalendarItem)
], SuiCalendarItem.prototype, "item", void 0);
__decorate([
    HostBinding("class.disabled"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], SuiCalendarItem.prototype, "isSelectable", null);
__decorate([
    HostBinding("class.active"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], SuiCalendarItem.prototype, "isActive", null);
__decorate([
    HostBinding("class.today"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], SuiCalendarItem.prototype, "isToday", null);
__decorate([
    HostBinding("class.focus"),
    __metadata("design:type", Boolean)
], SuiCalendarItem.prototype, "hasFocus", void 0);
__decorate([
    HostListener("mousemove"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuiCalendarItem.prototype, "onMouseMove", null);
__decorate([
    HostListener("mouseleave"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuiCalendarItem.prototype, "onMouseLeave", null);
SuiCalendarItem = __decorate([
    Directive({
        selector: "[calendarItem]"
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], SuiCalendarItem);
export { SuiCalendarItem };
//# sourceMappingURL=calendar-item.js.map