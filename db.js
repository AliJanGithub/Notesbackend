// const mongoose=require('mongoose')
// const mongoURI='mongodb://localhost:27017'
// const connecttodb=()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("success")
//     })
        
    
// }
const mongoose = require('mongoose');
const connecttodb=mongoose.connect('mongodb+srv://alijan061333:U3q98KrLATMVBCAe@cluster0.5ly21.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((error) => {
    console.error(error);
  });
  module.exports=connecttodb;
