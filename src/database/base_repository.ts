import { Sequelize} from "sequelize";
import { intializeModels } from ".";

export class BaseRepository{
    
    sequelize: Sequelize

    constructor(){
        let user = process.env.DB_USER
        let password = process.env.DB_PASSWORD
        let host = process.env.DB_HOST
        let dbName = process.env.DB_NAME
        let port = process.env.DB_PORT
        if (process.env.ENVIRONMENT?.trim() === "test"){
            dbName = process.env.TEST_DB
        }
        this.sequelize = new Sequelize(`postgres://${user}:${password}@${host}:${port}/${dbName}`)
        this.sequelize.sync({force:true})
        intializeModels(this.sequelize)
    }
    

}