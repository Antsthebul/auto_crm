import { Job } from "../database/models/repair_order_model";
import { RepairOrderRepository } from "../domain/repair_order/repair_order_repository";
import { RepairOrderCreateSchema, RepairOrderSchema } from "../domain/repair_order/repair_order_schema";

export class RepairOrderService{
    constructor(public repair_order_repo:RepairOrderRepository){}

    async createRepairOrder(data: RepairOrderCreateSchema): Promise<number>{
        const repair_order_id =  await this.repair_order_repo.createRepairOrder(data)

        return repair_order_id
    }

    async getRepairOrder(repairOrderId:number): Promise<RepairOrderSchema>{
        return await this.repair_order_repo.getRepairOrderById(repairOrderId)
     
    }
}