const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const secret = 'sdsgdfgzdrgzrdgd4g5f4fgs5dvd6';

const bcrypt = require('bcryptjs'); //for hashing password
var salt = bcrypt.genSaltSync(10); // salt= to the hashed password

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  }),
);

app.use(express.json());

mongoose.connect(
  'mongodb+srv://Stephanie:eMsZpNLBcgSfhtxI@cluster0.bp39mje.mongodb.net/?retryWrites=true&w=majority',
);

app.post('/register', async (req, res) => {
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

  //   res.json('test 4000');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  const passOk = bcrypt.compareSync(
    password,
    userDoc.password,
  );
  if (passOk) {
    //login
    jwt.sign(
      {
        usernam: userDoc.username,
        id: userDoc._id,
      },
      secret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json('ok');
      },
    );
  } else {
    res.status(400).json('Wrong Password');
  }
  //   res.json(passOk);
});

app.listen(4000);

//mongodb+srv://Stephanie:eMsZpNLBcgSfhtxI@cluster0.bp39mje.mongodb.net/?retryWrites=true&w=majority
//Stephanie=>eMsZpNLBcgSfhtxI
