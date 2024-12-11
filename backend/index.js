const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

// Middleware
app.use(express.json());
app.use(cors());

// Lidhja me MongoDB
const MONGO_URI = "mongodb+srv://Elsa:Elsa123@cluster0.p0esq.mongodb.net/YourDatabaseName?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Lidhja me MongoDB u realizua me sukses"))
  .catch((err) => console.error("Gabim në lidhjen me MongoDB:", err));

// Endpoint bazik
app.get("/", (req, res) => {
  res.send("Express App është duke funksionuar");
});

// Kontrollo dhe krijo dosjen nëse nuk ekziston
const uploadPath = path.join(__dirname, "upload/images");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Konfigurimi i Multer për ruajtjen e imazheve
const storage = multer.diskStorage({
  destination: uploadPath,
  filename: (req, file, cb) => {
    // Emri i skedarit bazohet në fushën e ngarkuar dhe kohën aktuale
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Kjo kufizon madhësinë e skedarëve deri në 10MB
}).single("product");

// Endpoint për ngarkimin e imazheve
app.post("/upload", (req, res) => {
  console.log("Kërkesa e mbërritur:", req.body); // Kjo do të tregojë të dhënat që janë dërguar

  upload(req, res, (err) => {
    if (err) {
      console.error("Gabim gjatë ngarkimit të skedarit:", err);
      return res.status(500).json({ success: 0, message: "Gabim në ngarkimin e skedarit!" });
    }

    // Verifikoni nëse skedari është ngarkuar
    if (!req.file) {
      console.error("Skedari mungon!"); // Shtoni një log në rast se nuk ka skedar
      return res.status(400).json({ success: 0, message: "Skedari mungon!" });
    }

    console.log("Skedari i ngarkuar:", req.file); // Kontrollo nëse skedari është i ngarkuar

    res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`,
    });
  });
});

// Endpoint për shërbimin e imazheve të ngarkuara
app.use("/images", express.static(uploadPath));

// Error handling për gabimet e mundshme
app.use((err, req, res, next) => {
  console.error("Gabimi:", err); // Ky log do të ndihmojë në kapjen e ndonjë gabimi tjetër të mundshëm
  res.status(500).json({ success: 0, message: "Gabim në server!" });
});

// Startimi i serverit
app.listen(port, () => {
  console.log(`Serveri po funksionon në http://localhost:${port}`);
});
