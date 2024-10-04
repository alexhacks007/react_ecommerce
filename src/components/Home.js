import './Home.css'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function Home() {
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
    </>
  )
}

export default Home()