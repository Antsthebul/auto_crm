import { BaseRepository } from "../../database/base_repository"
import { Job, RepairOrder } from "./repair_order_model";

export class RepairOrderRepository extends BaseRepository{
    
    async create_repair_order(customerId:number): Promise<RepairOrder>{
        return RepairOrder.create({
            customerId,
            createdAt: new Date()
        })

    }

    async add_job_to_repair_order(repairOrderId:number, description:string){
        await Job.create({repairOrderId, description})
    }
}


