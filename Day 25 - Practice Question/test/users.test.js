const request = require("supertest");
const app = require("../server");

describe("Users API", () => {

  it("should create a user", async () => {

    const res = await request(app)
      .post("/api/users")
      .send({
        name: "Test User",
        email: "test@test.com"
      });

    if (res.statusCode !== 201) {
      throw new Error("User creation failed");
    }

  });

});