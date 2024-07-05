const express=require('express')
const app=express();
const db=require('./db');
const personRoutes=require('./routes/personr  outes');
const menuItemRoutes=require('./routes/menuItemRoutes');


//body parser just convert the different format of body into the required format

const bodyParser=require("body-parser");
app.use(bodyParser.json()); //req.body  // json is used because the format of data is in json format   


const Person=require('./../models/person'); 
//const MenuItem=require('./models/MenuItem');

 
app.get('/',function(req,res){
    res.send('welcome to my restaurant');
});


app.get('/person/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType; //extract the work type from the URL parameter
        if(workType=='chef'|| workType=='manager' || workType=='waiter'){
             const response=await Person.find({work: workType});
             console.log('response fetched');
             res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
});

app.listen(3000,()=>{
    console.log("listening to the live server");
});


 //Import the router file

 //use the router
app.use('/person',personRoutes);
app.use('/menu',personRoutes)


//creating the server


// app.listen(3000,()=>{
//     console.log("everything is fine and ok");
// })