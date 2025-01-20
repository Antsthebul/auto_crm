import Router from "koa-router";
import { AppContext } from "../../types";

export const router = new Router<{}, AppContext>()

router.get("/customers", async (ctx:AppContext, next)=>{
    const custService = ctx.customerService
    ctx.response.body = await custService.getCustomers()
})

router.post("/customers", async (ctx:AppContext, next)=>{
    const custService = ctx.customerService
    const data = ctx.request.body
    const customer_id = await custService.createCustomer(data)
    ctx.response.body = {id:customer_id}

})

router.get("/customers/:id", async (ctx:AppContext, next)=>{
    const custService = ctx.customerService
    const { id } = ctx.params
    ctx.response.body = await custService.getCustomer(id)
})


router.del("/customers/:id", async (ctx:AppContext, next)=>{
    const custService = ctx.customerService
    const { id } = ctx.params
    await custService.deleteCustomer(id)
    ctx.response.body = "OK"
})