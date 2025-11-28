import { Sequelize } from 'sequelize'

class Database {
    constructor() {
        this.init()
    }

    init() {
        // .env - dotenv
        this.db = new Sequelize({
            database: process.env.DB_database ?? 'exemplo',
            host: process.env.DB_host ?? 'localhost',
            username: process.env.DB_username ?? 'root',
            password: process.env.DB_Password ??'',
            dialect: process.env.DB_Dialect ?? 'mysql'
        })
    }
}

export default new Database()