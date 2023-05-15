import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

import {
    retrieveProducts,

}from '../actions/products'
export default function ProductList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [currentProduct,setCurrentProduct]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const products = useSelector((state)=>state.products);
     

    useEffect(()=>{
        dispatch(retrieveProducts());
      },[]);

    
    const refreshData=()=>{
        setCurrentProduct(null);
        setCurrentIndex(-1);
    }
 

    const setActiveProduct = (product,index)=>{
        setCurrentProduct(product);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 


return(
<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Brand</th>
        </tr>
    </thead>
    <tbody>
{/*  {props?.productData?.length >0 ?(
        props.productData.map((product)=>(
   */}

  {products?.length > 0 ? (
    products.map((product)=>(
    <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.brand}</td>
        <td><button 
         onClick={()=>{props.editProduct(product)}}
        className="button muted-button">Edit</button></td>
        <td><button 
        onClick={()=>props.deleteProduct(product.id)}
        className="button muted-button">Delete</button></td>
        
     </tr>))):(
        <tr>
            <td colSpan={4}>No products</td>
        </tr>
     )}

    </tbody>
</table>




)




}