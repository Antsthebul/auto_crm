"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const repair_order_service_1 = require("../../../services/repair_order_service");
const repair_order_repository_1 = require("../../../domain/repair_order/repair_order_repository");
const repair_order_model_1 = require("../../../domain/repair_order/repair_order_model");
const customer_service_1 = require("../../../services/customer_service");
const customer_repository_1 = require("../../../domain/customer/customer_repository");
const customer_model_1 = require("../../../domain/customer/customer_model");
(0, node_test_1.describe)("repair order int tests", async () => {
    const customerService = new customer_service_1.CustomerService(new customer_repository_1.CustomerRespository());
    let mockCustomer = await customerService
        .createCustomer(new customer_model_1.Customer({
        name: "Customer A",
        address: "Test Address"
    }));
    let repairOrderService = new repair_order_service_1.RepairOrderService(new repair_order_repository_1.RepairOrderRepository());
    let repairOrderData = new repair_order_model_1.RepairOrder({
        customerId: mockCustomer.id,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    let job = repair_order_model_1.Job.build({
        description: "TestJob1"
    });
    (0, node_test_1.it)("repair order is created and retrieve successfully", async () => {
        // ACT
        const repairOrder = await repairOrderService.createRepairOrder(repairOrderData, [job]);
        (0, node_assert_1.default)(repairOrder);
        let jobs = await repair_order_model_1.Job.findAll({ repairOrderId: repairOrder.id });
        console.log("save it");
        node_assert_1.default.equal(jobs.length, 1);
    });
});
//# sourceMappingURL=repair_order.test.js.map