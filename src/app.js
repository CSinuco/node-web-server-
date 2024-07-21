const {envs} = require('./config/env')
const {startServer} = require('./server/server')
const main = () =>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}
//Funcion autoinvocada, agnostica
//No tiene nombre y los parentesis al final la inician
(async () =>{
    main()
})()