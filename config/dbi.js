
const mysql = require('mysql2');

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);

// Função para criar conexão com o banco de dados 

const dbi = mysql.createConnection({
    host:process.env.DB_HOST, // Endereço do servidor
    user:process.env.DB_USER, // Nome do usuario 
    password:process.env.DB_PASS, // Senha do usuario 
    database:process.env.DB_NAME // Nome do banco de dados
});

dbi.connect((err) =>{
    if (err){
        console.error('Erro ao conectar ao banco de dados', err); // Exibição da mensagem de erro 
        return;
    }
    console.log(`Conectando ao banco de dados MySQL ${process.env.DB_NAME}`);

});

module.exports= dbi; // Exporta a conexão para ser usada posteriomente em outros arquivos
