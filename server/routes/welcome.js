const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
  res.send("Welcome to the spaceship factory!");
});

module.exports = router; // HAHAHA welcome to what?
