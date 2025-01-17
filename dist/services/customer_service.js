"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerService {
    customerRepo;
    constructor(customerRepo) {
        this.customerRepo = customerRepo;
    }
    async createCustomer(data) {
        return await this.customerRepo.createCustomer(data);
    }
}
exports.default = CustomerService;
