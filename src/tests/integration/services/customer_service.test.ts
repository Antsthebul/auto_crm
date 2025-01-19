import { CustomerRespository } from "../../../domain/customer/customer_repository"
import { Customer } from "../../../database/models/customer_model"
import { CustomerService } from "../../../services/customer_service";
import assert from "assert";
import { describe, it } from "node:test"

describe("customer service int tests", ()=>{

    const customerService = new CustomerService(new CustomerRespository())
        
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