const images = require('express').Router();
const { uploadImage } = require('../../Queries/ImageQueries');


images.post("/", upload.single("image"),  uploadImage) //"image" is field name




module.exports = images;