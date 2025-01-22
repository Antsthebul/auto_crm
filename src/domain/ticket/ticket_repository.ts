import { BaseRepository } from "../../database/base_repository"
import { Ticket, Job } from "../../database/models/ticket"
import { TicketCreateSchema, TicketSchema } from "./ticket_schema"

export class TicketRepository extends BaseRepository{
    
    async createTicket(data:TicketCreateSchema): Promise<number>{
        
        let ro = await Ticket.create({
            customerId:data.customerId,
            createdAt: new Date(),
            state: data.state
        })

        await Job.bulkCreate(data.jobs.map(j=>({description:j.description, repairOrderId:ro.id})))

        return  ro.id 

    }

    async addJobToRepairOrder(repairOrderId:number, description:string){
        await Job.create({repairOrderId, description, createdAt:new Date()})
    }

    async getRepairOrderById(repairOrderId:number): Promise<TicketSchema>{
        let ro = await Ticket.findByPk(repairOrderId)
        if (!ro){
            throw new Error("repair order not found")
        }
        let jobs = await Job.findAll({where:{repairOrderId}})
        return {id:ro.id, 
                updatedAt:ro.updatedAt, 
                completedAt: ro.completedAt,
                customerId:ro.customerId,
                createdAt:ro.createdAt,
                state:ro.state,
                jobs:jobs.map(j=>(
                    {description:j.description,
                     id:(j.id as number) , 
                     createdAt:j.createdAt, 
                     completedAt: j.completedAt,
                    updatedAt:j.updatedAt
                }))}
    }
}


