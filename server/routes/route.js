import express from 'express';
import { UserSignup ,UserLogin} from '../controller/userController.js';
import { getProducts, getProductsById } from '../controller/productController.js';
import { addPaymentGateway } from '../controller/paymentController.js';
const router = express.Router();

router.post('/signup', UserSignup);
router.post('/login', UserLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductsById);
router.post('/payment', addPaymentGateway);

export default router;