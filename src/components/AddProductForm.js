import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/products';

export default function AddProductForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
   id:0,
   name:'',
   price:0,
   brand:''

}
 
const [product,setProduct]=useState(initialFormState);
//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setProduct({...product,[name]:value});
}
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}

const handleNameChange = (event)=>{
   setName(event.target.value)
}

const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}

const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

const submitHandler=(event)=>{event.preventDefault();
if( !product.name || !product.price || 
    !product.brand) return;
 console.log(product+'from addproductform')
//props.addProduct(product);
dispatch(addProduct(product));
setProduct(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>

<label>Id</label>
<input 
type='number'
name='id'
value={product.id}
onChange={handleInputChange}/>

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

<button>Add New Product</button>

</form>


</>
)


}