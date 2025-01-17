"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const assert_1 = __importDefault(require("assert"));
const customer_repository_1 = require("../../../domain/customer/customer_repository");
const customer_model_1 = require("../../../domain/customer/customer_model");
const customer_service_js_1 = require("../../../services/customer_service.js");
(0, node_test_1.describe)("customer service int tests", async () => {
    const customerService = new customer_service_js_1.CustomerService(new customer_repository_1.CustomerRespository());
    await customerService.customerRepo.sequelize.query('DELETE from "Customers"');
    (0, node_test_1.it)("create and retrieve customer successfully", async () => {
        // ARRANGE
        let mock_data = customer_model_1.Customer.build({
            name: "Test1",
            address: "32 Wallaby Sydney",
            createdAt: new Date()
        });
        // ACT
        let db_customer = await customerService.createCustomer(mock_data);
        let cus = await customerService.getCustomer(db_customer.id);
        // ASSERT
        (0, assert_1.default)(cus);
    });
    // it()
});
//# sourceMappingURL=customer_service.test.js.map