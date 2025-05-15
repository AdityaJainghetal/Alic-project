const express = require("express");
const route =express.Router();
const QueryController = require("../Controller/CourseController");


route.post("/create", QueryController.Querysave);





module.exports =route;