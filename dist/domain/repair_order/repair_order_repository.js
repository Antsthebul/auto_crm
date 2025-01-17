"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairOrderRepository = void 0;
const base_repository_1 = require("../../database/base_repository");
const repair_order_model_1 = require("./repair_order_model");
class RepairOrderRepository extends base_repository_1.BaseRepository {
    async create_repair_order(customerId) {
        return repair_order_model_1.RepairOrder.create({
            customerId,
            createdAt: new Date()
        });
    }
    async add_job_to_repair_order(repairOrderId, description) {
        await repair_order_model_1.Job.create({ repairOrderId, description });
    }
}
exports.RepairOrderRepository = RepairOrderRepository;
//# sourceMappingURL=repair_order_repository.js.map