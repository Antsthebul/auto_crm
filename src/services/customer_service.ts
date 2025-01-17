import { Customer } from "../domain/customer/customer_model";
import { CustomerRespository } from "../domain/customer/customer_repository";

export class CustomerService{

    constructor(public customerRepo: CustomerRespository){}

    async createCustomer (data:Customer): Promise<Customer>{
        try{

            return await this.customerRepo.createCustomer(data)
        }catch(err){
            console.log("U sucks ", err)
            throw new Error(`you fucking suck ${err}`)
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