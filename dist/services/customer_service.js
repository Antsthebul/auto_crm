"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
class CustomerService {
    customerRepo;
    constructor(customerRepo) {
        this.customerRepo = customerRepo;
    }
    async createCustomer(data) {
        return await this.customerRepo.createCustomer(data);
    }
}
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer_service.js.map