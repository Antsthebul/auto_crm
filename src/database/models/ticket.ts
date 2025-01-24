import { Model, CreationOptional, ForeignKey, InferAttributes,
    InferCreationAttributes
 } from "sequelize";

 import { Customer } from "./customer_model";


export class Ticket extends Model<InferAttributes<Ticket>, InferCreationAttributes<Ticket>>{
    declare id: CreationOptional<number>;
    declare createdAt: Date
    declare updatedAt: CreationOptional<Date>
    declare completedAt: CreationOptional<Date>
    declare scheduledAt: CreationOptional<Date>
    declare customerId: ForeignKey<Customer["id"]>
    declare state: string
}

export class Job extends Model<InferAttributes<Job>, InferCreationAttributes<Job>>{
    declare id: CreationOptional<number>
    declare description: string
    declare repairOrderId: ForeignKey<Ticket["id"]>
    declare createdAt: Date
    declare updatedAt: Date
    declare completedAt: CreationOptional<Date>


}

