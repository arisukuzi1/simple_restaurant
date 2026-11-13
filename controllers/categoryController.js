exports.getAllCategories = (req, res) => {
  // Menampilkan waktu request
  console.log(`Request Time: ${req.requestTime}`);
  res.status(200).json({
    status: "success",
    data: [
      {
        id: 1,
        name: "Appetizers",
      },
      {
        id: 2,
        name: "Main Course",
      },
      {
        id: 3,
        name: "Desserts",
      },
      {
        id: 4,
        name: "Beverages",
      },
    ],
  });
};

exports.storeCategory = (req, res) => {
  let name = req.body.name;
  let description = req.body.description;

  if (name && description) {
    return res.status(400).json({
      status: "error",
      message: "Name and description are required",
    });
  }

  return res.status(201).json({
    data: {
      name: name,
      description: description,
    },
    status: "success",
    message: "Category created successfully",
  });
};
