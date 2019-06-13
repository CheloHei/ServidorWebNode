
const http = require('http');

//para crear un servidor local
http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-Type':'application/json'})
    
    let salida = {
        nombre: 'marcelo',
        edad: 23,
        url: req.url
    }

    //enviar en la respuesta
    //res.write('Hola mundo');
    res.write(JSONstringify(salida));
    //le decimos que la respuesta ya termino
    res.end();



})
.listen(8080);//para escuchar el puerto designado

console.log('escuchando puerto 8080');