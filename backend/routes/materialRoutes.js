const express = require("express");
const router = express.Router();

// Dummy Materials
let materials = [
  {
    id: 1,
    name: "Sima",
    price: "12,000 Frw",
    stock: 100,
  },
  {
    id: 2,
    name: "Amabati",
    price: "18,000 Frw",
    stock: 50,
  },
];

// GET ALL MATERIALS
router.get("/", (req, res) => {
  res.json(materials);
});

// GET SINGLE MATERIAL
router.get("/:id", (req, res) => {
  const material = materials.find(
    (m) => m.id === parseInt(req.params.id)
  );

  if (!material) {
    return res.status(404).json({
      message: "Material ntabwo yabonetse",
    });
  }

  res.json(material);
});

// CREATE MATERIAL
router.post("/", (req, res) => {
  const newMaterial = {
    id: materials.length + 1,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
  };

  materials.push(newMaterial);

  res.status(201).json({
    message: "Material yongewemo neza ✅",
    material: newMaterial,
  });
});

// UPDATE MATERIAL
router.put("/:id", (req, res) => {
  const material = materials.find(
    (m) => m.id === parseInt(req.params.id)
  );

  if (!material) {
    return res.status(404).json({
      message: "Material ntabwo yabonetse",
    });
  }

  material.name = req.body.name || material.name;
  material.price = req.body.price || material.price;
  material.stock = req.body.stock || material.stock;

  res.json({
    message: "Material yahinduwe neza ✅",
    material,
  });
});

// DELETE MATERIAL
router.delete("/:id", (req, res) => {
  materials = materials.filter(
    (m) => m.id !== parseInt(req.params.id)
  );

  res.json({
    message: "Material yasibwe neza 🗑️",
  });
});

module.exports = router;