import {
    ADD_PRODUCT,
  RETRIEVE_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  
} from "./types";
import  ProductService from "../services/ProductService";
//we are creating action objects so that they can be dispatched to the store
//addProduct --dispatch object from where -
// when we  bindActionCreators -- destructured object of diff vars and functions and to that we are tying the dispatch
//useDispatch hook , which will give us the constant of dispatch

export const addProduct = (name,price,brand) => async (dispatch) => {
  try {
    //first the call to back end server is happening
    //data of product type and we receive server response

    const res = await ProductService.create({ name,price,brand });
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveProducts = () => async (dispatch) => {
  try {
    const res = await ProductService.getAll();
    dispatch({
      type: RETRIEVE_PRODUCTS,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


export const updateProduct = (id, data) => async (dispatch) => {
  try {
    const res = await ProductService.update(id, data);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const  deleteProduct = (id) => async (dispatch) => {
  try {
    await ProductService.remove(id);
    dispatch({
      type: DELETE_PRODUCT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};