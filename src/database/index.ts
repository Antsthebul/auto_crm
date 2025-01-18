import { DataTypes, Sequelize } from "sequelize";
import { RepairOrder, Job } from "../domain/repair_order/repair_order_model";
import { Customer, CustomerVehicle } from "../domain/customer/customer_model";


const primaryKey = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}

export const intializeModels = (sequelize: Sequelize) => {
    Customer.init({
        ...primaryKey,
        createdAt: {type: DataTypes.DATE, 
                    allowNull: false,
                    defaultValue: DataTypes.NOW },
        updatedAt: {type: DataTypes.DATE, 
                    defaultValue: DataTypes.NOW},
        name: { type: DataTypes.STRING, allowNull: false },
        address: {type: DataTypes.STRING, allowNull: false }
    }, { sequelize });

    CustomerVehicle.init({
        ...primaryKey,
        year: { type: DataTypes.STRING, allowNull: false },
        make:  { type: DataTypes.STRING, allowNull: false },
        model:  { type: DataTypes.STRING, allowNull: false },
        trim:  { type: DataTypes.STRING, allowNull: false },
        plate:   { type: DataTypes.STRING, allowNull: false },
    }, { sequelize  })

    RepairOrder.init({
        ...primaryKey,
        createdAt: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,},
        updatedAt: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,},
        completedAt: {type: DataTypes.DATE},
    }, { sequelize });

    Job.init({
        ...primaryKey,
        description: { type: DataTypes.STRING, allowNull: false },
        createdAt: {type: DataTypes.DATE, allowNull: false,defaultValue: DataTypes.NOW,},
        updatedAt: {type: DataTypes.DATE, allowNull: false,defaultValue: DataTypes.NOW,},

        
    }, { sequelize }),
    defineRelationships()
}


export const defineRelationships = () => {
    CustomerVehicle.belongsTo(Customer)
    Customer.hasMany(CustomerVehicle)

    RepairOrder.belongsTo(Customer)
    Customer.hasMany(RepairOrder)

    Job.belongsTo(RepairOrder)
    RepairOrder.hasMany(Job)
}