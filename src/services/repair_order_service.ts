import { Job, RepairOrder, RepairOrderWithJobs } from "../domain/repair_order/repair_order_model";
import { RepairOrderRepository } from "../domain/repair_order/repair_order_repository";

export class RepairOrderService{
    constructor(public repair_order_repo:RepairOrderRepository){}

    async createRepairOrder(customerId:number, jobs:Job[]): Promise<RepairOrder>{
        const ro =  await this.repair_order_repo.createRepairOrder(customerId)
        
        for( const job of jobs ){
            job.repairOrderId |= ro.id
            
            await job.save()
        }

        return ro
    }

    async getRepairOrder(repairOrderId:number): Promise<RepairOrderWithJobs>{
        return await this.repair_order_repo.getRepairOrderById(repairOrderId)
     
    }
}