const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");
const Comment = require("./models/Comment");
const jwt = require("jsonwebtoken");

const multer = require("multer");

const uploadMiddleware = multer({
  dest: "uploads/",
});

const commentMiddleware = multer({
  dest: "commentUpload/",
});
const fs = require("fs");

const cookieParser = require("cookie-parser");

const bcrypt = require("bcryptjs"); //for hashing password
var salt = bcrypt.genSaltSync(10); // salt= to the hashed password
const secret = "sdsgdfgzdrgzrdgd4g5f4fgs5dvd6";
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
mongoose.connect(
  "mongodb+srv://Stephanie:eMsZpNLBcgSfhtxI@cluster0.bp39mje.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
      email,
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e.message);
  }

  // res.json('test 4000');
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });

  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign(
      {
        id: userDoc._id,
        username: userDoc.username,
      },
      secret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: userDoc._id,
          username: userDoc.username,
        });
      }
    );
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.get("/proflie", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.post("/createpost", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
      comments: [],
    });
    res.json(postDoc);
  });
}); /// collect the data from the create post form

//put the new data to post
app.put("/post", uploadMiddleware.single("file"), async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { id, title, summary, content } = req.body;
    const postDoc = await Post.findById(id);
    const IsAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id); // check author is right before update
    if (!IsAuthor) {
      return res.status(400).json("you are not the author");
    }
    await postDoc.update({
      title,
      summary,
      content,
      cover: newPath ? newPath : postDoc.cover,
    }); // updata content
    res.json(postDoc);
  });
});

app.get("/createpost", async (req, res) => {
  res.json(
    await Post.find()
      .populate("author", ["username"])
      .sort({ createAt: -1 })
      .limit(20)
  );
});

// to PostPage
app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["username"]);
  //select what info you need
  res.json(postDoc); //get the author name though the :id URL with req.params;
});

app.post(
  "/post/:id/comment",
  commentMiddleware.single("file"),
  async (req, res) => {
    const { id } = req.params;
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;

      const { comment } = req.body;
      const commentDoc = await Comment.create({
        postId: id,
        comment,
        author: info.username, //collect the name of the user who made the comment form the Jwt,sign Token
      });

      res.json(commentDoc);
      // const postComment = Post.findById(
      //   id,
      // ).populate('comments.commentDoc');  // have to kept researching for the per post per comments
      // console.log(commentDoc);
      // console.log(postComment);
    }); //here we create new comment post

    // console.log(id);
  }
);

app.get("/post/:id/comment", async (req, res) => {
  res.json(await Comment.find().sort({ createAt: -1 }).limit(20));
}); //here we put the commentPost on the mini PostPage Layout

app.listen(4000);
