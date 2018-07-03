var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SuiDropdownModule } from "../dropdown/index";
import { SuiUtilityModule } from "../../misc/util/index";
import { SuiLocalizationModule } from "../../behaviors/localization/index";
import { SuiSelect, SuiSelectValueAccessor } from "./components/select";
import { SuiSelectOption } from "./components/select-option";
import { SuiSelectSearch } from "./directives/select-search";
import { SuiMultiSelect, SuiMultiSelectValueAccessor } from "./components/multi-select";
import { SuiMultiSelectLabel } from "./components/multi-select-label";
var SuiSelectModule = (function () {
    function SuiSelectModule() {
    }
    return SuiSelectModule;
}());
SuiSelectModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            SuiDropdownModule,
            SuiUtilityModule,
            SuiLocalizationModule
        ],
        declarations: [
            SuiSelect,
            SuiSelectOption,
            SuiSelectSearch,
            SuiSelectValueAccessor,
            SuiMultiSelect,
            SuiMultiSelectLabel,
            SuiMultiSelectValueAccessor
        ],
        exports: [
            SuiSelect,
            SuiSelectOption,
            SuiSelectSearch,
            SuiSelectValueAccessor,
            SuiMultiSelect,
            SuiMultiSelectValueAccessor
        ]
    })
], SuiSelectModule);
export { SuiSelectModule };
//# sourceMappingURL=select.module.js.map