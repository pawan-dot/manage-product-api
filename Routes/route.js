const mongoose = require("mongoose");
const categoryController = require("../Controller/category");
const productController = require("../Controller/product");
function initRoutes(app) {

  //handdle all category routes
  app.post("/create", categoryController().store);
 
  app.get("/readall", categoryController().readall);
  //read one datea
  app.get("/readone/:id", categoryController().readone);
  //patch
  app.patch("/update/:id", categoryController().update);
  //delete 
  app.delete("/delete/:id", categoryController().delete);


  // handdle all product route 
  app.post("/createpro", productController().store);
 
  app.get("/readallpro", productController().readall);
  //read one datea
  app.get("/readonepro/:id", productController().readone);
  //patch
  app.patch("/updatepro/:id", productController().update);
  //delete 
  app.delete("/deletepro/:id", productController().delete);

  
}
module.exports = initRoutes;
