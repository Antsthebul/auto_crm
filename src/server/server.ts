import Koa from "koa";
import Router from "koa-router"
import json from "koa-json";
import koaBody from "koa-body";
import { RepairOrderRepository } from "../domain/repair_order/repair_order_repository";
import { RepairOrderService } from "../services/repair_order_service";
import { router as repair_order_router } from "./routes/repair_order_router";
import { CustomerService } from "../services/customer_service";
import { CustomerRespository } from "../domain/customer/customer_repository";
const app = new Koa()

const router = new Router();

const SERVICE_DEPENDENCIES = {
    "repairOrderService":new RepairOrderService(new RepairOrderRepository()),
    "customerService":new CustomerService(new CustomerRespository())
};


(function setServiceDependencies(ctx){
    for (const [depName, serv] of Object.entries(SERVICE_DEPENDENCIES)){
        Object.defineProperty(ctx, depName, {
            value:serv
        })
    }
})(app.context)

router.get('/', (ctx, next)=>{
    console.log("Teamer")
})

app
    .use(json({ pretty:false, param: 'pretty' }))
    .use(koaBody())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(repair_order_router.routes())

app.listen(3000)