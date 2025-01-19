import { BaseRepository } from "../../database/base_repository"
import { RepairOrder, Job } from "../../database/models/repair_order_model"
import { JobSchema, RepairOrderCreateSchema, RepairOrderSchema } from "./repair_order_schema"

export class RepairOrderRepository extends BaseRepository{
    
    async createRepairOrder(data:RepairOrderCreateSchema): Promise<number>{
        
        let ro = await RepairOrder.create({
            customerId:data.customerId,
            createdAt: new Date()
        })

        await Job.bulkCreate(data.jobs.map(j=>({description:j.description, repairOrderId:ro.id})))

        return  ro.id 

    }

    async addJobToRepairOrder(repairOrderId:number, description:string){
        await Job.create({repairOrderId, description, createdAt:new Date()})
    }

    async getRepairOrderById(repairOrderId:number): Promise<RepairOrderSchema>{
        let ro = await RepairOrder.findByPk(repairOrderId)
        if (!ro){
            throw new Error("repair order not found")
        }
        let jobs = await Job.findAll({where:{repairOrderId}})
        return {id:ro.id, 
                updatedAt:ro.updatedAt, 
                completedAt: ro.completedAt,
                customerId:ro.customerId,
                createdAt:ro.createdAt,
                jobs:jobs.map(j=>(
                    {description:j.description,
                     id:(j.id as number) , 
                     createdAt:j.createdAt, 
                     completedAt: j.completedAt,
                    updatedAt:j.updatedAt
                }))}
    }
}


