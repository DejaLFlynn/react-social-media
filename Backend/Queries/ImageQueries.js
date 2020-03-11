const db =require("../db/db")

 const deleteImage = async (req, res) => {
    try {
       await db.none("DELETE FROM pictures WHERE id = $1", req.params.id);
       res.status(200).json({
          status: "success",
          message: "A picture was deleted "
       })
    } catch (err){
       console.log(err)
       res.status(404).json({
         status: err,
          message: "picture was not deleted",
       })
    }
 }


module.exports = { deleteImage }