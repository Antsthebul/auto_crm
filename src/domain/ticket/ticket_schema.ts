import { TicketState } from "../../types"
import { z } from "zod"

const BaseSchema = z.object({
    createdAt: z.date(),
    updatedAt: z.date(),
    completedAt: z.optional(z.date()),
    scheduledAt: z.optional(z.date())
})

export const  BaseJobSchema =  BaseSchema.extend({
    description: z.string()
})

export const JobSchema = BaseJobSchema.extend({
    id:z.number()
})

const BaseTicket  = BaseSchema.extend({
    customerId:z.number(),
    jobs:z.array(JobSchema),
    state:TicketState    
}) 




export const TicketSchema = BaseTicket.extend({
    id:z.number()
})
export type TicketSchema = z.infer<typeof TicketSchema>

export const TicketCreateSchema = BaseTicket
export type TicketCreateSchema = z.infer<typeof TicketCreateSchema>


export const CreateJobSchema = BaseJobSchema



