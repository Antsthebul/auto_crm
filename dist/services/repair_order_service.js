"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairOrderService = void 0;
class RepairOrderService {
    repair_order_repo;
    constructor(repair_order_repo) {
        this.repair_order_repo = repair_order_repo;
    }
    async create_repair_order(customerId, jobs) {
        const ro = await this.repair_order_repo.create_repair_order(customerId);
        jobs = jobs.map(job => {
            job.repairOrderId |= ro.id;
            return job;
        });
        // await Job.bulkCreate(jobs)
        return ro;
    }
}
exports.RepairOrderService = RepairOrderService;
//# sourceMappingURL=repair_order_service.js.map