import assert from "assert"
import { describe, it } from "node:test"
import CustomerService from "./customer_service"
import { CustomerRespository } from "../domain/customer/customer_repository"
import { Customer } from "../domain/customer/customer_model"

describe("customer service int tests",  ()=>{

    let customerService = new CustomerService(new CustomerRespository())

    it("create customer successfully", async ()=>{
        // ARRANGE
        let mock_data = new Customer({
            name: "Test1",
            address:"32 Wallaby Sydney"
        }) 
        await customerService.createCustomer(mock_data)
        assert(null)
    })

    it()
})