import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL,GET_PRODUCT_DETAILS_REQUEST,GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS_FAIL,GET_PRODUCT_API_REQUEST,GET_PRODUCTS_USING_API_SUCCESS,GET_PRODUCT_API_FAIL,GET_PRODUCT_API_RESET,GET_PRODUCT_DETAILS_RESET}  from "../constants/productsConstant";
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
  } from '../constants/productsConstant';

  import {
    DFETCH_PRODUCTS_REQUEST,
    DFETCH_PRODUCTS_SUCCESS,
    DFETCH_PRODUCTS_FAILURE,
  } from '../constants/productsConstant';

 
  
export const getProductsReducer = (state={products: []},action)=>{
        switch(action.type){
            case GET_PRODUCTS_SUCCESS:
                return {products:action.payload}
            case GET_PRODUCTS_FAIL:
                return {error:action.payload}
            default:
                return state
        }
}

export const getProductDetailsReducer = (state={loading:false ,product: {}},action)=>{
    switch(action.type){
        case GET_PRODUCT_DETAILS_REQUEST:
            return {loading:true}
        case GET_PRODUCT_DETAILS_SUCCESS:
            return {loading:false, product:action.payload}
        case GET_PRODUCT_DETAILS_FAIL:
            return {loading:false, error:action.payload}
        case GET_PRODUCT_DETAILS_RESET:
            return {product:{}}
        default:
            return state
    }
}


const initialState = {
    loading: false,
    product: {},
    error: null,
  };

export const getApiProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case FETCH_PRODUCTS_SUCCESS:
          return {
            ...state,
            loading: false,
            product: action.payload,
            error: null,
          };
        case FETCH_PRODUCTS_FAILURE:
          return {
            ...state,
            loading: false,
            product: {},
            error: action.payload,
          };
        default:
          return state;
      }
  };

  const FinalState = {
    loading: false,
    product: {},
    error: null,
  };
  export const getDummyApiProductsReducer = (state = FinalState, action) => {
    switch (action.type) {
        case DFETCH_PRODUCTS_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case DFETCH_PRODUCTS_SUCCESS:
          return {
            ...state,
            loading: false,
            product: action.payload,
            error: null,
          };
        case DFETCH_PRODUCTS_FAILURE:
          return {
            ...state,
            loading: false,
            product: {},
            error: action.payload,
          };
        default:
          return state;
      }
  };