//assets.js

// src/assets/assets.js

import Img1 from './img1.webp'
import Img2 from './img2.webp'
import Img3 from './img3.webp'
import Img4 from './img4.webp'
import Img5 from './img5.webp'
import Img6 from './img6.webp'
import Img7 from './img7.webp'
import Img8 from './img8.webp'
import Img9 from './img9.webp'
import Img10 from './img10.webp'
import Img11 from './img11.webp'
import Img12 from './img12.webp'
import Img13 from './img13.webp'
import Img14 from './img14.webp'

import imageC1 from './imageC1.webp'
import imageC2 from './imageC2.webp'
import imageC3 from './imageC3.jpg'
import imageC4 from './imageC4.jpg'
import imageC5 from './imageC5.jpg'
import imageC6 from './imageC6.jpg'
import imageC7 from './imageC7.jpg'
import imageC8 from './imageC8.jpg'
import imageC9 from './imageC9.jpg'
import imageC10 from './imageC10.jpg'
import imageC11 from './imageC11.jpg'
import imageC12 from './imageC12.jpg'

import Bgremove from './posterbgremove.png'
import Logo from './trendikala_logo_bg.png'

// Export as one object
export {
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8,
  Img9, Img10, Img11, Img12, Img13, Img14,
  imageC1, imageC2, imageC3, imageC4, imageC5, imageC6,
  imageC7, imageC8, imageC9, imageC10, imageC11, imageC12,
  Bgremove,
  Logo
}




// export const productData = [
//   {
//     id: 1,
//     imageUrl: Img6,
//     category: "Women",
//     name: "Embroidered Kurta Set",
//     actualPrice: "₹2,999",
//     discountPrice: "₹99",
//     description: "Elegant kurta set with intricate thread work."
//   },
//   {
//     id: 2,
//     imageUrl: Img2,
//     category: "Women",
//     name: "Traditional Lehenga",
//     actualPrice: "₹6,999",
//     discountPrice: "₹5,999",
//     description: "Classic A-line lehenga perfect for weddings."
//   },
//   {
//     id: 3,
//     imageUrl: Img5,
//     category: "Women",
//     name: "Silk Saree",
//     actualPrice: "₹3,999",
//     discountPrice: "₹3,299",
//     description: "Soft silk saree with zari border."
//   },
//   {
//     id: 4,
//     imageUrl: Img8,
//     category: "Women",
//     name: "Royal Sherwani",
//     actualPrice: "₹8,999",
//     discountPrice: "₹7,499",
//     description: "Heavily embroidered sherwani for special occasions."
//   },
//   {
//     id: 5,
//     imageUrl:Img9,
//     category: "Women",
//     name: "Festive Kurta Pyjama",
//     actualPrice: "₹2,499",
//     discountPrice: "₹1,999",
//     description: "Lightweight and comfortable cotton set."
//   },
//   {
//     id: 6,
//     imageUrl: Img10,
//     category: "Women",
//     name: "Flared Anarkali",
//     actualPrice: "₹4,499",
//     discountPrice: "₹3,899",
//     description: "Modern flared anarkali with mirror work."
//   },
//   {
//     id: 7,
//     imageUrl: Img11,
//     category: "Women",
//     name: "Nehru Jacket Set",
//     actualPrice: "₹3,499",
//     discountPrice: "₹2,799",
//     description: "Stylish jacket set with modern fit."
//   },
//   {
//     id: 8,
//     imageUrl: Img1,
//     category: "Women",
//     name: "Printed Palazzo Set",
//     actualPrice: "₹2,799",
//     discountPrice: "₹2,299",
//     description: "Trendy palazzo suit with pastel print."
//   },
//   {
//     id: 9,
//     imageUrl: Img2,
//     category: "Women",
//     name: "Pathani Suit",
//     actualPrice: "₹3,499",
//     discountPrice: "₹2,999",
//     description: "Classic pathani with a modern twist."
//   },
//   {
//     id: 10,
//     imageUrl: Img3,
//     category: "Women",
//     name: "Evening Gown",
//     actualPrice: "₹5,299",
//     discountPrice: "₹4,499",
//     description: "Elegant evening wear with a fusion touch."
//   },

// ];

export const carouselSlides = [
  {
    image: imageC12,
    title: "Summer Styles",
    description: "Bright and breezy looks for sun-soaked days.",
  },
  {
    image: imageC2,
    title: "Rooted in Heritage, Styled for Today.",
    description: "Stay dry and stylish with seasonal wear.",
  },
  {
    image: imageC1,
    title: "Festive Ready",
    description: "Celebrate traditions in modern fashion.",
  },
];


// newArrivalsData.js

export const newArrivalsItems = [
  {
    imageUrl: imageC5,
    discount: 'UP TO 50% OFF',
    description: 'on your favorite styles – elegant dresses to comfy casuals!',
    bgColor: '#E8E0D7',
  },
  {
    imageUrl: imageC6,
    discount: 'SAVE 25%',
    description: 'Explore our latest collection of chic outfits!',
    bgColor: '#D7E0E8',
  },
  {
    imageUrl: imageC7,
    discount: 'FLASH SALE!',
    description: "Grab your summer essentials before they're gone!",
    bgColor: '#E0D7E8',
  },
];


// src/assets/outfitData.js

export const outfitGridItems = {
  mainItem: {
    title: "Color of Summer Outfit ",
    imageUrl: imageC7,
    buttonText: "VIEW COLLECTIONS",
  },
  otherItems: [
    {
      id: 1,
      title: "New",
      imageUrl: imageC8,
    },
    {
      id: 2,
      title: "New",
      imageUrl: imageC9,
    },
    {
      id: 3,
      title: "New",
      imageUrl: imageC10,
    },
    {
      id: 4,
      title: "New",
      imageUrl: imageC6,
    },
    {
      id: 5,
      title: "New",
      imageUrl: imageC11,
    },
    {
      id: 6,
      title: "New",
      imageUrl: Img5,
    },
  ],
};



// Product details 
const productDetails = {
  productName: "Saree ",
  brand: "Zalando Sports",
  price: "₹79.99",
  availableSizes: ["XS", "S", "M", "L", "XL"],
  color: "Black",
  fabric: "Polyamide, Elastane, Polyester",
  fitType: "Regular Fit",
  length: "Short",
  sleeveNeckType: "Short Sleeve & Round Neck",
  patternPrint: "Solid",
  occasionType: "Sport, Casual",
  washCare: "Machine wash at 40 °C, do not tumble dry. Dry clean allowed. Machine wash on gentle cycle",
  countryOfOrigin: "Germany",
  deliveryReturns: "Free delivery within 3-5 business days. Easy 30-day returns.",
  customerRatings: "4.5 out of 5 stars (120 reviews)",

  description: {
    paragraph1: "Discover the ultimate comfort and style with our new Sportswear Tracksuit...",
    paragraph2: "Stay ahead of fashion trends and express your unique style...",
  },
  materialWashing: [
    { label: 'Material', value: '80% polyamide, 20% elastane' },
    { label: 'Top part material', value: '87% polyester, 13% elastane' },
    { label: 'Structure', value: 'Mesh, jersey' },
    { label: 'Care instructions', value: 'Machine wash at 40 °C, do not tumble dry...' },
  ],
  sizeShape: [
    { label: 'Model height', value: 'Our model is 186 cm tall and is wearing size M' },
    { label: 'Length', value: 'Short' },
    { label: 'Inner leg length', value: '27 cm (Size M)' },
    { label: 'Outer leg length', value: '44 cm (Size M)' },
  ],
  reviewsCount: 8,
};

export default productDetails;


