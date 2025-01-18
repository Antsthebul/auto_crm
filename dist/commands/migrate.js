"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_repository_1 = require("../database/base_repository");
class Repository extends base_repository_1.BaseRepository {
    reset_db() {
        console.log("<Migrate> syncing database");
        this.sequelize?.sync({ force: true });
    }
}
(new Repository()).reset_db();
//# sourceMappingURL=migrate.js.map