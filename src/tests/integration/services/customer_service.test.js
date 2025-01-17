import { describe, it } from "node:test"
import assert from "assert"
import { CustomerRespository } from "../../../domain/customer/customer_repository"
import { Customer } from "../../../domain/customer/customer_model"
import { CustomerService } from "../../../services/customer_service.js";

describe("customer service int tests", async()=>{

    const customerService = new CustomerService(new CustomerRespository())
    
    await customerService.customerRepo.sequelize.query('DELETE from "Customers"')
    it("create and retrieve customer successfully", async ()=>{
        // ARRANGE
        let mock_data = Customer.build({
            name: "Test1",
            address:"32 Wallaby Sydney",
            createdAt: new Date()
        }) 

        // ACT
        let db_customer = await customerService.createCustomer(mock_data)
        let cus = await customerService.getCustomer(db_customer.id)
        
        // ASSERT
        assert(cus)

    })

    // it()
})