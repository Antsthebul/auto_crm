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

    Ticket.init({
        ...primaryKey,
        createdAt: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,},
        updatedAt: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW,},
        completedAt: {type: DataTypes.DATE},
        state:{type: DataTypes.ENUM, values:["appointment", "repair order"]}
    }, { sequelize });

    Job.init({
        ...primaryKey,
        description: { type: DataTypes.STRING, allowNull: false },
        createdAt: {type: DataTypes.DATE, allowNull: false,defaultValue: DataTypes.NOW,},
        updatedAt: {type: DataTypes.DATE, allowNull: false,defaultValue: DataTypes.NOW,},
        repairOrderId:{type: DataTypes.INTEGER, references:{model:Ticket, key:"id"}},
        completedAt: {type: DataTypes.DATE},
        
    }, { sequelize }),
    defineRelationships()
}


export const defineRelationships = () => {
    CustomerVehicle.belongsTo(Customer)
    Customer.hasMany(CustomerVehicle)

    Ticket.belongsTo(Customer)
    Customer.hasMany(Ticket)

    Job.belongsTo(Ticket)
    Ticket.hasMany(Job)
}