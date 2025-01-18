"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
let conn;
function getConnection() {
    let user = process.env.DB_USER;
    let password = process.env.DB_PASSWORD;
    let host = process.env.DB_HOST;
    let dbName = process.env.DB_NAME;
    let port = process.env.DB_PORT;
    let db_conn;
    if (!conn) {
        db_conn = new sequelize_1.Sequelize(`postgres://${user}:${password}@${host}:${port}/${dbName}`, { logging: false });
        (0, _1.intializeModels)(db_conn);
    }
    else {
        db_conn = conn;
    }
    return db_conn;
}
conn = getConnection();
class BaseRepository {
    sequelize = conn;
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base_repository.js.map