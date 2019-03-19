const request = require("supertest");
const app = require("../app"); 


test("should expect error", async () => {
  await request(app)
    .get("/error")
    .expect(500)
    .expect({error: "Error occured!"});
}); 