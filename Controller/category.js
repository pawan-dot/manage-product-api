const category = require("../models/category");

function categoryController() {
  return {
    //handle create data
    async store(req, res, next) {
      try {
        const store = new category(req.body);
        //console.log(req.body)
        const data = await store.save();
        res.status(201).send(data);
      } catch (e) {
        res.status(400).send(e);
      }
    },

    //handle get req to find all data
    async readall(req, res, next) {
      try {
        const readdata = await category.find({});
        res.send(readdata);
      } catch (e) {
        res.status(400).send(e);
      }
    },

    //handle get req to find particuler data
    async readone(req, res, next) {
      try {
        const _id = req.params.id;
        const readonedata = await category.findById({ _id });
        res.send(readonedata);
      } catch (e) {
        res.status(400).send(e);
      }
    },

    //handle patch req to update particuler data
    async update(req, res, next) {
      try {
        const _id = req.params.id;
        const updatedata = await category.findByIdAndUpdate(_id, req.body, {
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
        //const _id=req.params.id;
        const deletetedata = await category.findByIdAndDelete(req.params.id);
        res.send(deletetedata);
      } catch (e) {
        res.status(500).send(e);
      }
    },
  };
}
module.exports = categoryController;
