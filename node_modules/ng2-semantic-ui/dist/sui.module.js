var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
// Collections
import { SuiMessageModule, SuiPaginationModule } from "./collections";
// Modules
import { SuiAccordionModule, SuiCheckboxModule, SuiCollapseModule, SuiDatepickerModule, SuiDimmerModule, SuiDropdownModule, SuiModalModule, SuiPopupModule, SuiProgressModule, SuiRatingModule, SuiSearchModule, SuiSidebarModule, SuiTabsModule, SuiSelectModule, SuiTransitionModule } from "./modules";
// Behaviors
import { SuiLocalizationModule } from "./behaviors";
// Misc
import { SuiUtilityModule } from "./misc";
var SuiModule = (function () {
    function SuiModule() {
    }
    return SuiModule;
}());
SuiModule = __decorate([
    NgModule({
        exports: [
            // Collections
            SuiMessageModule,
            SuiPaginationModule,
            // Modules
            SuiAccordionModule,
            SuiCheckboxModule,
            SuiCollapseModule,
            SuiDatepickerModule,
            SuiDimmerModule,
            SuiDropdownModule,
            SuiModalModule,
            SuiPopupModule,
            SuiProgressModule,
            SuiRatingModule,
            SuiSearchModule,
            SuiSelectModule,
            SuiSidebarModule,
            SuiTabsModule,
            SuiTransitionModule,
            // Behaviors
            SuiLocalizationModule,
            // Misc
            SuiUtilityModule
        ]
    })
], SuiModule);
export { SuiModule };
//# sourceMappingURL=sui.module.js.map