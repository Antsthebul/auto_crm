"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
class CustomerService {
    customerRepo;
    constructor(customerRepo) {
        this.customerRepo = customerRepo;
    }
    async createCustomer(data) {
        try {
            return await this.customerRepo.createCustomer(data);
        }
        catch (err) {
            throw new Error("customer service failed to create customer. ", { cause: err });
        }
    }
    async getCustomer(customerId) {
        let customer = await this.customerRepo.getCustomerById(customerId);
        if (!customer) {
            throw new Error("Customer with not found");
        }
        return customer;
    }
}
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer_service.js.map