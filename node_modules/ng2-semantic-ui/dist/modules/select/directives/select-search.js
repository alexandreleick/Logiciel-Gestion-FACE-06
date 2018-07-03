var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, EventEmitter, Renderer2, ElementRef, HostListener, HostBinding } from "@angular/core";
var SuiSelectSearch = (function () {
    function SuiSelectSearch(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.onQueryUpdated = new EventEmitter();
        this.onQueryKeyDown = new EventEmitter();
        this._searchClass = true;
        this._autoComplete = "off";
    }
    Object.defineProperty(SuiSelectSearch.prototype, "query", {
        set: function (query) {
            this._renderer.setProperty(this._element.nativeElement, "value", query);
        },
        enumerable: true,
        configurable: true
    });
    SuiSelectSearch.prototype.updateQuery = function (query) {
        this.onQueryUpdated.emit(query);
    };
    SuiSelectSearch.prototype.onKeyDown = function (e) {
        this.onQueryKeyDown.emit(e);
    };
    SuiSelectSearch.prototype.focus = function () {
        var _this = this;
        // Slightly delay to support in menu search.
        this._element.nativeElement.focus();
        setTimeout(function () { return _this._element.nativeElement.focus(); });
    };
    return SuiSelectSearch;
}());
__decorate([
    HostBinding("class.search"),
    __metadata("design:type", Boolean)
], SuiSelectSearch.prototype, "_searchClass", void 0);
__decorate([
    HostBinding("attr.autocomplete"),
    __metadata("design:type", String)
], SuiSelectSearch.prototype, "_autoComplete", void 0);
__decorate([
    HostListener("input", ["$event.target.value"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SuiSelectSearch.prototype, "updateQuery", null);
__decorate([
    HostListener("keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], SuiSelectSearch.prototype, "onKeyDown", null);
SuiSelectSearch = __decorate([
    Directive({
        selector: "input[suiSelectSearch]"
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef])
], SuiSelectSearch);
export { SuiSelectSearch };
//# sourceMappingURL=select-search.js.map