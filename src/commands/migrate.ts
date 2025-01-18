import { BaseRepository } from "../database/base_repository";

class Repository extends BaseRepository {
    reset_db(){
        console.log("<Migrate> syncing database")
        this.sequelize?.sync({force:true})
    }
}

(new Repository()).reset_db()