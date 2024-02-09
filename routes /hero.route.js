    const express = require('express') ; 
    const route = express.Router() ; 
    const Hero = require('../models/hero') ; 

    //getall
    route.get('/all',(req,res)=>{

         Hero.find()
           .then((result)=>{
            res.send(result)
           })
           .catch((err)=>{
            res.send(err)
           })

    }); 


    //get by id 
    route.get('/byid/:id',(req,res)=>{

          let heroId = req.params.id ; 

          Hero.findById({_id : heroId})
                .then((result)=>{
                    res.send(result)
                })
                .catch((err)=>{
                    res.send(err)
                })

    });



    route.post('/add',(req,res)=>{
        let data = req.body ;
        let hero = new Hero(data);
        hero.save()
            .then((result)=>{
                res.send(result)
            })
            .catch((err)=>{
                res.send(err)
            })

    });



    route.delete('/delete/:id',(req,res)=>{

        let heroId = req.params.id ; 
         Hero.findByIdAndDelete({_id:heroId})
                .then((result)=>{
                    res.send(result)
                })
                .catch((err)=>{
                    res.send(err)
                })

    });

          

   route.put('/update/:id',(req,res)=>{
console.log('update function ') ; 
    let heroId = req.params.id ; 
    let data = req.body ;

    Hero.findByIdAndUpdate({_id:heroId},data)
            .then((result)=>{
                res.send(result)
            })
            .catch((err)=>{
                res.send(err)
            })



   });












module.exports = route ; 
