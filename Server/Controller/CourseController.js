const UserModel = require("../Module/QueryModule");
const Course =  require( "../Module/Coursemodule")
const imagekit = require("../Utils/imageKit");

const Querysave = async(req, res)=>{
    const {Name, Phone,State, Medium,  message } = req.body;
      
    try {
         const User= await UserModel.create({
            Name:Name,
            Phone:Phone,
            State:State,
            Medium:Medium,
           message:message,
         
         })

         res.status(200).send("user succesfully registered!");
    } catch (error) {
          console.log(error);
    }
}

const getAllQuery = async (req, res) => {
    try {
        const products = await UserModel.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: error.message });
    }
};



const CourseSave = async (req, res) => {
  try {
    const {
      Seat,
      Semester,
      Coursename,
      StateCourse,
      Price,
      Instructor,
      Durations,
      Lessons,
      TotalStudent,
      language,
      Certification,
      CourseDescription,
      InstructorCourse,
      Review,
      TrainerName,
      LastDate,
      size, // ensure `size` is destructured
    } = req.body;

    // Parse JSON string if needed
    const parsedSize = typeof size === 'string' ? JSON.parse(size) : size;

    // Handle image uploads
    const uploadedImages = [];
    const files = Array.isArray(req.files?.images)
      ? req.files.images
      : [req.files?.images].filter(Boolean);

    for (let file of files) {
      const buffer = file.data;
      const uploadResponse = await imagekit.upload({
        file: buffer,
        fileName: file.name,
      });
      uploadedImages.push(uploadResponse.url);
    }

    // Parse LastDate
    const parsedLastDate = new Date(LastDate);
    if (isNaN(parsedLastDate)) {
      return res.status(400).json({ error: 'Invalid LastDate format' });
    }

    const course = await Course.create({
      Seat,
      Semester,
      Coursename,
      StateCourse,
      Price,
      Instructor,
      Durations,
      Lessons,
      TotalStudent,
      language,
      size: parsedSize,
      Certification,
      CourseDescription,
      InstructorCourse,
      Review,
      TrainerName,
      LastDate: parsedLastDate,
      images: uploadedImages, // Save uploaded image URLs
    });

    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const CourseDelete = async(req, res)=>{

     const {id} = req.params;
   await Course.findByIdAndDelete(id);

    res.status(200).send("Task deleted")
}


const QueryDelete = async(req, res)=>{

     const {id} = req.params;
   await UserModel.findByIdAndDelete(id);

    res.status(200).send("Task deleted")
}




const getAllCourse = async (req, res) => {
    try {
        const products = await Course.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
  try {
    const product = await Course.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports={
    Querysave,
     CourseSave,
     getAllCourse,
     CourseDelete,
     getAllQuery,
     QueryDelete,
     getProductById
     
}