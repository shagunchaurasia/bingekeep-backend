const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const PORT      = process.env.PORT || 5000;

const dialogFlowRoutes = require('./src/routes/dialogFlow');


app.use(bodyParser.json({extended:true}));

app.use('/api/df/', dialogFlowRoutes);

app.get("/", (request,response,next)=>{

    response.send({"Hello":"there"})

});


app.listen(PORT);

