"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
require("./controllers");
require("./services");
routing_controllers_1.useContainer(typedi_1.Container);
const app = routing_controllers_1.createKoaServer();
exports.default = app.callback();
//# sourceMappingURL=app.js.map