const express = require("express");
const { getAllCategories, storeCategory } = require("../controllers/categoryController");
const router = express.Router();

// routes
// router.get("/", (req, res) => {
//   res.json({
//     message: "List of categories",
//     data: [
//       { id: 1, name: "Appetizers" },
//       { id: 2, name: "Main Course" },
//       { id: 3, name: "Desserts" },
//       { id: 4, name: "Beverages" },
//     ],
//   });
// });

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
