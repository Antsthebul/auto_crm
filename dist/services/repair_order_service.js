"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairOrderService = void 0;
class RepairOrderService {
    repair_order_repo;
    constructor(repair_order_repo) {
        this.repair_order_repo = repair_order_repo;
    }
    create_repair_order(data) {
        this.repair_order_repo.create_repair_order(data);
    }
}
exports.RepairOrderService = RepairOrderService;
//# sourceMappingURL=repair_order_service.js.map