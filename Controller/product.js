const product = require("../models/product");
const category = require("../models/category");
function productController() {
  return {
    //handle post req
    async store(req, res, next) {
      try {
        const store = new product(req.body);
        const data = await store.save();
        //console.log(data)
        res.status(201).send(data);
      } catch (e) {
        res.status(400).send(e);
      }
    },

    //handle get req to find all data
    async readall(req, res, next) {
      try {
        const readdata = await product.find({});
        res.send(readdata);
      } catch (e) {
        res.status(400).send(e);
      }
    },

    //handle get req to find particuler product
    async readone(req, res, next) {
      try {
        const _id = req.params.id;
        const readonedata = await product.findById(_id);
        res.send(readonedata);
      } catch (e) {
        res.status(400).send(e);
      }
    },

    //handle patch req to update particuler data
    async update(req, res, next) {
      try {
        const _id = req.params.id;
        const updatedata = await product.findByIdAndUpdate(_id, req.body, {
          new: true,
        });
        res.send(updatedata);
      } catch (e) {
        res.status(500).send(e);
      }
    },

    //handle Delete req to delete particuler data
    async delete(req, res, next) {
      try {
        const deletetedata = await product.findByIdAndDelete(req.params.id);
        res.send(deletetedata);
      } catch (e) {
        res.status(500).send(e);
      }
    },
  };
}

module.exports = productController;
