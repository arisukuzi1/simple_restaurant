const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const port = 3000;

const categoriesRouter = require("./routes/categories");

dotenv.config();
app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(`Request URL: ${req.url}`);
  console.log(`Request method: ${req.method}`);
  next();
});

// routes
app.use("/categories", categoriesRouter);

const PORT = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
