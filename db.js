
        
    
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
