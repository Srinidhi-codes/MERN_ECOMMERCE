import express from 'express';
import { registerController, loginController, testController, forgotPasswordController, updateProfileController, updateCartAddressController, orderStatusController, getAllOrdersController, getOrdersController } from '../controllers/authController.js';
import { requireSignIn, isAdmin } from '../middleware/authMidddleware.js';
//Router Object
const router = express.Router();

//Routing
//Registering Method POST
router.post('/register', registerController);

//LOGIN POST Method
router.post('/login', loginController);

//Forgot Password
router.post("/forgotpassword", forgotPasswordController)

//Test routes
router.get('/test', requireSignIn, isAdmin, testController)

//Protected Route User
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({
        ok: true
    })
});
//Protected Route Admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({
        ok: true
    })
});

// Update Profile
router.put("/profile", requireSignIn, updateProfileController)

// Update Cart Address
router.put("/cart", requireSignIn, updateCartAddressController)

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
);

export default router;