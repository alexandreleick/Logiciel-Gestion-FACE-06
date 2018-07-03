var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter } from "@angular/core";
import enGB from "../locales/en-GB";
import * as $extend from "extend";
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function deepExtend(target, source) {
    // Rollup...
    var extend = $extend.default || $extend;
    return extend(true, target, source);
}
function lang(language) {
    return language.toLowerCase().replace("-", "");
}
var SuiLocalizationService = (function () {
    function SuiLocalizationService() {
        this.onLanguageUpdate = new EventEmitter();
        this._fallbackValues = enGB;
        this._values = {};
        this._language = "en-GB";
        this.load("en-GB", enGB);
    }
    Object.defineProperty(SuiLocalizationService.prototype, "language", {
        get: function () {
            return this._language;
        },
        enumerable: true,
        configurable: true
    });
    SuiLocalizationService.prototype.setLanguage = function (language) {
        if (lang(this._language) !== lang(language)) {
            this._language = language;
            this.onLanguageUpdate.emit();
        }
    };
    SuiLocalizationService.prototype.get = function (language) {
        if (language === void 0) { language = this.language; }
        var values = deepClone(this._fallbackValues);
        if (!this._values[lang(language)]) {
            throw new Error("Locale " + language + " is not loaded");
        }
        deepExtend(values, this._values[lang(language)]);
        return deepClone(values);
    };
    SuiLocalizationService.prototype.override = function (values, overrides) {
        return deepExtend(deepClone(values), overrides);
    };
    SuiLocalizationService.prototype.load = function (language, values) {
        this._values[lang(language)] = deepClone(values);
        this.onLanguageUpdate.emit();
    };
    SuiLocalizationService.prototype.patch = function (language, values) {
        deepExtend(this._values[lang(language)], values);
    };
    SuiLocalizationService.prototype.interpolate = function (value, variables) {
        return variables.reduce(function (s, _a) {
            var k = _a[0], v = _a[1];
            return s.replace(new RegExp("#{" + k + "}", "g"), v);
        }, value);
    };
    return SuiLocalizationService;
}());
SuiLocalizationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], SuiLocalizationService);
export { SuiLocalizationService };
//# sourceMappingURL=localization.service.js.map