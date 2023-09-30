import express from "express"
import { isAdmin, requireSignIn } from './../middleware/authMidddleware.js';
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";

const router = express.Router()

// Routes

// Create Category
router.post('/createcategory', requireSignIn, isAdmin, createCategoryController
);

// Update Category
router.put('/updatecategory/:id', requireSignIn, isAdmin, updateCategoryController
);

// Get All Category
router.get("/allcategory", categoryController);

// Single Category
router.get("/singlecategory/:slug", singleCategoryController);

// Delete Category
router.delete("/deletecategory/:id", deleteCategoryController, isAdmin, requireSignIn);


export default router;