import { Model, CreationOptional, ForeignKey, InferAttributes,
    InferCreationAttributes
 } from "sequelize";

 import { Customer } from "./customer_model";


export class RepairOrder extends Model<InferAttributes<RepairOrder>, InferCreationAttributes<RepairOrder>>{
    declare id: CreationOptional<number>;
    declare createdAt: Date
    declare updatedAt: CreationOptional<Date>
    declare completedAt: CreationOptional<Date>
    declare customerId: ForeignKey<Customer["id"]>;
}

export class Job extends Model<InferAttributes<Job>, InferCreationAttributes<Job>>{
    declare id: CreationOptional<number>
    declare description: string
    declare repairOrderId: ForeignKey<RepairOrder["id"]>
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
    declare completedAt: CreationOptional<Date>


}

