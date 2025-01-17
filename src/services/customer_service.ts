import { Customer } from "../domain/customer/customer_model";
import { CustomerRespository } from "../domain/customer/customer_repository";

export default class CustomerService{

    constructor(public customerRepo: CustomerRespository){}

    async createCustomer (data:Customer): Promise<Customer>{
        return await this.customerRepo.createCustomer(data)
    }
}