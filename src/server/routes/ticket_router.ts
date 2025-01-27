import Router from "koa-router"
import { AppContext, TicketState } from "../../types"
import { TicketSchema } from "../../domain/ticket/ticket_schema"
import { getStatusFromText, setResponse, TextToStatus } from "."

export const router = new Router<{}, AppContext>()



router.post("/createTicket", async (ctx:AppContext, next)=>{
    const ticketService = ctx.ticketService 
    const reqBody = ctx.request.body
    const [hasErr, details, data] = await ticketService.createTicket(reqBody)
    
    setResponse(ctx, {hasErr, details, data})
})

router.get("/tickets/:id", async (ctx, next)=>{
    const ticketService = ctx.ticketService
    const { id } = ctx.params
    const [hasErr, details, data] = await ticketService.getTicket(Number(id))
    setResponse(ctx, {hasErr, details, data})

})

router.get("/tickets", async (ctx, next)=>{
    const { type:ticketType } = ctx.query

    if (!ticketType || !["REPAIR_ORDER", "APPOINTMENT"].includes(ticketType as string)){
        setResponse(ctx, {hasErr:true, details:"BAD_DATA", data:[]})
    }else{
        const ticketService = ctx.ticketService
        const [hasErr, details, data] = await ticketService.getTickets(ticketType as TicketState)
        setResponse(ctx, {hasErr, details, data})
    }
 

})