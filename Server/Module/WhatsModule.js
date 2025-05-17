const mongoose= require("mongoose");
const SucessSchema = new mongoose.Schema({
        images: [
        {
            type: String
        }
      
    ],
     CourseDescription: {
    type: String,
  },
     Coursename: {
    type: String,
  },

           category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
          },
           PDFbrochure: [
        {
            type: String
        }
    ]


})

module.exports = mongoose.model("Whatsnew", SucessSchema);