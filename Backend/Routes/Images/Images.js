const images = require('express').Router();
const {createImage, deleteImage } = require('../../Queries/Images');

const imageVotesRouter = require("./ImagesNestedRoutes/NestedVotes");
const imageHashtagRouter = require("./ImagesNestedRoutes/NestedHashtags");
images.use("/:id/votes", imageVotesRouter);
images.use("/:id/hashtags", imageHashtagRouter);


images.post("/", createImage);
images.delete("/:id", deleteImage);


module.exports = images;
