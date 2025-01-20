import { CustomerRespository } from "../../../domain/customer/customer_repository"
import { CustomerService } from "../../../services/customer_service";
import assert from "assert";
import { describe, it } from "node:test"

describe("customer service int tests", ()=>{

    const customerService = new CustomerService(new CustomerRespository())
        
    it("create and retrieve customer successfully", async ()=>{
        // ARRANGE
        let mock_customer = {
            name: "Test1",
            address:"32 Wallaby Sydney",
        }

        // ACT
        let db_customer_id = await customerService.createCustomer(mock_customer)
        let cus = await customerService.getCustomer(db_customer_id)
        
        // ASSERT
        assert(cus)
    })
})