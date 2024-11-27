// importimi i imazheve të makinave
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
    name: "Luxury Sedan Car",
    category: "sedan",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
    description: "Rent this luxury sedan for a smooth and comfortable ride.",
    year: 2022,
    button: "Rent Now"
  },
  {
    id: 2,
    name: "High-Speed Sports Car",
    category: "sports",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Experience the thrill with our high-performance sports car.",
    year: 2022
  },
  {
    id: 3,
    name: "Family SUV",
    category: "suv",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
    description: "Perfect for family trips with ample space and comfort.",
    year: 2022
  },
  {
    id: 4,
    name: "Luxury Sports Car",
    category: "luxury",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
    description: "Rent this luxurious sports car for a premium experience.",
    year: 2022
  },
  {
    id: 5,
    name: "Convertible Car",
    category: "convertible",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Enjoy the open road with this stylish convertible.",
    year: 2022
  },
  {
    id: 6,
    name: "Eco-Friendly Electric Car",
    category: "electric",
    image: p6_img,
    new_price: 75.0,
    old_price: 110.5,
    description: "Rent an electric car for a sustainable and smooth ride.",
    year: 2022
  },
  {
    id: 7,
    name: "Luxury Sedan",
    category: "sedan",
    image: p7_img,
    new_price: 60.0,
    old_price: 90.0,
    description: "A premium sedan car for luxury and comfort.",
    year: 2022
  },
  {
    id: 8,
    name: "Premium Sports Car",
    category: "sports",
    image: p8_img,
    new_price: 95.0,
    old_price: 140.0,
    description: "Drive in style with this high-end sports car.",
    year: 2022
  },
  {
    id: 9,
    name: "Luxury SUV",
    category: "suv",
    image: p9_img,
    new_price: 80.0,
    old_price: 130.0,
    description: "A luxury SUV for both style and performance.",
    year: 2022
  },
  {
    id: 10,
    name: "Luxury Sports Car",
    category: "luxury",
    image: p10_img,
    new_price: 150.0,
    old_price: 200.5,
    description: "A premium sports car for the discerning driver.",
    year: 2022
  },
  {
    id: 11,
    name: "High-End Sedan",
    category: "sedan",
    image: p11_img,
    new_price: 70.0,
    old_price: 110.5,
    description: "A high-end sedan for those who prefer elegance and comfort.",
    year: 2022
  },
  {
    id: 12,
    name: "Classic Convertible",
    category: "convertible",
    image: p12_img,
    new_price: 95.0,
    old_price: 145.0,
    description: "Rent this classic convertible for an unforgettable ride.",
    year: 2022
  },
  {
    id: 13,
    name: "Electric Sedan",
    category: "electric",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "An electric sedan for an eco-conscious yet luxurious ride.",
    year: 2022
  },
  {
    id: 14,
    name: "Luxury SUV",
    category: "suv",
    image: p14_img,
    new_price: 90.0,
    old_price: 130.0,
    description: "A top-of-the-line luxury SUV for a smooth drive.",
    year: 2022
  },
  {
    id: 15,
    name: "Electric SUV",
    category: "electric",
    image: p15_img,
    new_price: 100.0,
    old_price: 140.5,
    description: "Experience power and eco-friendliness with this electric SUV.",
    year: 2022
  },
  {
    id: 16,
    name: "Sporty Convertible",
    category: "convertible",
    image: p16_img,
    new_price: 110.0,
    old_price: 160.5,
    description: "Drive through the city in a stylish sporty convertible.",
    year: 2022
  },
  {
    id: 17,
    name: "Sedan for Rent",
    category: "sedan",
    image: p17_img,
    new_price: 55.0,
    old_price: 85.0,
    description: "A comfortable sedan ideal for city driving.",
    year: 2022
  },
  {
    id: 18,
    name: "Sports Car Experience",
    category: "sports",
    image: p18_img,
    new_price: 125.0,
    old_price: 180.0,
    description: "Feel the thrill with our high-speed sports car rental.",
    year: 2022
  },
  {
    id: 19,
    name: "Luxury Electric Car",
    category: "electric",
    image: p19_img,
    new_price: 120.0,
    old_price: 160.0,
    description: "The perfect fusion of luxury and sustainability in an electric car.",
    year: 2022
  },
  {
    id: 20,
    name: "Convertible Luxury Ride",
    category: "convertible",
    image: p20_img,
    new_price: 130.0,
    old_price: 175.0,
    description: "Enjoy a luxurious convertible ride with the top down.",
    year: 2022
  },
  {
    id: 21,
    name: "SUV Comfort",
    category: "suv",
    image: p21_img,
    new_price: 95.0,
    old_price: 140.0,
    description: "Rent an SUV for a spacious and comfortable family experience.",
    year: 2022
  },
  {
    id: 22,
    name: "Luxury Electric SUV",
    category: "electric",
    image: p22_img,
    new_price: 140.0,
    old_price: 190.0,
    description: "A luxury electric SUV that combines power, elegance, and sustainability.",
    year: 2022
  },
  {
    id: 23,
    name: "Premium Sports Coupe",
    category: "sports",
    image: p23_img,
    new_price: 120.0,
    old_price: 160.0,
    description: "A premium sports coupe with a dynamic performance.",
    year: 2022
  },
  {
    id: 24,
    name: "Convertible Sports Car",
    category: "convertible",
    image: p24_img,
    new_price: 115.0,
    old_price: 170.0,
    description: "A stylish convertible sports car for a thrilling ride.",
    year: 2022
  },
  {
    id: 25,
    name: "High-End Family SUV",
    category: "suv",
    image: p25_img,
    new_price: 95.0,
    old_price: 140.5,
    description: "An elegant and spacious SUV perfect for family vacations.",
    year: 2022
  },
  {
    id: 26,
    name: "Sporty Luxury Sedan",
    category: "sedan",
    image: p26_img,
    new_price: 85.0,
    old_price: 130.0,
    description: "A sporty luxury sedan designed for a smooth driving experience.",
    year: 2022
  },
  {
    id: 27,
    name: "Electric Luxury Sedan",
    category: "electric",
    image: p27_img,
    new_price: 130.0,
    old_price: 180.0,
    description: "Experience luxury and sustainability in this electric sedan.",
    year: 2022
  },
  {
    id: 28,
    name: "Classic Luxury Sedan",
    category: "sedan",
    image: p28_img,
    new_price: 90.0,
    old_price: 135.0,
    description: "A classic sedan offering timeless luxury and performance.",
    year: 2022
  },
  {
    id: 29,
    name: "Electric Convertible",
    category: "convertible",
    image: p29_img,
    new_price: 150.0,
    old_price: 210.0,
    description: "A modern electric convertible for eco-conscious driving with style.",
    year: 2022
  },
  {
    id: 30,
    name: "Luxury SUV",
    category: "suv",
    image: p30_img,
    new_price: 125.0,
    old_price: 180.0,
    description: "A luxury SUV with space and power for all your adventures.",
    year: 2022
  },
  {
    id: 31,
    name: "Sporty Luxury Coupe",
    category: "sports",
    image: p31_img,
    new_price: 110.0,
    old_price: 155.0,
    description: "A sporty luxury coupe combining performance with sleek design.",
    year: 2022
  },
  {
    id: 32,
    name: "All-Electric SUV",
    category: "electric",
    image: p32_img,
    new_price: 140.0,
    old_price: 190.0,
    description: "An all-electric SUV offering impressive range and efficiency.",
    year: 2022
  },
  {
    id: 33,
    name: "Luxury Sport Sedan",
    category: "sedan",
    image: p33_img,
    new_price: 95.0,
    old_price: 130.0,
    description: "A luxury sport sedan with exceptional performance and comfort.",
    year: 2022
  },
  {
    id: 34,
    name: "Sporty Electric Sedan",
    category: "electric",
    image: p34_img,
    new_price: 120.0,
    old_price: 165.0,
    description: "A sporty electric sedan for those who want speed and sustainability.",
    year: 2022
  },
  {
    id: 35,
    name: "Luxury Convertible",
    category: "convertible",
    image: p35_img,
    new_price: 140.0,
    old_price: 200.0,
    description: "A convertible car offering both luxury and open-air driving.",
    year: 2022
  },
  {
    id: 36,
    name: "Top Performance SUV",
    category: "suv",
    image: p36_img,
    new_price: 135.0,
    old_price: 190.0,
    description: "A top-tier performance SUV with powerful capabilities.",
    year: 2022
  }
];



export default all_product;
