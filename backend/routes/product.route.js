import express from "express";
import {
    getAllProducts,
    getFeaturedProducts,
    createProduct,
    deleteProduct,
    getRecommendedProducts,
    getProductsByCategory,
    getProductById,
    toggleFeaturedProducts } from "../controllers/product.controller.js";
import { protectRoute, adminRoute } from "../middlewares/auth.middleware.js";


const router = express.Router();


router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendations", getRecommendedProducts);
router.post("/", protectRoute, adminRoute, createProduct);
router.get("/:id", getProductById);
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProducts);
router.delete("/:id", protectRoute, adminRoute, deleteProduct);

export default router;