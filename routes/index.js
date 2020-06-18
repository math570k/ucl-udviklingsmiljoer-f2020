var express = require("express");
var router = express.Router();
var productRouter = require("./products");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/products", productRouter);

module.exports = router;
