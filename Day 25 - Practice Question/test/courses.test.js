const request = require("supertest");
const app = require("../server");

describe("Courses API", () => {

  it("should return all courses", async () => {

    const res = await request(app).get("/api/courses");

    if (res.statusCode !== 200) {
      throw new Error("Courses route failed");
    }

  });

});