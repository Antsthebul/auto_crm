import { TicketRepository } from "../domain/ticket/ticket_repository";
import { TicketCreateSchema, TicketSchema } from "../domain/ticket/ticket_schema";
import { TicketState } from "../types";

export class TicketService{
    constructor(public repairOrderRepo:TicketRepository){}

    async createTicket(data: TicketCreateSchema): Promise<number>{
        const repair_order_id =  await this.repairOrderRepo.createTicket(data)

        return repair_order_id
    }

    async getTicket(repairOrderId:number): Promise<TicketSchema>{
        return await this.repairOrderRepo.getRepairOrderById(repairOrderId)
     
    }

    async getTickets(type:TicketState, startDate?:Date, endDate?:Date ): Promise<TicketSchema[]>{
        return await this.repairOrderRepo.getTickets(type)
        
    }
}