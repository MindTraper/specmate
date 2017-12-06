"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var url_1 = require("../../../../../util/url");
var SpecmateViewBase = /** @class */ (function () {
    function SpecmateViewBase(dataService, navigator, route, modal, editorCommonControlService) {
        this.dataService = dataService;
        this.navigator = navigator;
        this.route = route;
        this.modal = modal;
        this.editorCommonControlService = editorCommonControlService;
    }
    SpecmateViewBase.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.dataService.readElement(url_1.Url.fromParams(params));
        })
            .subscribe(function (element) {
            _this.onElementResolved(element);
        });
    };
    SpecmateViewBase.prototype.ngDoCheck = function () {
        this.editorCommonControlService.isCurrentEditorValid = this.isValid;
    };
    return SpecmateViewBase;
}());
exports.SpecmateViewBase = SpecmateViewBase;
//# sourceMappingURL=specmate-view-base.js.map