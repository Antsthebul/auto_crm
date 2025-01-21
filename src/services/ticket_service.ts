import { TicketRepository } from "../domain/ticket/ticket_repository";
import { TicketCreateSchema, TicketSchema } from "../domain/ticket/ticket_schema";

export class TicketService{
    constructor(public repair_order_repo:TicketRepository){}

    async createTicket(data: TicketCreateSchema): Promise<number>{
        const repair_order_id =  await this.repair_order_repo.createRepairOrder(data)

        return repair_order_id
    }

    async getTicket(repairOrderId:number): Promise<TicketSchema>{
        return await this.repair_order_repo.getRepairOrderById(repairOrderId)
     
    }
}