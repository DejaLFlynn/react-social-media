const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 4000;

const app = express();
const multer = require("multer");
const path = require("path");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: 50000
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.static(path.join(__dirname, "Public")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Backend/Public/Uploads");
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    filetype.mimetype === "image/png" ||
    filetype.mimetype === "image/gif"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 //bytes 1mb = 1024 bytes
  }
  //fileFilter: fileFilter
});

app.post("/upload", upload.single("image"), (req, res, next) => {
  try {
    console.log(req.file);
    let url = "http://localhost:4000/Uploads/" + req.file.filename;
    res.json({
      imageUrl: url,
      message: "File Uploaded"
    });
  } catch (error) {
    res.status(400).json({
      status: error,
      message: "Upload Failed"
    });
  }
});

const usersRouter = require("./Routes/Users/Users");
const imagesRouter = require("./Routes/Images/Images");
const votesRouter = require("./Routes/Votes/Votes");
const hashtagsRouter = require("./Routes/Hashtags/Hashtags");

app.use("/users", usersRouter);
app.use("/images", imagesRouter);
app.use("/votes", votesRouter);
app.use("/hashtags", hashtagsRouter);

app.listen(port, () => console.log(`Server running on Port: ${port}`));

// {
//     fieldname: 'image',
//     originalname: 'NilberRemon.jpg',
//     encoding: '7bit',
//     mimetype: 'image/jpeg',
//     destination: './Frontend/click/src/Public/Images',
//     filename: '1584065473817 - NilberRemon.jpg',
//     path: 'Frontend/click/src/Public/Images/1584065473817 - NilberRemon.jpg',
//     size: 151796
//   }
