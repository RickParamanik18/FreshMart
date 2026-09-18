const mongoose = require("mongoose");
const MainCategory = require("./models/mainCategory.model");
const SubCategory = require("./models/subCategory.model");
const SubCategoryProduct = require("./models/subCategoryProduct.model");
const User = require("./models/user.model");

const mainCategories = [
    {
        _id: "fruits-vegetables",
        name: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
    },
    {
        _id: "dairy-eggs",
        name: "Dairy & Eggs",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=80",
    },
    {
        _id: "bakery-snacks",
        name: "Bakery & Snacks",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    },
    {
        _id: "groceries",
        name: "Groceries",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
    },
];

const subCategories = [
    {
        _id: "fresh-fruits",
        name: "Fresh Fruits",
        main_category_id: "fruits-vegetables",
    },
    {
        _id: "fresh-vegetables",
        name: "Fresh Vegetables",
        main_category_id: "fruits-vegetables",
    },
    { _id: "milk-dairy", name: "Milk & Dairy", main_category_id: "dairy-eggs" },
    {
        _id: "bread-bakery",
        name: "Bread & Bakery",
        main_category_id: "bakery-snacks",
    },
    {
        _id: "rice-grains",
        name: "Rice & Grains",
        main_category_id: "groceries",
    },
    { _id: "spices", name: "Spices & Masala", main_category_id: "groceries" },
];

const products = [
    {
        _id: "apple-1kg",
        name: "Apple",
        sub_category_id: "fresh-fruits",
        veg_egg_non: "veg",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=80",
        rating: 4.5,
        delivery_time_in_mins: 20,
        item_variant: [
            { unit: "1 kg", price: 120 },
            { unit: "500 g", price: 70 },
        ],
    },
    {
        _id: "banana-dozen",
        name: "Banana",
        sub_category_id: "fresh-fruits",
        veg_egg_non: "veg",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80",
        rating: 4.2,
        delivery_time_in_mins: 18,
        item_variant: [
            { unit: "1 dozen", price: 80 },
            { unit: "500 g", price: 50 },
        ],
    },
    {
        _id: "tomato-1kg",
        name: "Tomato",
        sub_category_id: "fresh-vegetables",
        veg_egg_non: "veg",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=80",
        rating: 4.4,
        delivery_time_in_mins: 25,
        item_variant: [
            { unit: "1 kg", price: 60 },
            { unit: "500 g", price: 35 },
        ],
    },
    {
        _id: "onion-1kg",
        name: "Onion",
        sub_category_id: "fresh-vegetables",
        veg_egg_non: "veg",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
        rating: 4.1,
        delivery_time_in_mins: 22,
        item_variant: [
            { unit: "1 kg", price: 55 },
            { unit: "500 g", price: 30 },
        ],
    },
    {
        _id: "milk-1l",
        name: "Milk",
        sub_category_id: "milk-dairy",
        veg_egg_non: "veg",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=80",
        rating: 4.3,
        delivery_time_in_mins: 30,
        item_variant: [
            { unit: "1 L", price: 65 },
            { unit: "500 mL", price: 35 },
        ],
    },
    {
        _id: "eggs-dozen",
        name: "Eggs",
        sub_category_id: "milk-dairy",
        veg_egg_non: "non-veg",
        image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=900&q=80",
        rating: 4.0,
        delivery_time_in_mins: 28,
        item_variant: [
            { unit: "1 dozen", price: 90 },
            { unit: "6 pcs", price: 50 },
        ],
    },
    {
        _id: "brown-bread",
        name: "Brown Bread",
        sub_category_id: "bread-bakery",
        veg_egg_non: "veg",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
        rating: 4.2,
        delivery_time_in_mins: 26,
        item_variant: [
            { unit: "1 pack", price: 70 },
            { unit: "2 packs", price: 130 },
        ],
    },
    {
        _id: "biscuits-mix",
        name: "Biscuits Mix",
        sub_category_id: "bread-bakery",
        veg_egg_non: "veg",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80",
        rating: 3.9,
        delivery_time_in_mins: 24,
        item_variant: [
            { unit: "250 g", price: 45 },
            { unit: "500 g", price: 85 },
        ],
    },
    {
        _id: "basmati-rice",
        name: "Basmati Rice",
        sub_category_id: "rice-grains",
        veg_egg_non: "veg",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
        rating: 4.6,
        delivery_time_in_mins: 32,
        item_variant: [
            { unit: "1 kg", price: 180 },
            { unit: "5 kg", price: 850 },
        ],
    },
    {
        _id: "turmeric-powder",
        name: "Turmeric Powder",
        sub_category_id: "spices",
        veg_egg_non: "veg",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80",
        rating: 4.4,
        delivery_time_in_mins: 20,
        item_variant: [
            { unit: "200 g", price: 55 },
            { unit: "500 g", price: 120 },
        ],
    },
];

const users = [
    {
        name: "Demo User",
        email: "demo@freshmart.com",
        password: "123456",
        wishlist: [],
        cart: [],
    },
    {
        name: "Admin User",
        email: "admin@freshmart.com",
        password: "admin123",
        wishlist: [],
        cart: [],
    },
];

const seedDatabase = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/kirana");
        console.log("Connected to MongoDB");

        await Promise.all([
            MainCategory.deleteMany({}),
            SubCategory.deleteMany({}),
            SubCategoryProduct.deleteMany({}),
            User.deleteMany({}),
        ]);

        await MainCategory.insertMany(mainCategories);
        await SubCategory.insertMany(subCategories);
        await SubCategoryProduct.insertMany(products);
        await User.insertMany(users);

        console.log("Database seeded successfully");
        process.exit(0);
    } catch (error) {
        console.error("Seed failed:", error);
        process.exit(1);
    }
};

seedDatabase();
