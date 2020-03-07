const db =require("../db/db")

const createImage = async (req, res) => {
    try {
       let newImage = db.one("INSERT INTO pictures (picture) VALUES(${picture})", req.body);
       res.status(200).json({
          status: "success",
          message: "A new picture is created ",
          payload: newImage
       })
    } catch (err){
       res.json({
          status: "error",
          message: "picture was not created",
          payload: null
       })
    }
 }
 const deleteImage = async (req, res) => {
    try {
       await db.none("DELETE FROM users WHERE id = $1", req.params.id);
       res.status(200).json({
          status: "success",
          message: "A picture was deleted "
       })
    } catch (err){
       res.json({
          status: "error",
          message: "picture was not deleted",
       })
    }
 }
 const getImageVotes = async (req, res, next) => {
    try {
       let imageVote = await db.any ("SELECT p.picture, COUNT (v.voter_id) AS Total_Votes FROM votes v JOIN pictures p ON p.id = v.picture_id GROUP BY v.picture_id, p.picture HAVING v.picture_id = $1", req.params.id)
       res.status(200).json({ 
          status: "success", 
          message: "All votes for one image",
          payload: imageVote
       })
    } catch (err) {
       next(err)
    }
 }
 const getImageHashtags = async (req, res,next)=>{
     try{
         let imag
     }
 }
module.exports = { addImageVotes, addImageHashtags,getImageVotes, createImage, deleteImage, getImageHashtags}