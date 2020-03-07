const images = require('express').Router();
const { getImages, getImage, createImage, deleteImage } = require('../../Queries/Images');

const imageVotesRouter = require("./ImagesNestedRoutes/Votes");
const imageHashtagRouter = require("./ImagesNestedRoutes/Hashtags");
images.use("/:id/votes", imageVotesRouter);
images.use("/:id/hashtags", imageHashtagRouter);


images.get("/", getImages);
images.get("/:id", getImage);
images.post("/", createImage);
images.delete("/:id", deleteImage);


module.exports = images;
