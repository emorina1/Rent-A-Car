const port = 4000;
const express = require("express");
const app = express();
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecommerc'
});

db.connect((err) => {
  if (err) {
    console.error('Nuk mund të lidhet me databazën: ', err);
    return;
  }
  console.log('I lidhur me databazën MySQL');
});

// API bazike
app.get("/", (req, res) => {
  res.send("Express App është duke funksionuar");
});

// Engine për ruajtjen e imazheve
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage });

app.use('/images', express.static('upload/images'));
app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// Endpoint për shtimin e produkteve
app.post('/addproduct', (req, res) => {
  const { name, image, category, new_price, old_price } = req.body;

  // Përdorim AUTO_INCREMENT në databazë për ID-të
  const query = `INSERT INTO products (name, image, category, new_price, old_price, date, available) 
                 VALUES (?, ?, ?, ?, ?, NOW(), ?)`;

  db.query(query, [name, image, category, new_price, old_price, true], (err, result) => {
    if (err) {
      console.error('Gabim gjatë shtimit të produktit: ', err);
      return res.status(500).json({ success: false, error: err });
    }
    console.log("Produkti u shtua me sukses");
    res.json({ success: true, name });
  });
});

app.post('/removeproduct', (req, res) => {
    const { id } = req.body;
  
    if (!id) {
      return res.status(400).json({ success: false, message: 'ID e produktit është e domosdoshme' });
    }
  
    const query = 'DELETE FROM products WHERE id = ?';
  
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Gabim gjatë fshirjes së produktit: ', err);
        return res.status(500).json({ success: false, error: err });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ success: false, message: 'Produkti nuk është gjetur' });
      }
  
      console.log("Produkti u fshi me sukses");
      res.json({
        success: true,
        id
      });
    });
  });
  
  // Krijimi i API per marrjen e të gjitha produkteve
app.get('/allproducts', (req, res) => {
    const query = 'SELECT * FROM products';
    
    db.query(query, (err, results) => {
      if (err) {
        console.error('Gabim gjatë marrjes së produkteve: ', err);
        return res.status(500).json({ success: false, error: err });
      }
      
      console.log("Të gjitha produktet janë marrë me sukses");
      res.json(results);
    });
  });
  

// Nisja e serverit
app.listen(port, (error) => {
  if (!error) {
    console.log("Serveri po funksionon në portin " + port);
  } else {
    console.log("Gabim: " + error);
  }
});
