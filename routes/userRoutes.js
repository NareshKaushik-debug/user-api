const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all users
router.get('/getUsers', async (req, res) => {
  console.log('Fetching all users');
  const users = await User.find();
  console.log('Users fetched:', users);
  res.json(users);
});

// POST a new user
router.post('/createUser', async (req, res) => {
  console.log('Creating a new user', req.body);
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

module.exports = router;
