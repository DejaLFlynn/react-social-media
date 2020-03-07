const users = require("express").Router()

const {createUser, deleteUser, getUser} = require("../../Queries/UserQueries")


//Nested Route
const usersImagesRouter = require('./UsersNestedRoutes/NestedImages');

users.use('/', usersImagesRouter);

users.post("/", createUser)

users.delete("/:id", deleteUser)

users.get("/:id", getUser)



module.exports = users;