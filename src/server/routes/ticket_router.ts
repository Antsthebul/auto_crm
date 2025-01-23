import Router from "koa-router"
import { AppContext, TicketState } from "../../types"

export const router = new Router<{}, AppContext>()



router.post("/createTicket", async (ctx:AppContext, next)=>{
    const repairOrderService = ctx.repairOrderService 
    const data = ctx.request.body
    const id = await repairOrderService.createTicket(data)
    ctx.response.body = {"id":id}
})

router.get("/tickets/:id", async (ctx, next)=>{
    const repairOrderService = ctx.repairOrderService
    const { id } = ctx.params
    const ro = await repairOrderService.getTicket(Number(id))
    ctx.response.body = ro

})

router.get("/tickets", async (ctx, next)=>{
    const { type } = ctx.query
    
    if (!type || !["repairOrder", "appointment"].includes(type as string)){
        ctx.response.body = {tickets:[]}
    }else{
        const repairOrderService = ctx.repairOrderService
        const tickets = repairOrderService.getTickets(type as TicketState)


    }
})