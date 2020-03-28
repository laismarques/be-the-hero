const expres = require ('express');
const cors = require('cors');
const routes = require ('./routes');
 

const app = expres();

app.use(cors());
app.use(expres.json());
app.use(routes);
/**
 * Rota / Recurso - '/'
 * 
 * Métodos HTTP:
 * 
 * Get: Buscar informações no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: deleta alguma informação no back-end
 * 
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na roda após "?" (Filtros, Paginação)
 * Route Params: Parâmetros utilizados identificar recursos
 * Request Body: corpo da requisição, utilixado para alterar e criar recursos
 */


app.listen(3333)// quando eu for acessar o navegador essa vai ser a porta
