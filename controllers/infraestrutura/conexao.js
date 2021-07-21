const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'aluraflix',
    password: 'Aluraflix@123456',
    database: 'aluraflix'
});

module.exports = conexao;