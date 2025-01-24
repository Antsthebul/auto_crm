import Router from "koa-router"
import { AppContext, TicketState } from "../../types"
import { TicketSchema } from "../../domain/ticket/ticket_schema"

export const router = new Router<{}, AppContext>()



router.post("/createTicket", async (ctx:AppContext, next)=>{
    const ticketService = ctx.ticketService 
    const data = ctx.request.body
    const id = await ticketService.createTicket(data)
    ctx.response.body = {"id":id}
})

router.get("/tickets/:id", async (ctx, next)=>{
    const ticketService = ctx.ticketService
    const { id } = ctx.params
    const ro = await ticketService.getTicket(Number(id))
    ctx.response.body = ro

})

router.get("/tickets", async (ctx, next)=>{
    const { type } = ctx.query
    let tickets:TicketSchema[] = [];
    if (!type || !["REPAIR_ORDER", "APPOINTNMENT"].includes(type as string)){
        tickets = []
    }else{
        const ticketService = ctx.ticketService
        tickets = await ticketService.getTickets(type as TicketState)
    }
    ctx.response.body = {tickets}
})