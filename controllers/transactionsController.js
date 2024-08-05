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

const addTransaction = (req, res) => {
    const { name, description, category, price, stock, expiry_date } = req.body;
    dbi.query(
    'INSERT INTO products (name, description, category, price, stock, expiry_date) VALUES (?, ?, ?, ?, ?, ? )',
    [name, description, category, price, stock, expiry_date],
    (err, results) => {
    if (err) {
    console.error('Erro ao adicionar transação:', err);
    res.status(500).send('Erro ao adicionar transação');
    return;
    }
    res.status(201).send('Transação adicionada com sucesso');
    }
    );
   };


module.exports = {
    getAllTransactions, 
    addTransaction
};