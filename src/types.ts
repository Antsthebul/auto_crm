import { DefaultContext } from "koa";
import { TicketService } from "./services/ticket_service";
import { CustomerService } from "./services/customer_service";
import { z } from "zod"
import { TextToStatus } from "./server/routes";

export interface AppContext extends DefaultContext{
    ticketService: TicketService
    customerService:CustomerService

}

export const TicketState = z.enum([ "REPAIR_ORDER", "APPOINTMENT"])
export type TicketState = z.infer<typeof TicketState>

type isTrue<T>= T extends true ? true: never;

type isFalse<T> =  T extends false | 0 | '' | null | undefined ? T:never;

export type ServiceReturnData<T> = Promise<[isFalse<boolean>, null, T] | [isTrue<boolean>, TextToStatus ,string]>