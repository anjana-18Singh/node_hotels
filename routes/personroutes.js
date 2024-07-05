//basic criteria for entering in the router
const express=require('express');
const router=express.Router();
const Person=require('./../models/Person');

//POST route to add a person
router.post('/',async(req,res)=>{
    try{
        const data=req.body //assuming the request body contains the perso data

        //create a new person document using mongoose Model
        const newPerson =new Person(data);

        //save the new person to the database
        const response =await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server'})
    }


    //GET methods to get the person response
    app.get('/',async(req,res)=>{
        try{
            const data =await Person.find();
            console.log('data fetched');
            res.status(200).json(data);
        }catch(err){
            console.log(err);
            re.status(500).json({error: "Internal server error"})

        }
       
    })

    app.get('/:workType',async(req,res)=>{
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
    })


   router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id; //Extract the id from the URL parameter
        const updatedPersonData=req.body;  //updated data for the person

        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidators:true,
        
    })

    if (!updatedPerson){
        return res.status(404).json({error: 'Person not find'});
    }
    console.log('data updated');
    res.status(200).json(response);

}catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
}
   })



})
router.delete('/id',async(res)=>{
    try{
        const personId=req.params.id; //extract the person's ID from the URL parameter

        //Assuming you have a Person model
        const response=await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({
                error: 'person not found'
            })
        }
        console.log('data delete');
        res.status(200).json({message: 'person deleted Successfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
})