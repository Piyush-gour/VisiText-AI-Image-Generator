import express from 'express';
import { registerUser, loginUser, userCredits, paymentRazorpay, verifyPayment } from '../controllers/userController.js'; // Add `.js` if using ES modules
import userauth from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits', userauth, userCredits);
userRouter.post('/pay-razor', userauth, paymentRazorpay);
userRouter.post('/verify-payment', userauth, verifyPayment);


export default userRouter;


