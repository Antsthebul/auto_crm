import Koa from "koa";
import Router from "koa-router"
import json from "koa-json";
import koaBody from "koa-body";
import { TicketRepository } from "../domain/ticket/ticket_repository";
import { TicketService } from "../services/ticket_service";
import { router as repair_order_router } from "./routes/ticket_router";
import { router as customer_router} from "./routes/customer_router"
import { CustomerService } from "../services/customer_service";
import { CustomerRespository } from "../domain/customer/customer_repository";
import { AppContext } from "../types";

const app = new Koa()
const router = new Router<{}, AppContext>();
const HOST = process.env.HOST || "127.0.0.1"
const PORT = process.env.PORT || 3000


const SERVICE_DEPENDENCIES = {
    ticketService:new TicketService(new TicketRepository()),
    customerService:new CustomerService(new CustomerRespository())
};


(function setServiceDependencies(ctx){
    for (const [depName, serv] of Object.entries(SERVICE_DEPENDENCIES)){
        Object.defineProperty(ctx, depName, {
            value:serv
        })
    }
})(app.context)


router.get('/health', (ctx, next)=>{
    ctx.response.body = {message:"ok"}
})

// Place new routes here
router.use("/v1", 
    repair_order_router.routes(), 
    customer_router.routes()
)

app
    .use(json({ pretty:false, param: 'pretty' }))
    .use(koaBody())
    .use(router.routes())
    .use(router.allowedMethods())

console.log(`Server running on ${HOST}:${PORT}`)
app.listen(PORT)