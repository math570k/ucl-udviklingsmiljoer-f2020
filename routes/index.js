var express = require("express");
var router = express.Router();
var productRouter = require("./products");
var categoryRouter = require("./categories");
var supplierRouter = require("./suppliers");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/suppliers", supplierRouter);

module.exports = router;
