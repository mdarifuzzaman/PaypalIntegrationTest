

const express = require('express');
const app = express();
const port = 8000;


const route = function(app){
    app.get('/testendpoint', async (req, res) => {
        console.log("testendpoint gets called");
        await res.send({data: 'teste'});
    });
}

route(app);

app.listen(port, () => {
    console.log("Server is listening at " + port);
});

