const { Category } = require("../models");

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

exports.storeCategory = async (req, res) => {
  // let name = req.body.name;
  // let description = req.body.description;

  try {
    let { nama, deskripsi } = req.body;

    const  newCategory = await Category.create({
      nama: nama,
      deskripsi: deskripsi,
    });

    res.status(201).json({
      status: "success",
      data : newCategory,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};
