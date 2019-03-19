const express = require("express");
const router = new express.Router();
const jwtToken = require("jsonwebtoken");

const auth = require("../middleware/auth");
const {createError} = require("../utils/create-error");

router.post("/signin", (req, res, next) => {
  const { userName, password } = req.body;

  if (userName === "daniel" && password === "1234") {
    const token = jwtToken.sign({ id: 5431 }, process.env.SECRECT_KEY, {
      expiresIn: "1h"
    });
    res.status(200).send(token);
  } else {
     next(createError("Sign in failed!", 401));
  }
});

router.get("/users/me", auth, async (req,res)=> {
    res.send({
       id: req.user.id,
       userName: 'daniel'
    })
})

router.get("/users", auth, async (req, res) => {
  res.send([
    {
      name: "Daniel",
      age: 45
    },
    {
      name: "Mark",
      age: 27
    }
  ]);
});


module.exports = router;
