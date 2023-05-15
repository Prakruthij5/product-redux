import React , {useContext, useEffect, useState} from 'react'

export default function EditProductForm(props){
     const [product,setProduct] =useState(props.currentProduct)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setProduct({...product,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateProduct(product.id,product);
    }


   

     return (
        <form onSubmit={submitHandler}>
         
<label>Id</label>
<h1>{props.currentProduct.id}</h1>

<label>Name</label>
<input 
type='text'
name='name'
value={product.name}
onChange={handleInputChange}/>

<label>Price</label>
<input 
type='number'
name='price'
value={product.price}
onChange={handleInputChange}/>

<label>Brand</label>
<input 
type='text'
name='brand'
value={product.brand}
onChange={handleInputChange}/>

<button>Update Product</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button></form>


   )




}