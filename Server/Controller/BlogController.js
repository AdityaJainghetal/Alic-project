const Banner = require("../Module/BlogModule");
const imagekit = require("../Utils/imageKit");

const BlogSave = async (req, res) => {
  try {
    const {
      Blog,
      author,
      title,
      excerpt,
      LastDate,
    } = req.body;

    // Handle image uploads
    const uploadedImages = [];
    const filesRaw = req.files?.images;

    if (filesRaw) {
      const files = Array.isArray(filesRaw) ? filesRaw : [filesRaw];

      for (let file of files) {
        const buffer = file.data;
        const uploadResponse = await imagekit.upload({
          file: buffer,
          fileName: file.name,
        });
        uploadedImages.push(uploadResponse.url);
      }
    }

    // Parse and validate LastDate
    const parsedLastDate = new Date(LastDate);
    if (isNaN(parsedLastDate)) {
      return res.status(400).json({ error: 'Invalid LastDate format' });
    }

    // Create banner
    const banner = await Banner.create({
      images: uploadedImages,
      Blog,
      author,
      title,
      excerpt,
      LastDate: parsedLastDate,
    });

    res.status(201).json(banner);
  } catch (error) {
    console.error('BannerSave error:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};



const BlogDisplayAll = async (req, res) => {
    try {
        const enquiries = await Banner.find();
        res.status(200).json({
            success: true,
            data: enquiries
        });
    } catch (error) {
        console.error("Error fetching enquiries:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch enquiries",
            error: error.message
        });
    }
};


module.exports = {
  BlogSave,
  BlogDisplayAll
};