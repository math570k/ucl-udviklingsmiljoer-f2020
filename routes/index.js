var express = require("express");
var router = express.Router();
var productRouter = require("./products");
var categoryRouter = require("./categories");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/products", productRouter);
router.use("/categories", categoryRouter);

module.exports = router;
