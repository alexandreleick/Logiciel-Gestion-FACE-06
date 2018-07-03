var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiDimmerModule } from "../dimmer/index";
import { SuiTransitionModule } from "../transition/index";
import { SuiUtilityModule } from "../../misc/util/index";
import { SuiModalService } from "./services/modal.service";
import { SuiModal } from "./components/modal";
var SuiModalModule = (function () {
    function SuiModalModule() {
    }
    return SuiModalModule;
}());
SuiModalModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            SuiDimmerModule,
            SuiTransitionModule,
            SuiUtilityModule
        ],
        declarations: [
            SuiModal
        ],
        exports: [
            SuiModal
        ],
        providers: [
            SuiModalService
        ],
        entryComponents: [
            SuiModal
        ]
    })
], SuiModalModule);
export { SuiModalModule };
//# sourceMappingURL=modal.module.js.map