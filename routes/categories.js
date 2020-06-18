var express = require("express");
var router = express.Router();
var models = require("../models");

/* =================================================
  GET /api/categories | Get all categories
================================================= */
router.get("/", async function (req, res, next) {
  try {
    const categories = await models.Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  GET /api/categories/:id | Get a single category
================================================= */
router.get("/:id", async function (req, res, next) {
  try {
    const category = await models.Category.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  GET /api/categories/:id/products
  ----
  Get all products from a category
================================================= */
router.get("/:id/products", async function (req, res, next) {
  try {
    const category = await models.Category.findOne({
      where: { id: req.params.id },
    });

    if (!category instanceof models.Category) {
      return res
        .status(404)
        .json({ message: "No category with that id exists." });
    }

    const products = await models.Product.findAll({
      where: {
        CategoryId: category.id,
      },
    });

    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  POST /api/categories | Create a category
================================================= */
router.post("/", async function (req, res, next) {
  try {
    const category = await models.Category.create({
      title: req.body.title,
      description: req.body.description,
    });
    res.status(201).json(category);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  PUT /api/categories/:id | Update a category
================================================= */
router.put("/:id", async function (req, res, next) {
  try {
    const category = await models.Category.update(
      {
        title: req.body.title,
        description: req.body.description,
      },
      { where: { id: req.params.id }, returning: true }
    );
    res.status(200).json(category[1][0]);
  } catch (error) {
    console.log(error);
  }
});

/* =================================================
  DELETE /api/categories/:id | Delete a category
================================================= */
router.delete("/:id", async function (req, res, next) {
  try {
    await models.Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json({ message: "Category deleted!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
