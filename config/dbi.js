const { Module } = require('module');
const mysql = require('mysql2');

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);

const dbi = mysql.createConection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
});

dbi.connect((err) =>{
    if (err){
        console.error('Erro ao conectar ao banco de dados', err);
        return;
    }
    console.log('Conectando ao banco de dados MySQL');

});

Module.exports= dbi
