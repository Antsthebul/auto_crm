import Router from "koa-router";
import { AppContext } from "../../types";

const router = new Router<{}, AppContext>()

router.get("/customer", (ctx:AppContext, next)=>{
    const custService = ctx.customerService
})