const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());


//Crianco uma rota inicial 

app.get('/', (req,res) => {
    res.send('Servidor está funcionando');
});

const PORT = process.env.Port || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor esta rodando na PORTA ${PORT}`);
});

