const jwtToken = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded= jwtToken.verify(token, process.env.SECRECT_KEY);
    const user = { id: decoded.id};

    req.token = token;
    req.user = user;

    next();
    
  } catch (e) {
    res.status(401).send({ error: "please authenticate!" });
  }
};

module.exports = auth;

 