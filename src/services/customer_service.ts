import { Customer } from "../database/models/customer_model";
import { CustomerRespository } from "../domain/customer/customer_repository";

export class CustomerService{

    constructor(public customerRepo: CustomerRespository){}

    async createCustomer (data:Customer): Promise<Customer>{
        try{

            return await this.customerRepo.createCustomer(data)
        }catch(err){
            throw new Error("customer service failed to create customer. ", {cause: err})
        }
    }

    async getCustomer(customerId:number): Promise<Customer>{
        let customer = await this.customerRepo.getCustomerById(customerId)
        if (!customer){
            throw new Error("Customer with not found")
        }
        return customer
    }
}