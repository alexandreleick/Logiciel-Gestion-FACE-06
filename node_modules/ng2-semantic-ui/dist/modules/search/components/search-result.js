var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ViewContainerRef, HostBinding, Input, TemplateRef } from "@angular/core";
import { SuiComponentFactory } from "../../../misc/util/index";
// See https://github.com/Microsoft/TypeScript/issues/13449.
var templateRef = TemplateRef;
var SuiSearchResult = (function () {
    function SuiSearchResult(componentFactory) {
        this.componentFactory = componentFactory;
        this._optionClasses = true;
        // By default we make this function return an empty string, for the brief moment when it isn't displaying the correct label.
        this.formatter = function (value) { return ""; };
    }
    Object.defineProperty(SuiSearchResult.prototype, "template", {
        get: function () {
            return this._template;
        },
        set: function (template) {
            this._template = template;
            if (this.template) {
                this.componentFactory.createView(this.templateSibling, this.template, {
                    $implicit: this.value,
                    query: this.query
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    return SuiSearchResult;
}());
__decorate([
    HostBinding("class.result"),
    __metadata("design:type", Boolean)
], SuiSearchResult.prototype, "_optionClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SuiSearchResult.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SuiSearchResult.prototype, "query", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SuiSearchResult.prototype, "formatter", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef),
    __metadata("design:paramtypes", [TemplateRef])
], SuiSearchResult.prototype, "template", null);
__decorate([
    ViewChild("templateSibling", { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], SuiSearchResult.prototype, "templateSibling", void 0);
SuiSearchResult = __decorate([
    Component({
        selector: "sui-search-result",
        template: "\n<span #templateSibling></span>\n<span *ngIf=\"!template\" [innerHTML]=\"formatter(value, query)\"></span>\n"
    }),
    __metadata("design:paramtypes", [SuiComponentFactory])
], SuiSearchResult);
export { SuiSearchResult };
//# sourceMappingURL=search-result.js.map