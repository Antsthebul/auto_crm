const dbConfig = {
    username : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    host : process.env.DB_HOST,
    database : process.env.DB_NAME,
    port : process.env.DB_PORT,
    dialect:"postgres"
}
module.exports = {
    development: dbConfig,
    production: dbConfig
}