"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const app = new koa_1.default();
const router = new koa_router_1.default();
router.get('/', (ctx, next) => {
    console.log("Teamer");
});
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
//# sourceMappingURL=server.js.map