import * as actionTypes from '../constants/cartConstants'

export const cartReducer = (state={cartI:[]},action)=>{
        switch(action.type){
            case actionTypes.ADD_TO_CART:
                const item = action.payload;
                const existItem = state.cartI.find(product => product.id === item.id);
                if(existItem){
                   return {...state,cartI:state.cartI.map(x => x.product === existItem.product ? item : x)}
                } else{
                    return {...state,cartI:[...state.cartI,item]}
                } 
            case actionTypes.REMOVE_FROM_CART:
                return {...state,cartI:state.cartI.filter(product => product.id !== action.payload)}
            default:
                return state;
            }    
}