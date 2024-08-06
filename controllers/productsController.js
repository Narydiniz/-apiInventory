const dbi = require ('../config/dbi');

const getAllProducts = (req,res) =>{
    dbi.query('SELECT * FROM products',(err,results) => {
        if (err){
            console.error('Erro ao obter transações:',err);
            res.status(500).send('Erro ao obter transações');
            return;
        
        }
        res.json(results);
    });
};

const addProducts = (req, res) => {
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

   const updateProductsPut = (req,res) => {
    const {id} = req.params;
    const { name, description, category, price, stock, expiry_date } = req.body;
    dbi.query(
        'UPDATE products SET  name = ?, description = ?, category = ?, price = ?, stock = ?, expiry_date = ? WHERE id = ?',
        [id, name, description, category, price, stock, expiry_date],
        (err, results) =>{
            if (err) {
                console.error('Não foi possivel atualizar a atransação', err);
                res.status(500).send('Erro! A transação não foi atualizada');
            return;
            }
            res.send('Atualização concluida com sucesso!')
        }
    );
   };

   const updateProductsPatch = (req,res) =>{
    const {id} = req.params;
    const fields = req.body;
    const query = [];
    const values = [];

    for (const [key, value] of Object.entries(fields)){
        query.push(`${key}=?`);
        values.push(value);
    }
    values.push(id);
    dbi.query(
        `UPDATE products SET ${query.join(',')} WHERE id = ? `,
        values,
        (err,results) =>{
            if(err){
            console.error('Não foi possivel atualizar a transação', err);
            res.status(500).send('Erro! Não foi possivel atualizar a transação');
            return;
            }
            res.send('Atualização concluida com sucesso!');
        }
    );
    };


    const deleteProducts = (req, res) => {
        const {id} = req.params;
        dbi.query('DELETE FROM products WHERE id = ?', [id], (err,results) =>{
            if (err) {
                console.error('Erro! Não foi possivel deletar a atransação', err);
                res.status(500).send('Erro! Não foi possivel deletar a atransação');
                return;
            }
            res.send('Transação deletada com sucesso');
        });
    }


module.exports = {
    getAllProducts, 
    addProducts,
    updateProductsPut,
    updateProductsPatch,
    deleteProducts
};

