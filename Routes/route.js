const categoryController = require("../Controller/category");
const productController = require("../Controller/product");

function initRoutes(app) {
  //handdle all category routes
  app.post("/category/create", categoryController().store);

  app.get("/category/read", categoryController().readall);

  //read one datea
  app.get("/category/read/:id", categoryController().readone);

  //patch
  app.patch("/category/update/:id", categoryController().update);

  //delete
  app.delete("/category/delete/:id", categoryController().delete);

  // handdle all product route
  app.post("/product/create", productController().store);

  app.get("/product/read/", productController().readall);

  //read one datea
  app.get("/product/read/:id", productController().readone);

  //patch
  app.patch("/product/update/:id", productController().update);

  //delete
  app.delete("/product/delete/:id", productController().delete);
}

module.exports = initRoutes;
