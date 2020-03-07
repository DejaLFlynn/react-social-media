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
 const getImageVotes = async (req, res) => {
    try {
       let imageVote = await db.any ("SELECT p.picture, COUNT (v.voter_id) AS Total_Votes FROM votes v JOIN pictures p ON p.id = v.picture_id GROUP BY v.picture_id, p.picture HAVING v.picture_id = $1", req.params.id)
       res.status(200).json({ 
          status: "success", 
          message: "All votes for one image",
          payload: imageVote
       })
    } catch (err) {
        res.json({
            status: "error",
            message: "vote was not found",
         })
    }
 }
 const addImageHashtags = async (req, res)=>{
     try{
         let newImageHashtag = await db.one ("INSERT INTO pictures (user_id, picture, hashtag) VALUES(${user_id}, ${picture}, ${hashtag})", req.body)
         res.status(200).json({
             status: "success",
             message: "Hashtag added for image",
             payload: newImageHashtag
         })
     } catch(err) {
        res.json({
            status: "error",
            message: "hashtag was not added",
         })
     }
 }
 const addImageVotes = async (req,res)=>{
     try{
         let newImageVote = await db.one("INSERT INTO votes (voter_id, picture_id) VALUES(${voter_id}, ${picture_id})", req.body)
         res.status(200).json({
             status: "success",
             message: "Vote added for image",
             payload: newImageVote
         })

     }catch(err){
         res.json({
             status: "success",
             message: "vote not added",
         })

     }
 }
 const getImageHashtags = async (req, res)=>{
     try{
    
         let imageHashtags = await db.one("SELECT p.picture, ARRAY_AGG (h.body) AS arr_hashtags FROM pictures p JOIN hashtags h ON h.picture_id = p.id GROUP BY p.idHAVING p.id = 1", req.params.id)
            res.status({
                status: "success",
                message: "image hashtag found",
                payload: imageHashtags
            })
     }catch(err){
        res.json({
            status: "success",
            message: "image hashtag not retrieved",
        })

     }
 }
module.exports = { addImageVotes, addImageHashtags,getImageVotes, createImage, deleteImage, getImageHashtags}