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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../../../../config/config");
var specmate_data_service_1 = require("../../../../../services/data/specmate-data.service");
var ProcessStep_1 = require("../../../../../model/ProcessStep");
var draggable_element_base_1 = require("../draggable-element-base");
var ProcessEnd_1 = require("../../../../../model/ProcessEnd");
var ProcessEndGraphicalNode = (function (_super) {
    __extends(ProcessEndGraphicalNode, _super);
    function ProcessEndGraphicalNode(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.nodeType = ProcessEnd_1.ProcessEnd;
        return _this;
    }
    Object.defineProperty(ProcessEndGraphicalNode.prototype, "dimensions", {
        get: function () {
            return {
                width: config_1.Config.PROCESS_START_END_NODE_RADIUS * 2,
                height: config_1.Config.PROCESS_START_END_NODE_RADIUS * 2
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProcessEndGraphicalNode.prototype, "radius", {
        get: function () {
            return config_1.Config.PROCESS_START_END_NODE_RADIUS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProcessEndGraphicalNode.prototype, "element", {
        get: function () {
            return this.node;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", ProcessStep_1.ProcessStep)
    ], ProcessEndGraphicalNode.prototype, "node", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ProcessEndGraphicalNode.prototype, "selected", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ProcessEndGraphicalNode.prototype, "valid", void 0);
    ProcessEndGraphicalNode = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '[process-end-graphical-node]',
            templateUrl: 'process-end-graphical-node.component.svg',
            styleUrls: ['process-end-graphical-node.component.css']
        }),
        __metadata("design:paramtypes", [specmate_data_service_1.SpecmateDataService])
    ], ProcessEndGraphicalNode);
    return ProcessEndGraphicalNode;
}(draggable_element_base_1.DraggableElementBase));
exports.ProcessEndGraphicalNode = ProcessEndGraphicalNode;
//# sourceMappingURL=process-end-graphical-node.component.js.map