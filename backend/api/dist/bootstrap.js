"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
http_1.default
    .createServer(app_1.default)
    .listen(3000, () => {
    console.log('Server running http://localhost:3000');
});
//# sourceMappingURL=bootstrap.js.map