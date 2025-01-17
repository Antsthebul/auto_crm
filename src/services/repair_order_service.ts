import { RepairOrder } from "../domain/repair_order/repair_order_model";
import { RepairOrderRepository } from "../domain/repair_order/repair_order_repository";

export class RepairOrderService{
    constructor(public repair_order_repo:RepairOrderRepository){}

    create_repair_order(data:RepairOrder){
        this.repair_order_repo.create_repair_order(data)
    }
}