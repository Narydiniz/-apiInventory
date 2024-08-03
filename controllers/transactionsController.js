const dbi = require ('../config/dbi');

const getAllTransactions = (req,res) =>{
    dbi.query('SELECT * FROM products',(err,results) => {
        if (err){
            console.error('Erro ao obter transações:',err);
            res.status(500).send('Erro ao obter transações');
            return;
        
        }
        res.json(results);
    });
};

module.exports = {
    getAllTransactions
};