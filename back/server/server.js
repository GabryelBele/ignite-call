import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import perfilRoutes from './routes/perfilRoutes.js';

const app = express();
const port = 3000;

// Configuração de CORS
app.use(cors());

// Configuração de body-parser e limites
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Configuração de express para lidar com JSON e limites
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Rotas
app.use('/api', perfilRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
