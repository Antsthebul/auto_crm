import { Customer } from "../database/models/customer_model";
import { CustomerRespository } from "../domain/customer/customer_repository";
import { CustomerCreateSchema, CustomerSchema } from "../domain/customer/customer_schema";

export class CustomerService{

    constructor(public customerRepo: CustomerRespository){}

    async createCustomer (data:CustomerCreateSchema): Promise<number>{
        try{

            const customer = await this.customerRepo.createCustomer(data)
            return customer.id
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

    //**Get All customers */
    async getCustomers(): Promise<CustomerSchema[]>{
        return await this.customerRepo.getCustomers()
    }

    async deleteCustomer(customerId:number){
        await this.customerRepo.deleteCustomer(customerId)
    }
}