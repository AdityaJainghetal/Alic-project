const mongoose= require("mongoose");
const BlogSchema = new mongoose.Schema({
        images: [
        {
            type: String
        }
      
    ],
      Blog :{
        type:String
      },
      author:{
         type:String
      },
      title:{
        type:String
      },
      excerpt:{
        type:String
      },
      LastDate: { // Changed to Date if it's a date field
    type: Date,
  },


})

module.exports = mongoose.model("Blog", BlogSchema);