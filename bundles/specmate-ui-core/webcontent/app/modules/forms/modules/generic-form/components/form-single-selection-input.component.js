"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var form_element_1 = require("../base/form-element");
var FormSingleSelectionInput = /** @class */ (function (_super) {
    __extends(FormSingleSelectionInput, _super);
    function FormSingleSelectionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormSingleSelectionInput.prototype, "options", {
        get: function () {
            return JSON.parse(this.meta.values);
        },
        enumerable: true,
        configurable: true
    });
    FormSingleSelectionInput = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '[form-single-selection-input]',
            templateUrl: 'form-single-selection-input.component.html'
        })
    ], FormSingleSelectionInput);
    return FormSingleSelectionInput;
}(form_element_1.FormElement));
exports.FormSingleSelectionInput = FormSingleSelectionInput;
//# sourceMappingURL=form-single-selection-input.component.js.map