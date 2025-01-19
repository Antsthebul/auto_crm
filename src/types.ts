import { DefaultContext } from "koa";
import { RepairOrderService } from "./services/repair_order_service";
import { CustomerService } from "./services/customer_service";

export interface AppContext extends DefaultContext{
    repairOrderService: RepairOrderService
    customerService:CustomerService

}