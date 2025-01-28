import { TicketRepository } from "../domain/ticket/ticket_repository";
import { TicketCreateSchema, TicketSchema } from "../domain/ticket/ticket_schema";
import { ServiceReturnData, TicketState } from "../types";




export class TicketService{
    constructor(public repairOrderRepo:TicketRepository){}

    async createTicket(data: TicketCreateSchema): ServiceReturnData<number>
     {
        let ticketCreate: TicketCreateSchema

        try{

            ticketCreate = TicketCreateSchema.parse(data)
        }catch(err){
            return [true, "BAD_DATA", err as string]
        }

        if (!ticketCreate.jobs.length){
            return [true, "BAD_DATA", "At least one Job is required"]  
        }
        let repair_order_id 
        
        try{
            repair_order_id =  await this.repairOrderRepo.createTicket(data)
        }catch(err){
             return [true, "SERVER_ERROR", err as string]
        }

        return [false, null, repair_order_id]
    }

    async getTicket(repairOrderId:number): ServiceReturnData<TicketSchema>{
        let data;
        try{
            data = await this.repairOrderRepo.getRepairOrderById(repairOrderId)
        }catch(err){
            return [true, "BAD_DATA", err as string]
        }
        return [false, null, data]
     
    }

    async getTickets(type:TicketState, startDate?:Date, endDate?:Date ): ServiceReturnData<TicketSchema[]>{
        let data
        try{
            data = await this.repairOrderRepo.getTickets(type)
        }catch(err){
            return [true, "BAD_DATA", err as string]
        }
        return [ false, null, data]
        
    }
}