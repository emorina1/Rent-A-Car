import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Rent a Car",
    category: "skincare",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
    description: "A high-quality skincare product to hydrate your skin."  ,
    year: 2022,
    button: "Rent Now"// Përshkrimi i produktit
  },
  {
    id: 2,
    name: "Rent a Car",
    category: "skincare",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 3,
    name: "Rent a Car",
    category: "skincare",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
    description: "A high-quality skincare product to hydrate your skin.",
    year: 2022  // Përshkrimi i produktit
  },
  {
    id: 4,
    name: "Rent a Car",
    category: "skincare",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 5,
    name: "Aesop Product",
    category: "skincare",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin."  ,
    year: 2022// Përshkrimi i produktit
  },
  {
    id: 6,
    name: "Aesop Product",
    category: "skincare",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin."  ,
    year: 2022// Përshkrimi i produktit
  },
  {
    id: 7,
    name: "Aesop Product",
    category: "skincare",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin.",
    year: 2022  // Përshkrimi i produktit
  },
  {
    id: 8,
    name: "Aesop Product",
    category: "skincare",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 9,
    name: "Aesop Product",
    category: "skincare",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 10,
    name: "Aesop Product",
    category: "skincare",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 11,
    name: "Aesop Product",
    category: "skincare",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 12,
    name: "Aesop Product",
    category: "skincare",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin.",
    year: 2022  // Përshkrimi i produktit
  },
  {
    id: 13,
    name: "Aesop Product",
    category: "hand",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin.",
    year: 2022  // Përshkrimi i produktit
  },
  {
    id: 14,
    name: "Aesop Product",
    category: "hand",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 15,
    name: "Aesop Product",
    category: "hand",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5, 
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 16,
    name: "Aesop Product",
    category: "hand",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 17,
    name: "Aesop Product",
    category: "hand",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 18,
    name: "Aesop Product",
    category: "hand",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin."  ,
    year: 2022// Përshkrimi i produktit
  },
  {
    id: 19,
    name: "Aesop Product",
    category: "hand",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 20,
    name: "Aesop Product",
    category: "hand",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 21,
    name: "Aesop Product",
    category: "hand",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 22,
    name: "Aesop Product",
    category: "hand",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin."  ,
    year: 2022// Përshkrimi i produktit
  },
  {
    id: 23,
    name: "Aesop Product",
    category: "hand",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin.",
    year: 2022  // Përshkrimi i produktit
  },
  {
    id: 24,
    name: "Aesop Product",
    category: "hand",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin."  ,
    year: 2022// Përshkrimi i produktit
    
  },
  {
    id: 25,
    name: "Aesop Product",
    category: "wash",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin.",
    year: 2022  // Përshkrimi i produktit
  },
  {
    id: 26,
    name: "Aesop Product",
    category: "wash",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 27,
    name: "Aesop Product",
    category: "wash",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 28,
    name: "Aesop Product",
    category: "wash",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 29,
    name: "Aesop Product",
    category: "wash",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin."  ,
    year: 2022// Përshkrimi i produktit
  },
  {
    id: 30,
    name: "Aesop Product",
    category: "wash",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin."  ,
    year: 2022// Përshkrimi i produktit
  },
  {
    id: 31,
    name: "Aesop Product",
    category: "wash",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 32,
    name: "Aesop Product",
    category: "wash",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 33,
    name: "Aesop Product",
    category: "wash",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin.",
    year: 2022  // Përshkrimi i produktit
  },
  {
    id: 34,
    name: "Aesop Product",
    category: "wash",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin." ,
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 35,
    name: "Aesop Product",
    category: "wash",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin.", 
    year: 2022 // Përshkrimi i produktit
  },
  {
    id: 36,
    name: "Rent Product",
    category: "wash",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A high-quality skincare product to hydrate your skin."  ,// Përshkrimi i produktit
    year: 2022
    
  },
];

export default all_product;