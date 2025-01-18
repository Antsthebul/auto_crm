"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairOrderRepository = void 0;
const base_repository_1 = require("../../database/base_repository");
const repair_order_model_1 = require("./repair_order_model");
class RepairOrderRepository extends base_repository_1.BaseRepository {
    async createRepairOrder(customerId) {
        return await repair_order_model_1.RepairOrder.create({
            customerId,
            createdAt: new Date()
        });
    }
    async addJobToRepairOrder(repairOrderId, description) {
        await repair_order_model_1.Job.create({ repairOrderId, description, createdAt: new Date() });
    }
}
exports.RepairOrderRepository = RepairOrderRepository;
//# sourceMappingURL=repair_order_repository.js.map