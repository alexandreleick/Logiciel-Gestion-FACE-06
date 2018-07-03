var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, ContentChild } from "@angular/core";
import { SuiSidebar } from "./sidebar";
import { SuiSidebarSibling } from "./sidebar-sibling";
var SuiSidebarContainer = (function () {
    function SuiSidebarContainer() {
        this._containerClasses = true;
    }
    SuiSidebarContainer.prototype.ngAfterContentInit = function () {
        if (!this.sidebar) {
            throw new Error("You must include a <sui-sidebar> element within the container.");
        }
        this.service = this.sidebar.service;
        if (!this.sibling) {
            throw new Error("You must include a <sui-sidebar-sibling> element within the container.");
        }
        this.sibling.service = this.service;
    };
    return SuiSidebarContainer;
}());
__decorate([
    HostBinding("class.pushable"),
    __metadata("design:type", Boolean)
], SuiSidebarContainer.prototype, "_containerClasses", void 0);
__decorate([
    ContentChild(SuiSidebar),
    __metadata("design:type", SuiSidebar)
], SuiSidebarContainer.prototype, "sidebar", void 0);
__decorate([
    ContentChild(SuiSidebarSibling),
    __metadata("design:type", SuiSidebarSibling)
], SuiSidebarContainer.prototype, "sibling", void 0);
SuiSidebarContainer = __decorate([
    Component({
        selector: "sui-sidebar-container",
        template: "<ng-content></ng-content>",
        styles: ["\n:host {\n    display: block;\n}\n"]
    }),
    __metadata("design:paramtypes", [])
], SuiSidebarContainer);
export { SuiSidebarContainer };
//# sourceMappingURL=sidebar-container.js.map