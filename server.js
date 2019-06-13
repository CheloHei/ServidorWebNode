const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

/*
*   Para pasar contenido estatico
*/
app.use(express.static(  __dirname+'/public'  ));
// express hbs
hbs.registerPartials( __dirname +'/views/parciales');
app.set('view engine','hbs');


app.get('/',(req,res)=>{
   res.render('home',{
       nombre:'Marcelo',
       anio: new Date().getFullYear()
   });
});
app.get('/about',(req,res)=>{
   res.render('about',{
       
       anio: new Date().getFullYear()
   });
});



app.listen(port,()=>{
    console.log(`Corriendo en el puerto ${port}`);
});


/*
app.get('/',function(req,res){
    res.send('Hello World')
});
app.listen(3000)


app.get('/',(req,res)=>{
   // res.send('Hello Mundo')
   let salida = {
        nombre: 'marcelo',
        edad: 23,
        url: req.url
    };

    res.send(salida);
});


*/
   