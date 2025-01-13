import { Sequelize} from "sequelize";
import { intializeModels } from ".";

export class BaseRespository{
    
    sequelize

    constructor(){
        let user = process.env.DB_USER
        let password = process.env.DB_PASSWORD
        let host = process.env.DB_HOST
        let dbName = process.env.DB_NAME
        this.sequelize = new Sequelize(`postgres://${user}:${password}@${host}/${dbName}`)
        intializeModels(this.sequelize)
    }
    

}