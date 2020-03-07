const users = require("express").Router()
const {createUser, deleteUser, getUser} = require("")

//Nested Route
const userPostsRouter = require("/:id/images") 
users.use("/:id/posts", userPostsRouter)

users.post("/", createUser)

users.delete("/:id", deleteUser)

users.get("/:id", getUser)



module.exports = users