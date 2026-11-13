const express = require("express");
const app = express();
const port = 3000;

const categoriesRouter = require("./routes/categories");

// middleware
app.use(express.json());

// routes
app.use("/categories", categoriesRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
