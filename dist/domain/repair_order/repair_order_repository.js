"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairOrderRepository = void 0;
const base_repository_1 = require("../../database/base_repository");
const repair_order_model_1 = require("./repair_order_model");
class RepairOrderRepository extends base_repository_1.BaseRepository {
    create_repair_order(data) {
        repair_order_model_1.RepairOrder.create(data);
    }
    add_job_to_repair_order(repairOrderId, description) {
        repair_order_model_1.Job.create({ repairOrderId, description });
    }
}
exports.RepairOrderRepository = RepairOrderRepository;
//# sourceMappingURL=repair_order_repository.js.map