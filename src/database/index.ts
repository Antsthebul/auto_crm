import { DataTypes, Sequelize } from "sequelize";
import { Ticket, Job } from "./models/ticket";
import { Customer, CustomerVehicle } from "./models/customer_model";


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
        address: {type: DataTypes.STRING, allowNull: false },
        phone: {type: DataTypes.STRING, allowNull:false},
        email: {type: DataTypes.STRING}
    }, { sequelize });

    CustomerVehicle.init({
        ...primaryKey,
        year: { type: DataTypes.STRING, allowNull: false },
        make:  { type: DataTypes.STRING, allowNull: false },
        model:  { type: DataTypes.STRING, allowNull: false },
        trim:  { type: DataTypes.STRING, allowNull: false },
        plate:   { type: DataTypes.STRING, allowNull: false },
    }, { sequelize  })

    Ticket.init({
        ...primaryKey,
        createdAt: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,},
        updatedAt: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,},
        completedAt: {type: DataTypes.DATE},
        scheduledAt: {type: DataTypes.DATE, defaultValue: DataTypes.NOW,},
        state:{type: DataTypes.ENUM, values:["APPOINTMENT", "REPAIR_ORDER"]},
        customerId:{type: DataTypes.INTEGER, references:{model:Customer, key:"id"}},
        
    }, { sequelize });

    Job.init({
        ...primaryKey,
        description: { type: DataTypes.STRING, allowNull: false },
        createdAt: {type: DataTypes.DATE, allowNull: false,defaultValue: DataTypes.NOW,},
        updatedAt: {type: DataTypes.DATE, allowNull: false,defaultValue: DataTypes.NOW,},
        completedAt: {type: DataTypes.DATE},
        
    }, { sequelize });
    
    Ticket.hasMany(Job, {
        foreignKey:"ticketId"
    });

}
