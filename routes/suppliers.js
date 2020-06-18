var express = require("express");
var router = express.Router();
var models = require("../models");

/* =================================================
  GET /api/suppliers | Get all suppliers
================================================= */
router.get("/", async function (req, res, next) {
  try {
    const suppliers = await models.Supplier.findAll();
    res.status(200).json(suppliers);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  GET /api/suppliers/:id | Get a single supplier
================================================= */
router.get("/:id", async function (req, res, next) {
  try {
    const supplier = await models.Supplier.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(supplier);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  GET /api/suppliers/:id/products
  ----
  Get all products from a supplier
================================================= */
router.get("/:id/products", async function (req, res, next) {
  try {
    const products = await models.Product.findAll({
      where: {
        SupplierId: req.params.id,
      },
    });

    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  POST /api/suppliers | Create a supplier
================================================= */
router.post("/", async function (req, res, next) {
  try {
    const supplier = await models.Supplier.create({
      name: req.body.name,
      website: req.body.website,
    });
    res.status(201).json(supplier);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  PUT /api/suppliers/:id | Update a supplier
================================================= */
router.put("/:id", async function (req, res, next) {
  try {
    const supplier = await models.Supplier.update(
      {
        name: req.body.name,
        website: req.body.website,
      },
      { where: { id: req.params.id }, returning: true }
    );
    res.status(200).json(supplier[1][0]);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  DELETE /api/suppliers/:id | Delete a supplier
================================================= */
router.delete("/:id", async function (req, res, next) {
  try {
    await models.Supplier.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json({ message: "Supplier deleted!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
