const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');
const moment = require('moment');
const path = require('path'); // Adicione esta linha
const routes = require('./src/routes/index.js');

const app = express();
const PORT = 3000;
app.use(cookieParser());


app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3001', // Substitua pelo domínio do seu frontend
  credentials: true // Se você estiver enviando credenciais, como cookies
}));


const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'roobotjobsdb',
};

// Configuração do middleware cookie-parser

// Configuração do mecanismo de modelo EJS
app.set('view engine', 'ejs');

// Define o diretório de visualizações
app.set('views', path.join(__dirname, 'src', 'views'));

// Define o diretório 'src/public' como o diretório de recursos estáticos
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Usa as rotas definidas em src/routes/index.js
app.use('/', routes);
// Adiciona uma rota para servir o arquivo CSS diretamente

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
