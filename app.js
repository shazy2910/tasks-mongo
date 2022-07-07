const mongoose = require('mongoose');
const Task = require('./tasks');


const dbURI = 'mongodb+srv://Harsha:test123@cluster0.qixkm.mongodb.net/LearningDB?retryWrites=true&w=majority';


async function create(){

   const t1 = new Task({
      
       Description:"Wake up",
       Completed:"true"
    })

   await t1.save();

    const t2 = new Task({
        Description:"Brush",
        Completed: "true"
     })

   await  t2.save();

     const t3 = new Task({
        Description:"Yoga",
        Completed: "false"
     })
     
   await  t3.save();

     const t4 = new Task({
        Description:"Breakfast",
        Completed: "false"
     })

   await  t4.save();
     
}

async function find(){

   await Task.find({Completed:"false"})
    .then((docs)=>{
      
          docs.forEach((ele)=>{
             console.log(ele.Description);
            });
      
   })
   .catch((err)=>{
      console.log("error finding  files.....")
   })
}

async function update(){
   await Task.updateMany({Completed:"false"},{$set:{Completed:"true"}})
   .then((docs)=>{
     
         console.log('documents updated...');
      }
   )
   .catch((err)=>{
      console.log("error updating  files.....")
   })
}

async function delete_doc(){
   await Task.findByIdAndDelete({_id:"6162f9ab16e1ea4f944a5055"})
   .then((docs)=>{
      
         console.log("document deleted");
      }
   )
   .catch((err)=>{
      console.log("error deleting  files.....")
   })

}



mongoose.connect(dbURI,{ useNewUrlParser : true, useUnifiedTopology: true})
   .then(()=>{
      console.log("connected to the db");
   })
   .then((result)=>{
      console.log("documents added");
      create();
   })
   .then((result)=>{
      find();
   })
   .then((result)=>{
      
      update();
   })
   .then((result)=>{
      delete_doc();
   })
   .catch((err)=>console.log(err))

 
