import Img1 from '../assets/img1.webp'
import Img2 from '../assets/img2.webp'
import Img3 from '../assets/img3.webp'
import Img4 from '../assets/img4.webp'
import Img5 from '../assets/img5.webp'
import Img6 from '../assets/img6.webp'
import Img7 from '../assets/img7.webp'
import Img8 from '../assets/img8.webp'
import Img9 from '../assets/img9.webp'
import Img10 from '../assets/img10.webp'
import Img11 from '../assets/img11.webp'
import Img12 from '../assets/img12.webp'

import Img13 from '../assets/img13.webp'
import Img14 from '../assets/img14.webp'
import Bgremove from '../assets/posterbgremove.png'

export {
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,

    Bgremove
};

export const productData = [
    {
        id: 1,
        productName: "Silk Saree",
        category: "Women",
        brand: "Ethnic Elegance",
        images: [ Img2,Img1],
        thumbnail: Img6,
        reviewsCount: 8,
        price: 100,
        discountPrice: 50,
        discountPercent: 50,
        description: "Soft silk saree with zari border.",
        detailedDescription: {
            paragraph1: "Discover the ultimate comfort and elegance with this premium silk saree.",
            paragraph2: "Ideal for weddings, festivities, and cultural events."
        },
        colors: [
            { name: "Red", hex: "#EF4444" },
            { name: "Blue", hex: "#3B82F6" },
            { name: "Green", hex: "#22C55E" },
            { name: "Yellow", hex: "#FACC15" }
        ],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        details: {
            fabric: "Pure Kanchipuram Silk",
            fitType: "Traditional Drape",
            length: "6.3 meters",
            sleeveNeckType: "Unstitched Blouse Piece",
            patternPrint: "Temple Border",
            occasionType: "Wedding, Festive",
            washCare: "Dry Clean Only",
            countryOfOrigin: "India",
            deliveryReturns: "Free express shipping. 15-day easy exchange."
        },
        materialWashing: [
            { label: "Material", value: "Mulberry Silk with Zari" },
            { label: "Care Instructions", value: "Dry clean recommended" }
        ],
        sizeShape: [
            { label: "Saree Length", value: "5.5 meters" },
            { label: "Blouse Length", value: "0.8 meters" },
            { label: "Width", value: "45 inches" }
        ],
        "reviews": [
            {
                "id": "rr1",
                "author": "Priya S.",
                "rating": 5,
                "verified": true,
                "comment": "Absolutely stunning saree! The silk quality is exceptional and the colors are even more vibrant in person.",
                "date": "2025-06-20"
            },
            {
                "id": "rr2",
                "author": "Anjali R.",
                "rating": 4,
                "verified": true,
                "comment": "Beautiful saree, though the color was slightly different than expected from the image.",
                "date": "2025-06-18"
            }
        ]
    },

    {
        id: 2,
        productName: "Anarkali Gown",
        category: "Women",
        brand: "Style Diva",
        images: [Img3, Img4],
        thumbnail: Img3,
        reviewsCount: 12,
        price: 1999,
        discountPrice: 1299,
        discountPercent: 35,
        description: "Floor-length Anarkali gown with floral embroidery.",
        detailedDescription: {
            paragraph1: "Stand out with this stunning full-length gown tailored for grand occasions.",
            paragraph2: "Features intricate embroidery and flowy silhouette."
        },
        colors: [
            { name: "Maroon", hex: "#800000" },
            { name: "Navy", hex: "#000080" },
            { name: "Beige", hex: "#F5F5DC" }
        ],
        sizes: ["S", "M", "L", "XL"],
        details: {
            fabric: "Georgette",
            fitType: "Flared Fit",
            length: "Full Length",
            sleeveNeckType: "3/4 Sleeve & Round Neck",
            patternPrint: "Floral Embroidery",
            occasionType: "Festive, Party",
            washCare: "Dry Clean",
            countryOfOrigin: "India",
            deliveryReturns: "7-day return policy."
        },
        materialWashing: [
            { label: "Material", value: "Soft Georgette" },
            { label: "Care Instructions", value: "Dry clean only" }
        ],
        sizeShape: [
            { label: "Gown Length", value: "58 inches" },
            { label: "Sleeves", value: "3/4 Sleeves" },
            { label: "Neck", value: "Round Neck" }
        ],

        "reviews": [
            {
                "id": "rr1",
                "author": "Priya S.",
                "rating": 2,
                "verified": true,
                "comment": "Absolutely stunning saree! The silk quality is exceptional and the colors are even more vibrant in person.",
                "date": "2025-06-20"
            },
            {
                "id": "rr2",
                "author": "Anjali R.",
                "rating": 4,
                "verified": true,
                "comment": "Beautiful saree, though the color was slightly different than expected from the image.",
                "date": "2025-06-18"
            }
        ]
    },

    {
        id: 3,
        productName: "Cotton Kurti",
        category: "Women",
        brand: "Fusion Fab",
        images: [Img5, Img6,Img7, Img8,Img9,],
        thumbnail: Img6,
        reviewsCount: 20,
        price: 799,
        discountPrice: 499,
        discountPercent: 38,
        description: "Breathable straight cotton kurti for daily wear.",
        detailedDescription: {
            paragraph1: "Comfort meets elegance in this handcrafted cotton kurti.",
            paragraph2: "Perfect for office, college or casual wear."
        },
        colors: [
            { name: "Black", hex: "#000000" },
            { name: "White", hex: "#FFFFFF" },
            { name: "Pink", hex: "#FFC0CB" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        details: {
            fabric: "100% Cotton",
            fitType: "Straight Fit",
            length: "Knee Length",
            sleeveNeckType: "3/4 Sleeve & V-Neck",
            patternPrint: "Printed",
            occasionType: "Casual",
            washCare: "Machine Wash",
            countryOfOrigin: "India",
            deliveryReturns: "Free return within 7 days."
        },
        materialWashing: [
            { label: "Material", value: "Pure Cotton" },
            { label: "Care Instructions", value: "Machine wash cold" }
        ],
        sizeShape: [
            { label: "Kurti Length", value: "42 inches" },
            { label: "Sleeves", value: "3/4 Sleeves" },
            { label: "Neck", value: "V-Neck" }
        ],
        "reviews": [
            {
                "id": "rr1",
                "author": "Siya S.",
                "rating": 1,
                "verified": true,
                "comment": "Absolutely stunning saree! The silk quality is exceptional and the colors are even more vibrant in person.",
                "date": "2025-06-20"
            },
            {
                "id": "rr2",
                "author": "Anjali R.",
                "rating": 4,
                "verified": true,
                "comment": "Beautiful saree, though the color was slightly different than expected from the image.",
                "date": "2025-06-18"
            }
        ]
    },

    {
        id: 4,
        productName: "Lehenga Choli Set",
        category: "Women",
        brand: "Riwaayat",
        images: [Img14, Img13, Img11,Img12,Img10],
        thumbnail: Img9,
        reviewsCount: 15,
        price: 3999,
        discountPrice: 2999,
        discountPercent: 25,
        description: "Designer lehenga choli set with mirror work.",
        detailedDescription: {
            paragraph1: "A glamorous lehenga set crafted for weddings and receptions.",
            paragraph2: "Featuring sequin and mirror embroidery."
        },
        colors: [
            { name: "Purple", hex: "#800080" },
            { name: "Peach", hex: "#FFDAB9" },
            { name: "Teal", hex: "#008080" }
        ],
        sizes: ["M", "L", "XL"],
        details: {
            fabric: "Net & Satin",
            fitType: "Flared",
            length: "Full Length",
            sleeveNeckType: "Sleeveless & Scoop Neck",
            patternPrint: "Mirror & Sequin Work",
            occasionType: "Wedding, Reception",
            washCare: "Dry Clean Only",
            countryOfOrigin: "India",
            deliveryReturns: "Return within 3 days."
        },
        materialWashing: [
            { label: "Material", value: "Net with satin lining" },
            { label: "Care Instructions", value: "Dry clean recommended" }
        ],
        sizeShape: [
            { label: "Lehenga Length", value: "42 inches" },
            { label: "Blouse Length", value: "15 inches" },
            { label: "Dupatta", value: "2.25 meters" }
        ],
        reviews: []
    },

    {
        id: 5,
        productName: "Salwar Kameez Set",
        category: "Women",
        brand: "Desi Threads",
        images: [Img3, Img4],
        thumbnail: Img11,
        reviewsCount: 5,
        price: 1299,
        discountPrice: 899,
        discountPercent: 31,
        description: "Printed cotton salwar kameez with dupatta.",
        detailedDescription: {
            paragraph1: "Graceful and stylish salwar kameez perfect for casual and festive wear.",
            paragraph2: "Comes with a matching dupatta and vibrant prints."
        },
        colors: [
            { name: "Olive", hex: "#808000" },
            { name: "Mustard", hex: "#FFDB58" },
            { name: "Rust", hex: "#B7410E" }
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        details: {
            fabric: "Cotton Blend",
            fitType: "Regular Fit",
            length: "Knee Length",
            sleeveNeckType: "Full Sleeve & Boat Neck",
            patternPrint: "Printed",
            occasionType: "Festive, Casual",
            washCare: "Hand Wash",
            countryOfOrigin: "India",
            deliveryReturns: "Return within 5 days of delivery."
        },
        materialWashing: [
            { label: "Material", value: "Cotton blend with printed motifs" },
            { label: "Care Instructions", value: "Hand wash separately" }
        ],
        sizeShape: [
            { label: "Kameez Length", value: "40 inches" },
            { label: "Salwar", value: "Elastic Waist" },
            { label: "Dupatta", value: "2.2 meters" }
        ],
        reviews: []
    }
];






// src/assets/wishlistData.js
export const wishlistData = [
  {
    id: 1,
    name: "Eco-Friendly Water Bottle",
    price: 25.00,
    imageUrl: "https://via.placeholder.com/150",
    description: "Stay hydrated with this stylish and sustainable water bottle.",
  },
  {
    id: 3,
    name: "Reusable Shopping Bag",
    price: 12.00,
    imageUrl: "https://via.placeholder.com/150",
    description: "Reduce plastic waste with this durable and foldable shopping bag.",
  },
  // Add more wishlist items here
];
