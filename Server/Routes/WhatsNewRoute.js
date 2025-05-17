const express = require('express');
const enquiryController = require('../Controller/WhatsNewController');
const upload = require("../middlewares/multer");
const router = express.Router();


router.post("/add", upload, enquiryController.WhatsNewSave);



module.exports = router;