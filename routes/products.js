const express = require('express'); // // Importa o framework Express
const router = express.Router(); // Cria um roteador 
const productsController = require ('../controllers/productsController'); //  Importa o controlador das transações

//Rota para obter todos os produtos 
router.get('/',productsController.getAllProducts);

//Rota para inserir novos produtos 
router.post('/',productsController.addProducts);

//Rota para a atualização completa do produto 
router.put('/:id',productsController.updateProductsPut);

//Rota para a atualização parcial do produto
router.patch('/:id',productsController.updateProductsPatch); 

//Rota para deletar um produto 
router.delete('/:id',productsController.deleteProducts);


//Exportando o roteador 
module.exports = router;
