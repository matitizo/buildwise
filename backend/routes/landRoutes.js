const express = require("express");
const Land = require("../models/Land");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const lands = await Land.find().sort({ createdAt: -1 });
    res.json(lands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const land = await Land.create({
      title: req.body.title,
      location: req.body.location,
      size: req.body.size,
      price: Number(req.body.price),
      status: req.body.status || "Iragurishwa",
      image: req.body.image || "🌄",
    });

    res.json(land);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Land.findByIdAndDelete(req.params.id);
    res.json({ message: "Land deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;