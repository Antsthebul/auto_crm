import Router from "koa-router";
import { AppContext } from "../../types";
import { setResponse } from ".";

export const router = new Router<{}, AppContext>()

router.get("/customers", async (ctx:AppContext, next)=>{
    const custService = ctx.customerService
    ctx.response.body = await custService.getCustomers()
})

router.post("/customers", async (ctx:AppContext, next)=>{
    const custService = ctx.customerService
    const reqBody = ctx.request.body
    const [hasErr, details, customer_id] = await custService.createCustomer(reqBody)

    setResponse(ctx, {hasErr, details, data:{"id":customer_id}})

})

router.get("/customers/:id", async (ctx:AppContext, next)=>{
    const custService = ctx.customerService
    const { id } = ctx.params
    const [hasErr, details, data] = await custService.getCustomer(id)
    setResponse(ctx, {hasErr, details, data})
})


router.del("/customers/:id", async (ctx:AppContext, next)=>{
    const custService = ctx.customerService
    const { id } = ctx.params
    await custService.deleteCustomer(id)
    setResponse(ctx, {hasErr:false, details:"PROCESSED", data:"OK"})
})