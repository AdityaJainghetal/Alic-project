const Course = require("../Module/WhatsModule");
const imagekit = require("../Utils/imageKit");

const fs = require("fs");
const path = require("path");
// const Course = require("../Module/WhatsModule");
// const imagekit = require("../Utils/imageKit");

const WhatsNewSave = async (req, res) => {
  try {
    const { Coursename, CourseDescription, category } = req.body;

    const uploadedImages = [];

    // Handle image uploads
    const imageFiles = req.files?.images || [];
    for (const file of imageFiles) {
      const { url } = await imagekit.upload({
        file: file.buffer,
        fileName: file.originalname,
        folder: "/whats-new"
      });
      uploadedImages.push(url);
    }

    // Handle PDF brochure upload
    let pdfUrl = "";
    if (req.files?.PDFbrochure?.[0]) {
      const pdfFile = req.files.PDFbrochure[0];
      const filename = `${Date.now()}-${pdfFile.originalname}`;
      const savePath = path.join(__dirname, "..", "uploads", "pdfs", filename);
      fs.writeFileSync(savePath, pdfFile.buffer);
      pdfUrl = `${req.protocol}://${req.get("host")}/uploads/pdfs/${filename}`;
    }

    // Create new Course
    const course = await Course.create({
      Coursename,
      CourseDescription,
      category,
      images: uploadedImages,
      PDFbrochure: pdfUrl
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course
    });

  } catch (error) {
    console.error("WhatsNewSave error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Internal Server Error"
    });
  }
};

const getWhatsNew = async (req, res) => {
  try {
    const courses = await Course.find().populate("category");
    res.status(200).json({
      success: true,
      data: courses
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch courses"
    });
  }
};

module.exports = {
  WhatsNewSave,
  getWhatsNew
};