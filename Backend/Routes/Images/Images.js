const images = require("express").Router()
const {createImage, deleteImage, getImage} = require("../../Queries/ImageQueries")

//Nested Route
const imagePostsRouter = require("/:id/images") 
images.use("/:id/posts", imagePostsRouter)

images.post("/", createImage)

images.delete("/:id", deleteImage)

images.get("/:id", getImage)



module.exports = images