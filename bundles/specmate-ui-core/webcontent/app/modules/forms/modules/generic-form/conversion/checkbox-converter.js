"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckboxConverter = /** @class */ (function () {
    function CheckboxConverter() {
    }
    CheckboxConverter.prototype.convertFromModelToControl = function (val) {
        if (val && val === 'true') {
            return true;
        }
        return null;
    };
    CheckboxConverter.prototype.convertFromControlToModel = function (val) {
        if (val) {
            return 'true';
        }
        return 'false';
    };
    return CheckboxConverter;
}());
exports.CheckboxConverter = CheckboxConverter;
//# sourceMappingURL=checkbox-converter.js.map