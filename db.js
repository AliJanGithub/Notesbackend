
        
    
// }
const mongoose = require('mongoose');
const connecttodb=mongoose.connect('mongodb+srv://alijan061333:ugtipMKiHCkrEVc9@cluster0.6j7uu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((error) => {
    console.error(error);
  });
  module.exports=connecttodb;
