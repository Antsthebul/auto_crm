import { describe, it } from "node:test";
import { RepairOrderService } from "../../../services/repair_order_service";
import { RepairOrderRepository } from "../../../domain/repair_order/repair_order_repository";
import { Job, RepairOrder } from "../../../database/models/repair_order_model";
import { Customer } from "../../../database/models/customer_model";
import assert from "assert";


describe("repair order int tests", ()=>{

    let repairOrderService = new RepairOrderService(
        new RepairOrderRepository()
    )
    let mockCustomer = Customer.build({
                    name: "Customer A",
                    address:"Test Address",
                    createdAt: new Date()
        })


    let repairOrder = RepairOrder.build({
        customerId:mockCustomer.id,
        createdAt: new Date(),
        updatedAt: new Date()
    })

    let job = Job.build({
        description:"TestJob1"
    })

    it("repair order is created and retrieve successfully", async ()=>{
        // ARRANGE
        await mockCustomer.save()

        // ACT - CREATE
        let createRepairOrder = {
            customerId: repairOrder.customerId,
            createdAt: repairOrder.createdAt,
            updatedAt: repairOrder.updatedAt,
            jobs:[job]
        }
        const repairOrderId = await repairOrderService.createRepairOrder(createRepairOrder)
        // ASSERT - CREATE
        assert(repairOrderId)

        let new_ro = await repairOrderService.getRepairOrder(repairOrderId)
  
        // ACT - RETRIEVE
        assert.equal(new_ro.jobs.length, 1)
    })

})