import express from "express";
import shoeRouter from "./shoes.routes"


const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/shoes", shoeRouter);

export default router;
