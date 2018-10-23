const express = require("express");
const { Router } = express;

//get the model
const Item = require("../models/items");

const itemRouter = Router();

//define routes
itemRouter.route("/")
  .get((req, res) => {
    Item.find({}, (err, items) => {
      if(err) {
        res.status(400)
        next (err)
      }
        res.status(200).send(items);
    })
  })

  .post((req, res, next) => {
    const newItem = new Item(req.body);
    newItem.save((err, savedItem) => {
      if(err) next (err){
        res.status(400)
        next (err)
      }
      res.status(201).send(savedItem);
    })
  })

  itemRouter.route("/:id")
  .get((req, res, next) => {
    Item.findById(req.params.id, (err, foundItem) => {
      if (err) {
        res.status(400)
        next (err)
      } else {
        res.status(200).send(foundItem)
      }
    })
  })

  .delete((req, res, next) => {
    Item.findByIdAndDelete(req.params.id, (err) => {
      if (err) {
        res.status(400)
        next (err)
      } else {
        res.status(204).send()
      }
    })
  })

  .put((req, res, next) => {
    Item.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, editedItem) => {
      if (err) {
        res.status(400)
        next (err)
      } else {
        res.status(200).send(editedItem)
      }
    })
  })

  module.exports = itemRouter;
 