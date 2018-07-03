var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, ElementRef, EventEmitter, Output, Input, Directive, Renderer2 } from "@angular/core";
import { KeyCode, customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/index";
import { SuiLocalizationService } from "../../../behaviors/localization/index";
import { SuiSelectBase } from "../classes/select-base";
var SuiMultiSelect = (function (_super) {
    __extends(SuiMultiSelect, _super);
    function SuiMultiSelect(element, renderer, localizationService) {
        var _this = _super.call(this, element, renderer, localizationService) || this;
        _this.selectedOptions = [];
        _this.selectedOptionsChange = new EventEmitter();
        _this.hasLabels = true;
        _this._multiSelectClasses = true;
        return _this;
    }
    Object.defineProperty(SuiMultiSelect.prototype, "filteredOptions", {
        get: function () {
            var _this = this;
            if (this.maxSelectedReached) {
                // If we have reached the maximum number of selections, then empty the results completely.
                return [];
            }
            var searchResults = this.searchService.results;
            if (!this.hasLabels) {
                return searchResults;
            }
            else {
                // Returns the search results \ selected options.
                return searchResults
                    .filter(function (r) { return _this.selectedOptions.find(function (o) { return r === o; }) == undefined; });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "availableOptions", {
        get: function () {
            return this.filteredOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "hasLabels", {
        get: function () {
            return this._hasLabels;
        },
        set: function (hasLabels) {
            this._hasLabels = hasLabels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "placeholder", {
        get: function () {
            return this._placeholder || this.localeValues.multi.placeholder;
        },
        set: function (placeholder) {
            this._placeholder = placeholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "maxSelectedReached", {
        get: function () {
            if (this.maxSelected == undefined) {
                // If there is no maximum then we can immediately return.
                return false;
            }
            return this.selectedOptions.length === this.maxSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "maxSelectedMessage", {
        get: function () {
            return this._localizationService.interpolate(this.localeValues.multi.maxSelectedMessage, [["max", this.maxSelected.toString()]]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "selectedMessage", {
        get: function () {
            return this._localizationService.interpolate(this.localeValues.multi.selectedMessage, [["count", this.selectedOptions.length.toString()]]);
        },
        enumerable: true,
        configurable: true
    });
    SuiMultiSelect.prototype.optionsUpdateHook = function () {
        var _this = this;
        if (!this._writtenOptions && this.selectedOptions.length > 0) {
            // We need to check the options still exist.
            this.writeValue(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
        }
        if (this._writtenOptions && this.searchService.options.length > 0) {
            // If there were values written by ngModel before the options had been loaded, this runs to fix it.
            this.selectedOptions = this._writtenOptions
                .map(function (v) { return _this.findOption(_this.searchService.options, v); })
                .filter(function (v) { return v != undefined; });
            if (this.selectedOptions.length === this._writtenOptions.length) {
                this._writtenOptions = undefined;
            }
        }
    };
    SuiMultiSelect.prototype.initialiseRenderedOption = function (option) {
        _super.prototype.initialiseRenderedOption.call(this, option);
        // Boldens the item so it appears selected in the dropdown.
        option.isActive = !this.hasLabels && this.selectedOptions.indexOf(option.value) !== -1;
    };
    SuiMultiSelect.prototype.selectOption = function (option) {
        var _this = this;
        if (this.selectedOptions.indexOf(option) !== -1) {
            this.deselectOption(option);
            return;
        }
        this.selectedOptions.push(option);
        this.selectedOptionsChange.emit(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
        this.resetQuery(false);
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    };
    SuiMultiSelect.prototype.writeValue = function (values) {
        var _this = this;
        if (values instanceof Array) {
            if (this.searchService.options.length > 0) {
                // If the options have already been loaded, we can immediately match the ngModel values to options.
                this.selectedOptions = values
                    .map(function (v) { return _this.findOption(_this.searchService.options, v); })
                    .filter(function (v) { return v != undefined; });
            }
            if (values.length > 0 && this.selectedOptions.length === 0) {
                if (this.valueField && this.searchService.hasItemLookup) {
                    // If the search service has a selected lookup function, make use of that to load the initial values.
                    this.searchService
                        .initialLookup(values)
                        .then(function (items) { return _this.selectedOptions = items; });
                }
                else {
                    // Otherwise, cache the written value for when options are set.
                    this._writtenOptions = values;
                }
            }
            if (values.length === 0) {
                this.selectedOptions = [];
            }
        }
        else {
            this.selectedOptions = [];
        }
    };
    SuiMultiSelect.prototype.deselectOption = function (option) {
        var _this = this;
        // Update selected options to the previously selected options \ {option}.
        this.selectedOptions = this.selectedOptions.filter(function (so) { return so !== option; });
        this.selectedOptionsChange.emit(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    };
    SuiMultiSelect.prototype.onQueryInputKeydown = function (event) {
        if (event.keyCode === KeyCode.Backspace && this.query === "" && this.selectedOptions.length > 0) {
            // Deselect the rightmost option when the user presses backspace in the search input.
            this.deselectOption(this.selectedOptions[this.selectedOptions.length - 1]);
        }
    };
    return SuiMultiSelect;
}(SuiSelectBase));
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SuiMultiSelect.prototype, "selectedOptionsChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SuiMultiSelect.prototype, "hasLabels", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SuiMultiSelect.prototype, "placeholder", null);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SuiMultiSelect.prototype, "maxSelected", void 0);
__decorate([
    HostBinding("class.multiple"),
    __metadata("design:type", Boolean)
], SuiMultiSelect.prototype, "_multiSelectClasses", void 0);
SuiMultiSelect = __decorate([
    Component({
        selector: "sui-multi-select",
        template: "\n<!-- Dropdown icon -->\n<i class=\"{{ icon }} icon\" (click)=\"onCaretClick($event)\"></i>\n\n<ng-container *ngIf=\"hasLabels\">\n<!-- Multi-select labels -->\n    <sui-multi-select-label *ngFor=\"let selected of selectedOptions;\"\n                            [value]=\"selected\"\n                            [query]=\"query\"\n                            [formatter]=\"configuredFormatter\"\n                            [template]=\"optionTemplate\"\n                            (deselected)=\"deselectOption($event)\"></sui-multi-select-label>\n</ng-container>\n\n<!-- Query input -->\n<input suiSelectSearch\n       type=\"text\"\n       [hidden]=\"!isSearchable || isSearchExternal\">\n\n<!-- Helper text -->\n<div class=\"text\"\n     [class.default]=\"hasLabels\"\n     [class.filtered]=\"!!query && !isSearchExternal\">\n    \n    <!-- Placeholder text -->\n    <ng-container *ngIf=\"hasLabels; else selectedBlock\">{{ placeholder }}</ng-container>\n    \n    <!-- Summary shown when labels are hidden -->\n    <ng-template #selectedBlock> {{ selectedMessage }}</ng-template>\n</div>\n\n<!-- Select dropdown menu -->\n<div class=\"menu\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     [menuAutoSelectFirst]=\"true\">\n\n    <ng-content></ng-content>\n    <ng-container *ngIf=\"availableOptions.length == 0 \">\n        <div *ngIf=\"!maxSelectedReached\" class=\"message\">{{ localeValues.noResultsMessage }}</div>\n        <div *ngIf=\"maxSelectedReached\" class=\"message\">{{ maxSelectedMessage }}</div>\n    </ng-container>\n</div>\n",
        styles: ["\n:host input.search {\n    width: 12em !important;\n}\n"]
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2, SuiLocalizationService])
], SuiMultiSelect);
export { SuiMultiSelect };
// Value accessor directive for the select to support ngModel.
var SuiMultiSelectValueAccessor = SuiMultiSelectValueAccessor_1 = (function (_super) {
    __extends(SuiMultiSelectValueAccessor, _super);
    function SuiMultiSelectValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    return SuiMultiSelectValueAccessor;
}(CustomValueAccessor));
SuiMultiSelectValueAccessor = SuiMultiSelectValueAccessor_1 = __decorate([
    Directive({
        selector: "sui-multi-select",
        host: {
            "(selectedOptionsChange)": "onChange($event)",
            "(touched)": "onTouched()"
        },
        providers: [customValueAccessorFactory(SuiMultiSelectValueAccessor_1)]
    }),
    __metadata("design:paramtypes", [SuiMultiSelect])
], SuiMultiSelectValueAccessor);
export { SuiMultiSelectValueAccessor };
var SuiMultiSelectValueAccessor_1;
//# sourceMappingURL=multi-select.js.map