var express = require("express");
var router = express.Router();
var models = require("../models");

/* =================================================
  GET /api/products | Get all products
================================================= */
router.get("/", async function (req, res, next) {
  try {
    const products = await models.Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  GET /api/products/:id | Get a single product
================================================= */
router.get("/:id", async function (req, res, next) {
  try {
    const products = await models.Product.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  POST /api/products | Create a product
================================================= */
router.post("/", async function (req, res, next) {
  try {
    const product = await models.Product.create({
      title: req.body.title,
      description: req.body.description,
      pieces: req.body.pieces,
      price: req.body.price,
      unit: req.body.unit,
      CategoryId: req.body.CategoryId,
      SupplierId: req.body.SupplierId,
    });
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  PUT /api/products | Update a product
================================================= */
router.put("/:id", async function (req, res, next) {
  try {
    const product = await models.Product.update(
      {
        title: req.body.title ? req.body.title : "",
        description: req.body.description ? req.body.description : "",
        pieces: req.body.pieces ? req.body.pieces : null,
        price: req.body.price ? req.body.price : null,
        unit: req.body.unit ? req.body.unit : null,
        stock: req.body.stock ? req.body.stock : null,
        CategoryId: req.body.CategoryId ? req.body.CategoryId : null,
        SupplierId: req.body.SupplierId ? req.body.SupplierId : null,
      },
      { where: { id: req.params.id }, returning: true }
    );
    res.status(200).json(product[1][0]);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  DELETE /api/products/:id | Delete a product
================================================= */
router.delete("/:id", async function (req, res, next) {
  try {
    await models.Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json({ message: "Product deleted!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
