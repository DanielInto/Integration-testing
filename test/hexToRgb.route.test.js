const expect = require("chai").expect;
const request = require("supertest");
const app = require("../src/rApi");

describe("GET /api/hex-to-rgb", function () {
  it("should get RGB value", async function () {
    const res = await request(app).get("/api/hex-to-rgb?hex=ff0000");

    expect(res.status).to.equal(200);
    expect(res.body.rgb).to.deep.equal({ r: 255, g: 0, b: 0 });
  });

  it("should return 400 for invalid hex", async function () {
    const res = await request(app).get("/api/hex-to-rgb?hex=ggg");

    expect(res.status).to.equal(400);
  });
});
