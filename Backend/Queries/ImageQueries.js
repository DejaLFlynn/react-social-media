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
       await db.none("DELETE FROM pictures WHERE id = $1", req.params.id);
       res.status(200).json({
          status: "success",
          message: "A picture was deleted "
       })
    } catch (err){
       console.log(err)
       res.json({
          status: "error",
          message: "picture was not deleted",
       })
    }
 }


module.exports = { createImage, deleteImage }