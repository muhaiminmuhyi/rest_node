import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Pacar = db.define('tb_pacar',{
    id_pacar : {
        type : DataTypes.INTEGER,
        primaryKey: true
    },
    nama_pacar : {
        type : DataTypes.STRING
    }
},{
    timestamps : false,
    freezeTableName : true
});

(async () => {
    await db.sync();
})();

export default Pacar;