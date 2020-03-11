const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 4000;

const app = express();
const multer = require('multer');
const path = require("path");

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, "./public/Assets/Images")))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../PulicAssets/Images')
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()} - ${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || filetype.mimetype === 'image/png'){
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 5 //bytes 1mb = 1024 bytes
    },
    //fileFilter: fileFilter
})

const usersRouter = require("./Routes/Users/Users")
const imagesRouter = require("./Routes/Images/Images")
const votesRouter = require("./Routes/Votes/Votes")
const hashtagsRouter = require("./Routes/Hashtags/Hashtags")


app.use("/users", usersRouter)
app.use("/images", imagesRouter)
app.use("/votes", votesRouter)
app.use("/hashtags", hashtagsRouter)

app.listen(port, () => console.log(`Server running on Port: ${port}`))