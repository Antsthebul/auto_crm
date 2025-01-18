"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairOrderService = void 0;
class RepairOrderService {
    repair_order_repo;
    constructor(repair_order_repo) {
        this.repair_order_repo = repair_order_repo;
    }
    async createRepairOrder(customerId, jobs) {
        const ro = await this.repair_order_repo.createRepairOrder(customerId);
        for (const job of jobs) {
            job.repairOrderId |= ro.id;
            await job.save();
        }
        return ro;
    }
}
exports.RepairOrderService = RepairOrderService;
//# sourceMappingURL=repair_order_service.js.map