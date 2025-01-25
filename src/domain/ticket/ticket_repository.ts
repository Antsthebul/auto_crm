import { BaseRepository } from "../../database/base_repository"
import { Ticket, Job } from "../../database/models/ticket"
import { TicketState } from "../../types"
import { TicketCreateSchema, TicketSchema } from "./ticket_schema"
import { FindOptions, InferAttributes, Op } from "sequelize"

export class TicketRepository extends BaseRepository{

    async createTicket(data:TicketCreateSchema): Promise<number>{
        
        let ro = await Ticket.create({
            customerId:data.customerId,
            createdAt: new Date(),
            state: data.state,
        })

        const NOW = new Date()
        await Job.bulkCreate(data.jobs.map(j=>({description:j.description, ticketId:ro.id, createdAt:NOW, updatedAt:NOW})))
        return  ro.id 
    }

    async addJobToRepairOrder(ticketId:number, description:string){
        let now = new Date()
        await Job.create({ticketId, description, createdAt:now, updatedAt:now})
    }

    async getRepairOrderById(ticketId:number): Promise<TicketSchema>{
        let ro = await Ticket.findByPk(ticketId, {include:[{model:Job}]})
        if (!ro){
            throw new Error("repair order not found")
        }
         return this._convertRowToTicket(ro)
    }

    async getTickets(type:TicketState, startDate?:Date, endDate?:Date): Promise<TicketSchema[]>{
        const filterArgs:{[k in keyof Partial<Ticket>]: any }= {state:type}

        if (startDate){
            console.log("wack")
            filterArgs["createdAt"] = {[Op.gt]: startDate} 
        }
        if (endDate){
            console.log("crack")
            filterArgs["completedAt"] = {[Op.lt]: endDate} 

        }
    
        const tickets = await Ticket.findAll({
            include: {
                model: Job,
                as: "jobs"
            },
            where:filterArgs})

        return tickets.map(t=>this._convertRowToTicket(t))
    }

    private _convertRowToTicket(ticket:Ticket): TicketSchema{
        return {id:ticket.id, 
            updatedAt:ticket.updatedAt, 
            completedAt: ticket.completedAt,
            customerId:ticket.customerId,
            createdAt:ticket.createdAt,
            state:ticket.state,
            jobs:ticket.jobs?.map(j=>(
                {description:j.description,
                 id:(j.id as number) , 
                 createdAt:j.createdAt, 
                 completedAt: j.completedAt,
                updatedAt:j.updatedAt
            }))}
    }
}


