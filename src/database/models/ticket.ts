import { Model, CreationOptional, ForeignKey, InferAttributes,
    InferCreationAttributes,
    NonAttribute
 } from "sequelize";

import { TicketState } from "../../types";


export class Ticket extends Model<InferAttributes<Ticket>, InferCreationAttributes<Ticket>>{
    declare id: CreationOptional<number>;
    declare createdAt: Date
    declare updatedAt: CreationOptional<Date>
    declare completedAt: CreationOptional<Date>
    declare scheduledAt: CreationOptional<Date>
    declare customerId: ForeignKey<number>
    declare state: TicketState
    declare jobs: NonAttribute<Job[]>
}

export class Job extends Model<InferAttributes<Job>, InferCreationAttributes<Job>>{
    declare id: CreationOptional<number>
    declare description: string
    declare ticketId: ForeignKey<number>
    declare createdAt: Date
    declare updatedAt: Date
    declare completedAt: CreationOptional<Date>
}

