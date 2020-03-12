const images = require('express').Router();
const { deleteImage } = require('../../Queries/ImageQueries');

const imageVotesRouter = require("./ImagesNestedRoutes/NestedVotes");
const imageHashtagRouter = require("./ImagesNestedRoutes/NestedHashtags");
images.use("/votes", imageVotesRouter);
images.use("/hashtags", imageHashtagRouter);



images.delete("/:id", deleteImage);


module.exports = images;

