
module.exports = {
    PORT: process.env.PORT,
    DB: { 
        user: process.env.DB_R_USER,
        password: process.env.DB_R_PASSWORD,
        database: process.env.DB_R_DATABASE,
        host: process.env.DB_R_HOST,
        dialect: process.env.DB_R_DIALECT,
        logging: process.env.DB_R_LOG
    }
}