const request = require("supertest");
const app = require("../app");
const jwtToken = require("jsonwebtoken");

console.log(process.env.SECRECT_KEY);
const token = jwtToken.sign({ id: 5431 }, process.env.SECRECT_KEY, {
  expiresIn: "1h"
});

beforeEach(() => {
  console.log("before each");
});

afterEach(() => {
  console.log("after each");
});

test("should return hello world", async () => {
  await request(app)
    .get("/")
    .expect("Hello, World!");
});

test("should  login with valid inputs", async () => {
  await request(app)
    .post("/signin")
    .send({
      userName: "daniel",
      password: "1234"
    })
    .expect(200);
});

test("should not login with invalid inputs", async () => {
  await request(app)
    .post("/signin")
    .send({
      userName: "232323",
      password: "password"
    })
    .expect(401);
});

test("should get user profile", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${token}`)
    .send()
    .expect({
      id: 5431,
      userName: "daniel"
    });
});
