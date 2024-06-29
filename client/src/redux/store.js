import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import { getProductsReducer, getProductDetailsReducer,getApiProductsReducer,getDummyApiProductsReducer } from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';
const reducer = combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    getProductApiReducer:getApiProductsReducer,
    getDummyReducer:getDummyApiProductsReducer,
    cart:cartReducer
});
const Middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...Middleware))
)

export default store;