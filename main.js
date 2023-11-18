const backendConfig = require('./configs/backendConfig.json')
const Routes = require('./service/Routes')
const express = require('express');
const app = express();

app.use(Routes)

app.listen(backendConfig.ApplicationPort, () =>{

    console.clear()
    console.log(`${backendConfig.ApplicationName} - ${backendConfig.ApplicationMSG}`)
    console.log(`Porta de Acesso : ${backendConfig.ApplicationPort}`)

})