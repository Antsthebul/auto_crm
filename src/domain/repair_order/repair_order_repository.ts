import { BaseRepository } from "../../database/base_repository"
import { Job, RepairOrder } from "./repiar_order_model";

export class RepairOrderRepository extends BaseRepository{
    create_repair_order(data:RepairOrder){
        RepairOrder.create(data)

    }

    add_job_to_repair_order(repairOrderId:number, description:string){
        Job.create({repairOrderId, description})
    }
}


