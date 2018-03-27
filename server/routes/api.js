const express = require('express');
const router = express.Router();
const userData = require('../data/userData');
const userList = userData.getStubUserList();

/* GET api listing. */
router.get('/users', (req, res) => {
  console.log("called---------------------");
  res.status(200).send(userList);
});

module.exports = router;