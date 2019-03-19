const express = require("express");

const router = new express.Router();
 
const {createError} = require("../utils/create-error");

router.get("/", (req, res) => {
    res.send("Hello, World!");
  });
  

router.get(
  "/error",
  async (req, res, next) => {     
    next(createError("Error occured!", 500));
  }
);


module.exports = router;
