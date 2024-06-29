import axios from "axios";
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL,GET_PRODUCT_DETAILS_REQUEST,GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS_FAIL}  from "../constants/productsConstant";
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

const URL = 'https://e-commerce-h20n.onrender.com';

export const getProducts =()=> async(dispatch)=>{
    try {
    //    let response= await axios.get(`${URL}/products`)
    //we don't want the whole response 
       const {data}= await axios.get(`${URL}/products`)
       dispatch({type:GET_PRODUCTS_SUCCESS , payload:data })
    } catch(error){
        dispatch({type:GET_PRODUCTS_FAIL, payload: error.message})
    }
}
export const getProductDetails=(id)=>async(dispatch)=>{
    try {
        dispatch({type:GET_PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`${URL}/product/${id}`)
        dispatch({type:GET_PRODUCT_DETAILS_SUCCESS, payload:data})
    } catch(error){
        dispatch({type:GET_PRODUCT_DETAILS_FAIL, payload:error.message})
    }
}

const URL_ID="https://fakestoreapi.com/products"

export const GetApiProducts =(id)=> async(dispatch)=>{
    console.log(id)
    try {
        dispatch({type:FETCH_PRODUCTS_REQUEST})
       const response= await axios.get(`${URL_ID}/${id}`)
    //we don't want the whole response 
       const data= response.data
    //    console.log(data);
       dispatch({type:FETCH_PRODUCTS_SUCCESS , payload:data })
    } catch(error){
        dispatch({type:FETCH_PRODUCTS_FAILURE, payload: error.message})
    }
}

const Dummy_URL = 'https://dummyjson.com/products'

export const GetDummyApiProducts =(id)=> async(dispatch)=>{
    console.log(id)
    try {
        dispatch({type:DFETCH_PRODUCTS_REQUEST})
       const response= await axios.get(`${Dummy_URL}/${id}`)
    //we don't want the whole response 
       const data= response.data
       console.log(data);
       dispatch({type:DFETCH_PRODUCTS_SUCCESS , payload:data})
    } catch(error){
        dispatch({type:DFETCH_PRODUCTS_FAILURE, payload: error.message})
    }
}