const express = require("express");
const { getAllCategories, storeCategory } = require("../controllers/categoryController");
const router = express.Router();


// get all categories
router.get("/", getAllCategories);

// router.post("/", (req, res) => {
//   // logic to create a new category
//   res.json({
//     message: "Category created successfully",
//   });
// });

router.post("/", storeCategory);

router.get("/:name", (req, res) => {
  res.send(`Category details for ${req.params.name}`);
});

// export function router
module.exports = router;
