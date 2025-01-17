import { describe, it } from "node:test";
import assert from "node:assert";
import { RepairOrderService } from "../../../services/repair_order_service";
import { RepairOrderRepository } from "../../../domain/repair_order/repair_order_repository";
import { Job, RepairOrder } from "../../../domain/repair_order/repair_order_model";
import { CustomerService } from "../../../services/customer_service";
import { CustomerRespository } from "../../../domain/customer/customer_repository";
import { Customer } from "../../../domain/customer/customer_model";

describe("repair order int tests", async ()=>{
    const customerService = new CustomerService(new CustomerRespository())

    const db_conn = customerService.customerRepo.sequelize
    await db_conn.query('DELETE FROM "RepairOrders"')
    await db_conn.query('DELETE FROM "Customers"')

    let mockCustomer = await customerService
                .createCustomer(new Customer({
                    name: "Customer A",
                    address:"Test Address"
        }))

    let repairOrderService = new RepairOrderService(
        new RepairOrderRepository()
    )

    let repairOrderData = new RepairOrder({
        customerId:mockCustomer.id,
        createdAt: new Date(),
        updatedAt: new Date()

    })

    let job = new Job({
        description:"TestJob1"
    })

    it("repair order is created and retrieve successfully", async ()=>{
        const repairOrder = await repairOrderService.create_repair_order(repairOrderData, [job])
        assert(repairOrder)


    })

})