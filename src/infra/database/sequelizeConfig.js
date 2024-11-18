import { Sequelize } from 'sequelize';
// 'postgres://user:pass@example.com:5432/dbname'
const sequelizeConn = new Sequelize(process.env.DB_URL);

export { sequelizeConn };