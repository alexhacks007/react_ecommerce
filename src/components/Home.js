import './Home.css'
import React from 'react';
import axios from 'axios';
import { useState , useEffect } from "react";
import {Link} from 'react-router-dom';



export function Home() {
  const [products1 ,setProduct1] = useState([]);
  useEffect(() =>{
    axios.get('https://dummyjson.com/products')
.then(res  => setProduct1(res.data.products));
},[]);
  return (
    <>
     <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  className="d-block w-100 img1"
            src="https://cmsimages.shoppersstop.com/main_banner_web_Stop_Life_7d6cf85604/main_banner_web_Stop_Life_7d6cf85604.png?text=First Slide"
            alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img  className="d-block w-100 img1"
            src="https://cmsimages.shoppersstop.com/main_banner_web_skechers_Reebok_4b074b3488/main_banner_web_skechers_Reebok_4b074b3488.png?text=Second Slide"
            alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img  className="d-block w-100 img1"
            src="https://cmsimages.shoppersstop.com/main_banner_web_Burberry_Versace_and_more_6089f47209/main_banner_web_Burberry_Versace_and_more_6089f47209.png?text=Third Slide"
            alt="Third slide"/>
    </div>
  </div>
</div>
      <div style={{ display: 'flex', marginTop: '50px', backgroundColor: 'rgb(223 233 247)' }} className='div2'>
        <div style={{ width: '40%', textAlign: 'right' }} ><img src='https://cmsimages.shoppersstop.com/white_glove_32952859cf/white_glove_32952859cf.png' alt='img'className='imgs'></img></div>
        <div className='div3'>
          <p style={{ fontFamily: 'Georgia, serif' }}><b>Personal Shopper</b></p>
          <p>Whats your style? Let us you find it</p>
          <p>BOOK YOUR ADVISOR</p>
        </div>
      </div>
       <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
       <div class="carousel-inner">
         <div class="carousel-item active">
         <img
              className="d-block w-100 img2"
              src="https://cmsimages.shoppersstop.com/hdfc_strip_web_de68992eef/hdfc_strip_web_de68992eef.jpg?text=First Slide"
              alt="First slide"
            />
         </div>
         <div class="carousel-item">
         <img
              className="d-block w-100 img2"
              src="https://cmsimages.shoppersstop.com/new10_sale_strip_web_a9f20f5168/new10_sale_strip_web_a9f20f5168.jpg?text=Second Slide"
              alt="Second slide"
            />         </div>
         <div class="carousel-item">
         <img
              className="d-block w-100 img2"
              src="https://cmsimages.shoppersstop.com/hdfc_strip_web_de68992eef/hdfc_strip_web_de68992eef.jpg?text=Third Slide"
              alt="Third slide"
            />
         </div>
       </div>
       </div>
       <h1 className='producthometitle'>Our Special Products</h1>
       <div className='Producthome'>
        
       {products1.map((product) => (
            <Link to={`/product/${product.id}`} className="link">
            <div id= {product.id} className="divs col-md-3 " style={{width:'18rem'}}>
              <img src={product.images[0] } className="img" alt="loading"></img>
             <div>
              <div className='titleanddesc'>
              <p>
                <h5>{product.title}</h5>
              </p>
              <p>
                {product.description};
              </p>
              </div>
              <h5 className='offer'><span className='off1'>65% off</span>  <span className='off'>999</span> <h3> ${product.price}</h3></h5>
              <p>
               Free delivery
              </p>
              <p>
                {product.rating} rating and {product.reviews[0].rating} reviews
              </p>
              </div>
              </div>
              </Link>
            
            
          ))}
          </div>
     
    </>
  )
}

