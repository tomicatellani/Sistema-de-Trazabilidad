var mysql = require("mysql");

module.exports = () =>{
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "toca2002",
        database: "sdtdl_bdd"
    });
}