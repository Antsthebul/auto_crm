"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class BaseRepository {
    sequelize;
    constructor() {
        let user = process.env.DB_USER;
        let password = process.env.DB_PASSWORD;
        let host = process.env.DB_HOST;
        let dbName = process.env.DB_NAME;
        let port = process.env.DB_PORT;
        console.log("wtff ", process.env.ENVIRONMENT === "test", "<>", typeof process.env.ENVIRONMENT);
        if (process.env.ENVIRONMENT === "test") {
            dbName += "_test:5433";
        }
        this.sequelize = new sequelize_1.Sequelize(`postgres://${user}:${password}@${host}:${port}/${dbName}`);
        console.log(` Connecting to: postgres://${user}:${password}@${host}:${port}/${dbName}`);
        (0, _1.intializeModels)(this.sequelize);
    }
}
exports.BaseRepository = BaseRepository;
