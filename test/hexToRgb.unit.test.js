const expect = require("chai").expect;
const hexToRgb = require("../src/hexToRgb");

describe("hexToRgb function", function () {
  it("should convert 6-digit hex to RGB", function () {
    const result = hexToRgb("#ff0000");
    expect(result).to.deep.equal({ r: 255, g: 0, b: 0 });
  });

  it("should work without # prefix", function () {
    const result = hexToRgb("00ff00");
    expect(result).to.deep.equal({ r: 0, g: 255, b: 0 });
  });

  it("should convert 3-digit hex to RGB", function () {
    const result = hexToRgb("#00f");
    expect(result).to.deep.equal({ r: 0, g: 0, b: 255 });
  });

  it("should return null for invalid hex format", function () {
    const result = hexToRgb("ggg");
    expect(result).to.be.null;
  });
  it("should return null for empty input", function () {
    const result = hexToRgb("");
    expect(result).to.be.null;
  });
});
