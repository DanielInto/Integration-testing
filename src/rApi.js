const express = require("express");
const hexToRgb = require("./hexToRgb");

const app = express();

app.get("/api/hex-to-rgb", (req, res) => {
  const { hex } = req.query;
  console.log("Received hex:", hex);
  const result = hexToRgb(hex);

  if (!result) {
    return res.status(400).json({ error: "Invalid hex color format" });
  }

  res.json({
    hex,
    rgb: result,
  });
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
}
module.exports = app;
