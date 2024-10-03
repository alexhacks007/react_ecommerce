import React from 'react';
import { useState , useEffect } from "react"
import { useParams,useNavigate } from 'react-router-dom';
import './productdetails.css'
import axios from 'axios';
import { useAuth } from '../auth/Authenticate';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './Product.css';


export function Productdetails(){
    const {user} =useAuth();
    const [product ,setProduct] = useState([]);
    const { id } = useParams();
    const [quantity , setQuantity] = useState(0);
    const navigate = useNavigate();
    const [view,setview] = useState('')
    useEffect(() =>{
      console.log("THIS CALL HAPPEN")
  axios.get(`https://dummyjson.com/products/${id}`)
  .then(res  => setProduct(res.data))},[]);
  console.log(product)
    const [cart,setcart] = useState("ADD CART")
    const [cart1,setcart1] = useState([])
    function addToCart(){
      console.log(user);
      if(!user){
          navigate('/login')
      }
      if(quantity === 0){
          toast.error('Quantity is zero')
          return 
      }
      const body = {
          userId : user.id,
          products : [
              {
                  id : product.id,
                  quantity : quantity
              }
          ]
      }
      setcart("ADDED");
      let a = document.getElementById("button")
      a.style.backgroundColor = "#bcbcbc";
      console.log("user data:",user.firstName);
      console.log(body);
      fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          products: [
            {
              id: product.id,
              quantity: quantity,
            }
          ]
        })
      })
      .then(res => res.json())
      .then(res=>setcart1(res));
  }
  console.log("product_details",cart1)
  useEffect(() =>{
    console.log("THIS CALL HAPPEN")
axios.get(`https://dummyjson.com/carts/${id}`)
.then(res  => setview(res.data))},[]);
    function viewpro(){
    console.log("total bill:",view)
    }
    return(
        <>
             <ToastContainer/>
        <div className='center'>
        { product ? <div id={product.id} className='cards'>
          <div className='child'><img src={product.images} alt='not found'></img></div>
          <div className='content'>
            <h3>{product.title}</h3>
            <h5 className='offer'><span className='off1'>65% off</span>  <span className='off'>999</span> <h3> ${product.price}</h3></h5>
            <p className='deliv' style={{color:'blue'}}>Free delivery</p>
            {/* <p className='deliv'> {product.rating} rating and {product.reviews[0].rating} reviews</p> */}
            <h5 style={{color:'red',paddingTop:'10px'}}>{product.availabilityStatus}</h5>
            <div className='butt' style={{"textAlign":"center","padding":"20px"}}>
              <button type="button" className="button" id="button" onClick={addToCart}>{cart}</button>
              <button type="button" className="button1" id="button">BUY NOW</button>
              </div>
              <div><button onClick={()=>setQuantity(quantity+1)}>+</button>{quantity}<button onClick={()=>setQuantity(quantity-1)}>-</button></div>
            <div className='discount' style={
              {
              width:'90%',
              padding:'5px',
              textAlign:'center',
              backgroundColor:'#c5fa96c7'}}><p style={{fontSize:25}}>Flat {product.discountPercentage}% off</p><p style={{fontSize:'13px'}}>Apply cashback coupon for instant savings</p></div>
              <div style={{marginTop:'15px'}}>
                <div style={{width:'100%',border:'1px solid #4646464f',padding:'10px'}}><h3>Specifications</h3></div>
                <div style={{border:'1px solid #4646464f',padding:'10px',borderTop:'none'}}><h4>General</h4>
                <table style={{width:'100%'}}>
                  <tr>
                    <td>Brand</td>
                    <td>{product.brand}</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>{product.weight}</td>
                  </tr>
                  <tr>
                    <td>Dimentions</td>
                    {/* <td>width:{product.dimensions.width},
                     Height:{product.dimensions.height},
                     Depth:{product.dimensions.depth}
                    </td> */}
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>{product.category}</td>
                  </tr>
                  <tr>
                    <td>Waranty</td>
                    <td>{product.warrantyInformation}</td>
                  </tr><tr>
                    <td>Shipping</td>
                    <td>{product.shippingInformation}</td>
                  </tr>
                  <tr>
                    <td>Return Policy</td>
                    <td>{product.returnPolicy}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{product.description}</td>
                  </tr>

                </table></div>
                <div><button onClick={viewpro} >click to view</button></div>
              </div>
          </div>
          </div> : <h1>Loading...</h1>    
          
}</div>
        </>
    )
}

export default Productdetails