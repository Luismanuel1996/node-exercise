import express from "express";
import Shoe from "../controller/shoes.controller"

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;
    if (id) {
      data = (await Shoe.findOne(parseInt(id)))[0];
    } else {
      data = await Shoe.findAll();
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let newShoe = req.body;
    let data = await Shoe.addOne(newShoe);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let udpatedShoe = req.body;
    let data = await Shoe.updateOne(udpatedShoe, id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data = await Shoe.remove(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
