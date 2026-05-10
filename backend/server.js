const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   ROUTES
========================= */

const landRoutes = require("./routes/landRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

app.use("/api/lands", landRoutes);
app.use("/api/upload", uploadRoutes);

/* =========================
   STATIC UPLOADS
========================= */

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

/* =========================
   FRONTEND BUILD
========================= */

const frontendPath = path.join(
  __dirname,
  "../frontend/dist"
);

app.use(express.static(frontendPath));

app.get(/(.*)/, (req, res) => {
  res.sendFile(
    path.join(frontendPath, "index.html")
  );
});

/* =========================
   MONGODB CONNECT
========================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.log("Mongo Error ❌");
    console.log(err);
  });

/* =========================
   SERVER
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server iri gukora kuri port ${PORT} 🚀`);
});