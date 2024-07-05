const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem');

//post method to 

router.post('/',async(req,res)=>{
    try{
        const data=req.body // assumimg the request body contains the persons data


    const newPerson=new Person(data);
    const response=await  newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
}
catch(err){
    console.log(err);
    res.status(500).json({error:'Interal Server Error'});
}

});

//GET methods to get the person
router.get('/',async(req,res)=>{
    try{
        const data=await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
})

module.exports=router;