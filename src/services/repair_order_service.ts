import { Job, RepairOrder } from "../domain/repair_order/repair_order_model";
import { RepairOrderRepository } from "../domain/repair_order/repair_order_repository";

export class RepairOrderService{
    constructor(public repair_order_repo:RepairOrderRepository){}

    async create_repair_order(customerId:number, jobs:Job[]): Promise<RepairOrder>{
        const ro =  await this.repair_order_repo.create_repair_order(customerId)
        
        jobs = jobs.map(job=>{
            job.repairOrderId |= ro.id
            return job
        })

        // await Job.bulkCreate(jobs)

        return ro
    }
}