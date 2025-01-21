interface BaseSchema{
    createdAt: Date
    updatedAt: Date
    completedAt?: Date
}

interface BaseTicket extends BaseSchema{
    customerId:number
    jobs:JobSchema[],
    state:string
}

export interface TicketSchema extends BaseTicket{
    id:number
}

export interface TicketCreateSchema extends BaseTicket{}

export interface BaseJobSchema extends BaseSchema{
    description:string
}
export interface CreateJobSchema extends BaseJobSchema{}
export interface JobSchema extends BaseJobSchema{
    id:number
}