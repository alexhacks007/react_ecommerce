import './Home.css'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { useState , useEffect } from "react";

export function Home() {
  const [products ,setProduct] = useState([]);
    useEffect(() =>{
      axios.get('https://dummyjson.com/products')
  .then(res  => setProduct(res.data.products));
  },[]);
  return (
    <>
      <Carousel interval={3000} controls={true} indicators={true} style={{ display: 'grid' }}>
        <Carousel.Item>
          <img
            className="d-block w-100 img1"
            src="https://cmsimages.shoppersstop.com/main_banner_web_Stop_Life_7d6cf85604/main_banner_web_Stop_Life_7d6cf85604.png?text=First Slide"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First Slide</h3>
          <p>Description for the first slide.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img1"
            src="https://cmsimages.shoppersstop.com/main_banner_web_skechers_Reebok_4b074b3488/main_banner_web_skechers_Reebok_4b074b3488.png?text=Second Slide"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second Slide</h3>
          <p>Description for the second slide.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img1"
            src="https://cmsimages.shoppersstop.com/main_banner_web_Burberry_Versace_and_more_6089f47209/main_banner_web_Burberry_Versace_and_more_6089f47209.png?text=Third Slide"
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third Slide</h3>
          <p>Description for the third slide.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={{ display: 'flex', marginTop: '50px', backgroundColor: 'rgb(223 233 247)' }}>
        <div style={{ width: '40%', textAlign: 'right' }}><img src='https://cmsimages.shoppersstop.com/white_glove_32952859cf/white_glove_32952859cf.png' alt='img' style={{ width: '200px' }} height={'200px'}></img></div>
        <div style={{ width: '60%', display: 'flex', flexDirection: 'column', justifyItems: 'center', gap: '20px' }}>
          <h1 style={{ fontFamily: 'Georgia, serif' }}><b>Personal Shopper</b></h1>
          <h3>Whats your style? Let us you find it</h3>
          <h2>BOOK YOUR ADVISOR</h2>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '50px' }}>
        <div><h1>Special offers to pay</h1></div>
        <Carousel interval={3000} controls={true} indicators={true} style={{ width: '80%' }}>
          <Carousel.Item>
            <img
              className="d-block w-100 img2"
              src="https://cmsimages.shoppersstop.com/hdfc_strip_web_de68992eef/hdfc_strip_web_de68992eef.jpg?text=First Slide"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First Slide</h3>
          <p>Description for the first slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img2"
              src="https://cmsimages.shoppersstop.com/new10_sale_strip_web_a9f20f5168/new10_sale_strip_web_a9f20f5168.jpg?text=Second Slide"
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h3>Second Slide</h3>
          <p>Description for the second slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img2"
              src="https://cmsimages.shoppersstop.com/hdfc_strip_web_de68992eef/hdfc_strip_web_de68992eef.jpg?text=Third Slide"
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Third Slide</h3>
          <p>Description for the third slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <h1>Our special products</h1>
        <div className='special'>
        {/* <!-- Carousel wrapper --> */}
<div
  id="carouselMultiItemExample"
  data-mdb-carousel-init class="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel"
>
  {/* <!-- Controls --> */}
  {/* <!-- Inner --> */}
  <div class="carousel-inner py-4">
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
        {products.map((product) => (
          <div class="col-lg-4" id='1'>
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                class="card-img-top"
                alt="Waterfall"
              />
              <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
      ))}
       {products.map((product) => (
          <div class="col-lg-4 d-none d-lg-block" id='2'>
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
          ))}
{products.map((product) => (
          <div class="col-lg-4 d-none d-lg-block" id='3'>
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                class="card-img-top"
                alt="Sunset over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
         ))}
        </div>
      </div>
    </div>

  </div>
</div>

        </div>
      </div>
    </>
  )
}

export default Home()