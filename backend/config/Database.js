import {Sequelize} from 'sequelize'

const db = new Sequelize('stk_db', 'root', '',{
    host: "localhost",
    dialect: "mysql"
})

export default db;