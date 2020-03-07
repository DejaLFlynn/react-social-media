const db = require('../../db/db');

const getUser = async (req, res) => {
   try {
      let user = await db.one("SELECT * FROM users WHERE id = $1", req.params.id)
      res.status(201).json({
         status: "success",
         message: "retrieved single user",
         payload: user
      })
   } catch (err) {
      res.json({
         status: "error",
         message: "user not found",
         payload: null
      })
   }
}

const createUser = async (req, res) => {
   try {
      let newUser = db.one("INSERT INTO users (username, email, age, profile_pic) VALUES(${username}, ${email}, ${age}, ${profile_pic})", req.body);
      res.status(200).json({
         status: "success",
         message: "A new user is created ",
         payload: newUser
      })
   } catch (err){
      res.json({
         status: "error",
         message: "user was not created",
         payload: null
      })
   }
}

const deleteUser = async (req, res) => {
   try {
      await db.none("DELETE FROM users WHERE id = $1", req.params.id )
      res.status(200).json({
         status: "success",
         message: "The user is deleted"
      })
   } catch (err) {
      console.log(err)
      res.json({
         status: "error",
         message: "The user was not deleted"
      })
   }
}

const getImagesByUser = async (req, res, next) => {
   try {
      let images = await db.any ("SELECT u.username, ARRAY_AGG (p.picture) AS Arr_Pics FROM pictures p JOIN users u ON u.id = p.user_id GROUP BY u.id HAVING u.id = $1", req.params.id)
      res.status(200).json({
         status: "success",
         message: "All images for one user",
         payload: images
      })
   } catch (err) {
      next(err)
   }
}

module.exports = { getUser, createUser, deleteUser, getImagesByUser}