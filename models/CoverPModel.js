import  {Sequelize}  from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const CoverP = db.define('coverp',{
    nama: DataTypes.STRING,
    gambar: DataTypes.STRING,

    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default CoverP;

(async()=>{
    await db.sync();
})();