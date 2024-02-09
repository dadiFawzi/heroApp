const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost/hero')
.then(()=>{
    console.log('connecte to db ')
})
.catch(()=>{
    console.log('error ')
})  ; 

