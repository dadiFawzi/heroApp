const express = require('express') ; 
const heroRoute = require('./routes /hero.route')
const app = express() ; 
app.use(express.json()) ; 


require('./config/connect') ; 


app.use('/hero',heroRoute); 









app.listen(3000 , ()=>{
    console.log('app work ') ; 
});