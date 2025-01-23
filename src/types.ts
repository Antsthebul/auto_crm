import { DefaultContext } from "koa";
import { TicketService } from "./services/ticket_service";
import { CustomerService } from "./services/customer_service";

export interface AppContext extends DefaultContext{
    repairOrderService: TicketService
    customerService:CustomerService

}

export type TicketState = "REPAIR_ORDER"| "APPOINTMENT"