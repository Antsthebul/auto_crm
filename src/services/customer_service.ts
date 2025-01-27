import { Customer } from "../database/models/customer_model";
import { CustomerRespository } from "../domain/customer/customer_repository";
import { CustomerCreateSchema, CustomerSchema } from "../domain/customer/customer_schema";
import { ServiceReturnData } from "../types";

export class CustomerService{

    constructor(public customerRepo: CustomerRespository){}

    async createCustomer (data:CustomerCreateSchema): ServiceReturnData<number>{
        let customer
        try{
            customer = await this.customerRepo.createCustomer(data)
            return [false, null, customer.id]
        }catch(err){
            return [true, "BAD_DATA",`customer service failed to create customer. ${err}`]
        }
    }

    async getCustomer(customerId:number): ServiceReturnData<Customer>{
        let customer 
        try{

            customer = await this.customerRepo.getCustomerById(customerId)
        }catch(err){
            return [true, "BAD_DATA", err as string]
        }

        return [false, null, customer]
    }

    //**Get All customers */
    async getCustomers(): ServiceReturnData<CustomerSchema[]>{
        let customers
        try{

            customers = await this.customerRepo.getCustomers()
            return [false, null, customers]
        }catch(err){
            return [true, "BAD_DATA", err as string]
        }
    }

    async deleteCustomer(customerId:number){
        try{

            await this.customerRepo.deleteCustomer(customerId)
        }catch(err){
            console.error(`customerservice failed to delete customer '${customerId}'`)
        }
    }
}