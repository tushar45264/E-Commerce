import express from 'express';
import { UserSignup ,UserLogin} from '../controller/userController.js';
import { getProducts, getProductsById } from '../controller/productController.js';
import { getOrder, storeOrder } from '../controller/orderController.js';
const router = express.Router();

router.post('/signup', UserSignup);
router.post('/login', UserLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductsById);
router.post('/store-order', storeOrder);
router.get('/store-order/:id',getOrder)

export default router;