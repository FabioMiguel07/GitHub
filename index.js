const express =  require('express');

const app = express();
const tese = 'Nome';

app.get('/teste', (request, response) => {
    return response.json({hello: 'Hello Word'})
});

app.listen(3333);
