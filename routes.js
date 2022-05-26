const express = require('express');
const userService = require('./user');

const router = express.Router();
router.post('/register', async (req, res, next) => {
 
  const { firstName, middleNames, lastName, dateofbirth } = req.body;
  try {
    const id = await userService.register(firstName, middleNames, lastName, dateofbirth);
    res.status(201).json(id);
  } catch {
    console.error(err);
    res.status(500).json('something went wrong');
  }
});

module.exports = router;