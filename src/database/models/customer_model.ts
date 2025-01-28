import { Model, CreationOptional, ForeignKey, InferAttributes,
    InferCreationAttributes
 } from "sequelize";

 export class Customer extends Model<InferAttributes<Customer>, InferCreationAttributes<Customer>>{
    declare id: CreationOptional<number>
    declare createdAt: Date
    declare updatedAt: CreationOptional<Date>
    declare name: string
    declare address: string
    declare phone: string
    declare email: CreationOptional<string>

 }

 export class CustomerVehicle extends Model<InferAttributes<CustomerVehicle>, InferCreationAttributes<CustomerVehicle>>{
    declare id: CreationOptional<number>;
    declare year: number
    declare make: string
    declare model: string
    declare mileage: number
    declare trim?: CreationOptional<string>
    declare plate?: CreationOptional<string>
    declare customerId: ForeignKey<number>
}