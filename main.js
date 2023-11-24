const backendConfig = require('./configs/backendConfig.json');
const Routes = require('./service/Routes');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(Routes);

app.listen(backendConfig.ApplicationPort, () => {
    console.clear();
    console.log(`${backendConfig.ApplicationName} - ${backendConfig.ApplicationMSG}`);
    console.log(`Porta de Acesso : ${backendConfig.ApplicationPort}`);
});
