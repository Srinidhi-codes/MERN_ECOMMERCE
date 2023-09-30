import express from "express";
import {
    brainTreePaymentController,
    braintreeTokenController,
    createProductController,
    deleteProductController,
    getProductController,
    getSingleProductController,
    productCategoryController,
    productCountController,
    productFiltersController,
    productListController,
    productPhotoController,
    relatedProductController,
    searchProductController,
    updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middleware/authMidddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
    "/createproduct",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
);
//routes
router.put(
    "/updateproduct/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
);

//get products
router.get("/getproduct", getProductController);

//single product
router.get("/getproduct/:slug", getSingleProductController);

//get photo
router.get("/productphoto/:pid", productPhotoController);

//delete product
router.delete("/product/:pid", deleteProductController);

// Filter Product
router.post("/productfilters", productFiltersController)

// Product Count
router.get("/productcount", productCountController)

//Product per page
router.get("/productlist/:page", productListController);

// Search Product
router.get("/search/:keyword", searchProductController);

// Similar Products
router.get("/relatedproducts/:pid/:cid", relatedProductController);

//Category Wise Products
router.get("/productcategory/:slug", productCategoryController)

//payments routes
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);


export default router;