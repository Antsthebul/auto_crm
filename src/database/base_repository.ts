import { Sequelize} from "sequelize";
import { intializeModels } from ".";

let conn: Sequelize | undefined;

function getConnection(): Sequelize{
    console.log("ru")
    let user = process.env.DB_USER
    let password = process.env.DB_PASSWORD
    let host = process.env.DB_HOST
    let dbName = process.env.DB_NAME
    let port = process.env.DB_PORT
    if (process.env.ENVIRONMENT?.trim() === "test"){
        dbName = process.env.TEST_DB
    }
    let db_conn:Sequelize
    if (!conn){

        db_conn = new Sequelize(`postgres://${user}:${password}@${host}:${port}/${dbName}`, {logging:false});
        
        // db_conn.sync({force:true})
        intializeModels(db_conn)
    }else{
        db_conn = conn
    }
    return db_conn
}

conn = getConnection()
export class BaseRepository{
    
    sequelize = conn
}