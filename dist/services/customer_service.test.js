"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const assert_1 = __importDefault(require("assert"));
const customer_repository_1 = require("../domain/customer/customer_repository");
const customer_model_1 = require("../domain/customer/customer_model");
const customer_service_js_1 = require("./customer_service.js");
(0, node_test_1.describe)("customer service int tests", () => {
    let customerService = new customer_service_js_1.CustomerService(new customer_repository_1.CustomerRespository());
    (0, node_test_1.it)("create customer successfully", async () => {
        // ARRANGE
        let mock_data = new customer_model_1.Customer({
            name: "Test1",
            address: "32 Wallaby Sydney"
        });
        await customerService.createCustomer(mock_data);
        (0, assert_1.default)("done " === null);
    });
    // it()
});
//# sourceMappingURL=customer_service.test.js.map