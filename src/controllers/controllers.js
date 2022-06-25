const config = require('../config/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);


pool.on('error',(err)=>{
    console.error(err)
});

module.exports = {
    getDataNama(req,res){
        let id = req.params.id;
        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(
                `SELECT * FROM tb_pacar WHERE id_pacar = ?;`,
                [id],
                function (error, results) {
                    if(error) throw error;
                    res.end(JSON.stringify(results))
                });
                connection.release();
        })
    }
}