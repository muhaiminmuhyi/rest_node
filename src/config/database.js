import { Sequelize } from "sequelize";
const db = new Sequelize('rest_node', 'root', 'CARllb30727', {
    host: "node13601-env-8106771.user.cloudjkt01.com",
    dialect: "mysql"
});
// const db = new Sequelize('rest_node', 'root', '', {
//     host: "localhost",
//     dialect: "mysql"
// });
 
export default db;