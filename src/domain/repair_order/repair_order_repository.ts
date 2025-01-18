import { BaseRepository } from "../../database/base_repository"
import { Job, RepairOrder, RepairOrderWithJobs } from "./repair_order_model";

export class RepairOrderRepository extends BaseRepository{
    
    async createRepairOrder(customerId:number): Promise<RepairOrder>{
        return await RepairOrder.create({
            customerId,
            createdAt: new Date()
        })

    }

    async addJobToRepairOrder(repairOrderId:number, description:string){
        await Job.create({repairOrderId, description, createdAt:new Date()})
    }

    async getRepairOrderById(repairOrderId:number): Promise<RepairOrderWithJobs>{
        let ro = await RepairOrder.findByPk(repairOrderId)

        let jobs = await Job.findAll({where:{repairOrderId}})
        return RepairOrderWithJobs.build({...ro, jobs:jobs})
    }
}


