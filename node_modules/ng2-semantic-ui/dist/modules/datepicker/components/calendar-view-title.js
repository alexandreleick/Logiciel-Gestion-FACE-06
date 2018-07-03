var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output } from "@angular/core";
import { CalendarRangeService } from "../services/calendar-range.service";
var SuiCalendarViewTitle = (function () {
    function SuiCalendarViewTitle() {
        this.onZoomOut = new EventEmitter();
    }
    return SuiCalendarViewTitle;
}());
__decorate([
    Input(),
    __metadata("design:type", CalendarRangeService)
], SuiCalendarViewTitle.prototype, "ranges", void 0);
__decorate([
    Output("zoomOut"),
    __metadata("design:type", EventEmitter)
], SuiCalendarViewTitle.prototype, "onZoomOut", void 0);
SuiCalendarViewTitle = __decorate([
    Component({
        selector: "sui-calendar-view-title",
        template: "\n<span class=\"title link\" (click)=\"onZoomOut.emit()\">\n    <ng-content></ng-content>\n</span>\n<span class=\"prev link\" [class.disabled]=\"!ranges?.canMovePrevious\" (click)=\"ranges?.movePrevious()\">\n    <i class=\"chevron left icon\"></i>\n</span>\n<span class=\"next link\" [class.disabled]=\"!ranges?.canMoveNext\" (click)=\"ranges?.moveNext()\">\n    <i class=\"chevron right icon\"></i>\n</span>\n",
        styles: ["\n.title.link {\n    display: inline-block;\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n"]
    }),
    __metadata("design:paramtypes", [])
], SuiCalendarViewTitle);
export { SuiCalendarViewTitle };
//# sourceMappingURL=calendar-view-title.js.map