import Router from "koa-router"
import { AppContext } from "../../types"

export const router = new Router<{}, AppContext>()



router.post("/createTicket", async (ctx:AppContext, next)=>{
    const repairOrderService = ctx.repairOrderService 
    const data = ctx.request.body
    const id = await repairOrderService.createTicket(data)
    ctx.response.body = {"id":id}
})

router.get("/ticket/:id", async (ctx, next)=>{
    const repairOrderService = ctx.repairOrderService
    const { id } = ctx.params
    const ro = await repairOrderService.getTicket(Number(id))
    ctx.response.body = ro

})