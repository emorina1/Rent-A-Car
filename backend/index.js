const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const fs = require("fs");
const { type } = require("os");
const { error } = require("console");

// Middleware
app.use(express.json());
app.use(cors());

// Lidhja me MongoDB
const MONGO_URI = "mongodb+srv://Elsa:Elsa123@cluster0.p0esq.mongodb.net/Rent_a_Car";
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Lidhja me MongoDB u realizua me sukses"))
  .catch((err) => console.error("Gabim në lidhjen me MongoDB:", err));

// Endpoint bazik
app.get("/", (req, res) => {
  res.send("Express App është duke funksionuar");
});

// Krijimi i folderit
if (!fs.existsSync("./upload/images")) {
  fs.mkdirSync("./upload/images", { recursive: true });
}

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage: storage });

// Endpoint për ngarkimin e imazheve
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: 0,
      message: "Asnjë skedar nuk u dërgua në kërkesë",
    });
  }

  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Skema dhe Modeli i Produktit
const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

// Endpoint për shtimin e produktit
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1); // Corrected variable name
    let last_product = last_product_array[0];    // Corrected usage
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  try {
    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    await product.save();
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (err) {
    console.error("Gabim gjatë ruajtjes së produktit:", err);
    res.status(500).json({ success: false, message: "Gabim gjatë ruajtjes së produktit" });
  }
});

// Creating API For deleting Product

app.post('/removeproduct',async(req,res)=>{
  await Product.findOneAndDelete({id:req.body.id});
  console.log("Removed");
  res.json({
    success:true,
    name:req.body.name
  })
})
//Creating API for getting all products
app.get('/allproducts',async(req,res)=>{
  let products= await Product.find({});
  console.log("All Products Fetched");
  res.send(products);
})
//Shchema creating for User model

const Users = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}));

//Creating Endpoint for registering the user
app.post('/signup', async (req, res) => {
  try {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({ success: false, errors: "Existing user found with same email address" });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password, // Sigurohu që ta hash fjalëkalimin për siguri!
      cartData: cart,
    });
    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token, name: user.name });
  } catch (error) {
    console.error("Error in /signup endpoint:", error);
    res.status(500).json({ success: false, errors: "Internal Server Error" });
  }
});
app.post('/login', async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res.json({ success: false, errors: "Wrong Email Id" });
    }

    const passCompare = req.body.password === user.password; // Përdor hashing për siguri!
    if (!passCompare) {
      return res.json({ success: false, errors: "Wrong Password" });
    }

    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token, name: user.name });
  } catch (error) {
    console.error("Error in /login endpoint:", error);
    res.status(500).json({ success: false, errors: "Internal Server Error" });
  }
});

// Schema and Model for booking
const bookingSchema = new mongoose.Schema({
  carModel: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  dateCreated: { type: Date, default: Date.now },
});

// Model for 'bookings' collection
const Booking = mongoose.model('Booking', bookingSchema, 'bookings');  // Collection name 'bookings'

// Endpoint to get all bookings
app.get('/bookings', async (req, res) => {
  try {
    const allBookings = await Booking.find();
    res.json({
      success: true,
      bookings: allBookings,
    });
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).json({
      success: false,
      message: 'Error fetching bookings.',
    });
  }
});

// Endpoint to add a new booking
app.post('/bookings', async (req, res) => {
  const { carModel, fromDate, toDate } = req.body;

  if (!carModel || !fromDate || !toDate) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required.',
    });
  }

  try {
    const newBooking = new Booking({
      carModel,
      fromDate,
      toDate,
    });

    await newBooking.save();

    res.json({
      success: true,
      message: 'Booking added successfully!',
      booking: newBooking,
    });
  } catch (err) {
    console.error('Error creating booking:', err);
    res.status(500).json({
      success: false,
      message: 'Error saving booking.',
    });
  }
});
// Startimi i serverit
app.listen(port, () => {
  console.log(`Serveri po funksionon në http://localhost:${port}`);
});
