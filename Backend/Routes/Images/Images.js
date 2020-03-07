const images = require('express').Router();
const { deleteImage } = require('../../Queries/ImageQueries');

const imageVotesRouter = require("./ImagesNestedRoutes/NestedVotes");
const imageHashtagRouter = require("./ImagesNestedRoutes/NestedHashtags");
images.use("/:id/votes", imageVotesRouter);
images.use("/:id/hashtags", imageHashtagRouter);


images.delete("/:id", deleteImage);


module.exports = images;
