const db = require('../db/db');

const getUser = async (req, res) => {
   try {
      let user = await db.one("SELECT * FROM users WHERE username = $1", req.params.username)
      res.status(200).json({
         status: "success",
         message: "retrieved single user",
         payload: user
      })
   } catch (err) {
      res.status(404).json({
         status: err,
         message: "user was not found",
         payload: null
     })
   }  
}

const createUser = async (req, res) => {
   try {
      let newUser = await db.one("INSERT INTO users (fullname, username, email, age, profile_pic) VALUES(${fullname}, ${username}, ${email}, ${age}, ${profile_pic}) RETURNING *", req.body);
      res.status(200).json({
         status: "success",
         message: "A new user is created ",
         payload: newUser
      })
   } catch (err){
      res.status(404).json({
         status: err,
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
      res.status(404).json({
         status: err,
         message: "The user was not deleted"
      })
   }
}



const createImage = async (req, res) => {
   try {
      let newImage = await db.one("INSERT INTO pictures (picture, user_id) VALUES(${picture}, ${id}) RETURNING id", req.body);
      res.status(200).json({
         status: "success",
         message: "A new picture is created ",
         payload: newImage
      })
   } catch (err){
     res.status(404).json({
         status: err,
         message: "Picture was not created",
         payload: null
      })
   }
}

const getImagesByUser = async (req, res, next) => {
   try {
      let images = await db.any("SELECT u.username, ARRAY_AGG (p.picture) AS Arr_Pics FROM pictures p JOIN users u ON u.id = p.user_id GROUP BY u.id HAVING u.id = $1", req.params.id)
      res.status(200).json({
         status: "success",
         message: "All images for one user",
         payload: images
      })
   } catch (err) {
      res.status(404).json({
         status: err,
         message: "There are no images found for the specified user",
         payload: null
   })
 }
}


module.exports = { getUser, createUser, deleteUser, createImage, getImagesByUser }