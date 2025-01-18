"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineRelationships = exports.intializeModels = void 0;
const sequelize_1 = require("sequelize");
const repair_order_model_1 = require("../domain/repair_order/repair_order_model");
const customer_model_1 = require("../domain/customer/customer_model");
const primaryKey = {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
};
const intializeModels = (sequelize) => {
    customer_model_1.Customer.init({
        ...primaryKey,
        createdAt: { type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW },
        updatedAt: { type: sequelize_1.DataTypes.DATE,
            defaultValue: sequelize_1.DataTypes.NOW },
        name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        address: { type: sequelize_1.DataTypes.STRING, allowNull: false }
    }, { sequelize });
    customer_model_1.CustomerVehicle.init({
        ...primaryKey,
        year: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        make: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        model: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        trim: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        plate: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    }, { sequelize });
    repair_order_model_1.RepairOrder.init({
        ...primaryKey,
        createdAt: { type: sequelize_1.DataTypes.DATE, allowNull: false, defaultValue: sequelize_1.DataTypes.NOW, },
        updatedAt: { type: sequelize_1.DataTypes.DATE, allowNull: false, defaultValue: sequelize_1.DataTypes.NOW, },
        completedAt: { type: sequelize_1.DataTypes.DATE },
    }, { sequelize });
    repair_order_model_1.Job.init({
        ...primaryKey,
        description: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        createdAt: { type: sequelize_1.DataTypes.DATE, allowNull: false, defaultValue: sequelize_1.DataTypes.NOW, },
        updatedAt: { type: sequelize_1.DataTypes.DATE, allowNull: false, defaultValue: sequelize_1.DataTypes.NOW, },
    }, { sequelize }),
        (0, exports.defineRelationships)();
};
exports.intializeModels = intializeModels;
const defineRelationships = () => {
    customer_model_1.CustomerVehicle.belongsTo(customer_model_1.Customer);
    customer_model_1.Customer.hasMany(customer_model_1.CustomerVehicle);
    repair_order_model_1.RepairOrder.belongsTo(customer_model_1.Customer);
    customer_model_1.Customer.hasMany(repair_order_model_1.RepairOrder);
    repair_order_model_1.Job.belongsTo(repair_order_model_1.RepairOrder);
    repair_order_model_1.RepairOrder.hasMany(repair_order_model_1.Job);
};
exports.defineRelationships = defineRelationships;
//# sourceMappingURL=index.js.map