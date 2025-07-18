// src/data/menu.js

// ========================== 1. Chinese & Indo-Chinese ======================
const chinese = [
  { id: 1, name: "Veg Singapore", price: 120 },
  { id: 2, name: "Veg Noodles", price: 100 },
  { id: 3, name: "Veg Fried Rice", price: 130 },
  { id: 4, name: "Veg Manchurian", price: 130 },
  { id: 5, name: "Chili Paneer", price: 150 },
];

// ========================== 2. Paneer Specials ======================
const paneer = [
  { id: 6, name: "Royal Paneer", price: 140 },
  { id: 7, name: "Paneer Handi", price: 150 },
  { id: 8, name: "Paneer Chatpata", price: 150 },
  { id: 9, name: "Butter Paneer Masala", price: 150 },
  { id: 10, name: "Paneer Do Pyaza", price: 150 },
  { id: 11, name: "Paneer Punjabi", price: 160 },
  { id: 12, name: "Paneer Kadai", price: 160 },
  { id: 13, name: "Paneer Tikka (Fry Masala)", price: 210 },
  { id: 14, name: "Paneer Bhurji", price: 210 },
];

// ========================== 3. Delicious Vegetables ======================
const vegCurries = [
  "Potato Tomato", "Veg Keema", "Baingan Bharta", "Aloo Jeera",
  "Dum Aloo", "Aloo Matar", "Sev Tomato", "Dahi Tadka",
  "Mix Veg", "Malai Kofta", "Bhindi Gravy", "Veg Kolhapuri",
  "Chana Masala", "Milk Sev", "Sev Mawa", "Baingan Masala",
  "Methi Malai Matar", "Sev Masala", "Mushroom Masala", "Aloo Onion",
  "Bhindi Dry", "Stuffed Capsicum", "Aloo Gobi Matar", "Stuffed Tomato",
  "Sev Onion", "Cashew", "Sev Tadka", "Navratan Korma", "Cashew Milan"
].map((name, idx) => ({
  id: 15 + idx,
  name,
  price: [100, 110, 100, 100, 130, 100, 110, 130, 110, 140,
    110, 140, 110, 120, 140, 110, 140, 120, 140, 120,
    120, 150, 130, 150, 130, 150, 130, 170, 200][idx],
  tag: "veg"
}));

// ========================== 4. Soups ======================
const soups = [
  { id: 44, name: "Tomato Soup", price: 50 },
  { id: 45, name: "Veg Soup", price: 60 },
  { id: 46, name: "Mushroom Soup", price: 70 },
];

// ========================== 5. Rice & Noodles ======================
const riceNoodles = [
  { id: 47, name: "Veg Singapore", price: 120 },
  { id: 48, name: "Veg Noodles", price: 100 },
  { id: 49, name: "Veg Fried Rice", price: 130 },
];

// ========================== 6. Breads (Gar-ma Garam) ======================
const breads = [
  { id: 50, name: "Tandori Roti", price: 10 },
  { id: 51, name: "Tandori Butter Roti", price: 13 },
  { id: 52, name: "Corn Roti", price: 20 },
  { id: 53, name: "Missi Roti", price: 25 },
  { id: 54, name: "Naan", price: 25 },
  { id: 55, name: "Butter Naan", price: 30 },
  { id: 56, name: "Tandori Lachha Paratha", price: 35 },
  { id: 57, name: "Dal Baafla", price: 120 },
  { id: 58, name: "Lachha Naan", price: 40 },
  { id: 59, name: "Aloo Paratha", price: 40 },
  { id: 60, name: "Garlic Naan", price: 45 },
  { id: 61, name: "Paneer Paratha", price: 70 },
];

// ========================== 7. Sides & Salads ======================
const sides = [
  { id: 62, name: "Papad", price: 15 },
  { id: 63, name: "Papad Fry", price: 15 },
  { id: 64, name: "Papad Fry Masala", price: 25 },
  { id: 65, name: "Green Salad", price: 50 },
  { id: 66, name: "Tomato Salad", price: 40 },
  { id: 67, name: "Kachumber Salad", price: 60 },
  { id: 68, name: "Boondi Raita", price: 120 },
];

// ========================== 8. Final Export ======================
export const menuSections = [
  { title: "🥢 Chinese & Indo-Chinese", items: chinese },
  { title: "🧅 Paneer Specials", items: paneer },
  { title: "🥕 Delicious Vegetables", items: vegCurries },
  { title: "🍲 Soups", items: soups },
  { title: "🍚 Rice & Noodles", items: riceNoodles },
  { title: "🔥 Gar-ma Garam (Breads & Specials)", items: breads },
  { title: "🥗 Sides & Salads", items: sides },
];
