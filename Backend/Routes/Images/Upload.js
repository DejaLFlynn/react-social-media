const images = require('express').Router();
const { uploadImage } = require('../../Queries/ImageQueries');


images.post("/", upload.single("image"),  uploadImage)




module.exports = images;
