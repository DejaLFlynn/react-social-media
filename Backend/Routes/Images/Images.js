const images = require('express').Router();
const { createImage, deleteImage } = require('../../Queries/ImageQueries');

const imageVotesRouter = require("./ImagesNestedRoutes/NestedVotes");
const imageHashtagRouter = require("./ImagesNestedRoutes/NestedHashtags");
images.use("/votes", imageVotesRouter);
images.use("/hashtags", imageHashtagRouter);


images.delete("/:id", deleteImage);
images.post("/:id", createImage)


module.exports = images;

