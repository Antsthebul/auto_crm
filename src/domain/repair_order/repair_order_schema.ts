interface BaseSchema{
    createdAt: Date
    updatedAt: Date
    completedAt?: Date
}

interface BaseRepairOrder extends BaseSchema{
    customerId:number
    jobs:JobSchema[]
}

export interface RepairOrderSchema extends BaseRepairOrder{
    id:number
}

export interface RepairOrderCreateSchema extends BaseRepairOrder{}

export interface BaseJobSchema extends BaseSchema{
    description:string
}
export interface CreateJobSchema extends BaseJobSchema{}
export interface JobSchema extends BaseJobSchema{
    id:number
}