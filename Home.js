import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../Components/BlogCard'
const Home = () => {
  return (
    <div className='conta'>
  <section className="home-wrapper-1 py-5">
   <div className="container-xxl">
<div className="row">
<div className="col-6">
  <div className="main-banner  position-relative " >
    <img src="images/main-banner-1.jpg" 
    alt="main banner"
     className='img-fluid rounded-3' />
     <div className="main-banner-content position-absolute">
      <h4>Style Yourself Here</h4>
      <h5>ipad ipod 78$</h5>
      <p>for 24 mo.footnote</p>
      <Link className="btn btn-danger" >BUY NOW</Link>
     </div>
  </div>
</div>
<div className="col-6">
  <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
  <div className="small-banner  position-relative ">
    <img src="images/catbanner-01.jpg" width="340"
    alt="main banner"
     className='img-fluid rounded-3' />
     <div className="small-banner-content position-absolute">
      <h4>Style Yourself Here</h4>
      <h5>ipad ipod 78$</h5>
      <p>for 24 mo.footnote</p>
      
     </div>
  </div>
  <div className="small-banner  position-relative ">
    <img src="images/catbanner-04.jpg"
    alt="main banner"
     className='img-fluid rounded-3' />
     <div className="small-banner-content position-absolute">
      <h4>Style Yourself Here</h4>
      <h5>ipad ipod 78$</h5>
      <p>for 24 mo.footnote</p>
      
     </div>
  </div>
  <div className="small-banner  position-relative ">
    <img src="images/catbanner-02.jpg" width="340"
    alt="main banner"
     className='img-fluid rounded-3' />
     <div className="small-banner-content position-absolute ">
      <h4>Style Yourself Here</h4>
      <h5>ipad ipod 78$</h5>
      <p>for 24 mo.footnote</p>
      
     </div>
  </div>
  <div className="small-banner  position-relative ">
    <img src="images/catbanner-03.jpg" width="340" 
    alt="main banner"
     className='img-fluid rounded-3' />
     <div className="small-banner-content position-absolute">
      <h4>Stle Yourself Here</h4>
      <h5>ipad ipod 78$</h5>
      <p>for 24 mo.footnote</p>
      
     </div>
  </div>
  </div>
  
</div>
  
</div>



   </div>


  </section>
  <section className="home-wrapper-2 py-5" > 
  <div className="container-xxl">
    <div className="row">
      <div className="col-12">
        <div className="services d-flex justify-content-between align-items-center">
           <div className='d-flex align-items-center gap-10'>
            <img src="images/service.png" alt="images" />
            <div>
              <h6 className='text-center'>Free shipping</h6>
              <p className='mb-0'>From all orders over 1000$</p>
            </div>
            </div>
           <div className='d-flex align-items-center gap-10'>
            <img src="images/service-02.png" alt="images" />
            <div>
              <h6>Daily Surprsie Offer</h6>
              <p className='mb-0'>Save @5% off</p>
            </div>
           </div>
           <div className='d-flex align-items-center gap-10'>
            <img src="images/service-03.png" alt="images" />
            <div>
              <h6>Support 24/7</h6>
              <p className='mb-0'>Shop with expert</p>
            </div>
           </div>
           <div className='d-flex align-items-center gap-10'>
            <img src="images/service-04.png" alt="images" />
            <div className=''>
              <h6>Discount</h6>
              <p className='mb-0'>Affordable prices</p>
            </div>
           </div>
           <div className='d-flex align-items-center gap-10'> 
            <img src="images/service-05.png" alt="images" />
            <div className=''>
              <h6>Secure payments</h6>
              <p className='mb-0'>100% protected payment</p>
            </div>
           </div>
        </div>
      </div>
    </div>
  </div>
  
  </section>
  <section className="home-wrapper-2">
    <div className="container-xxl">
      <div className="row">
        <div className="categories d-flex justify-content-between flex-wrap align-items-center text-center">
          <div className='d-flex align-items-center gap-10'>
<div >
  <h6>Cameras</h6>
  <p>10 items</p>
</div>
<img src="images/camera.jpg"  alt="" />

          </div>
          <div className='d-flex align-items-center gap-10'>
<div >
  <h6>Dell</h6>
  <p>10 items</p>
</div>
<img src="images/speaker.jpg"  alt="" />

          </div>
          <div className='d-flex align-items-center gap-10'>
<div >
  <h6>Laptop</h6>
  <p>10 items</p>
</div>
<img src="images/laptop.jpg"  alt="" />

          </div>
          <div className='d-flex align-items-center gap-10'>
<div >
  <h6>Headphones</h6>
  <p>10 items</p>
</div>
<img src="images/headphone.jpg"  alt="" />

          </div>
          <div className='d-flex align-items-center gap-10'>
<div >
  <h6>Cameras</h6>
  <p>10 items</p>
</div>
<img src="images/camera.jpg"  alt="" />

          </div>
          <div className='d-flex align-items-center gap-10'>
<div >
  <h6>Dell</h6>
  <p>10 items</p>
</div>
<img src="images/speaker.jpg"  alt="" />

          </div>
          <div className='d-flex align-items-center gap-10'>
<div >
  <h6>Laptop</h6>
  <p>10 items</p>
</div>
<img src="images/laptop.jpg"  alt="" />

          </div>
          <div className='d-flex align-items-center gap-10'>
<div >
  <h6>Headphones</h6>
  <p>10 items</p>
</div>
<img src="images/headphone.jpg"  alt="" />

          </div>
         

        </div>
      </div>
    </div>
  </section>
  <section className="marquee-wrapper py-5">
<div className="conainer-xxl">
  <div className="row">
    <div className="col-12">
      <div className="marquee-inner-wrapper card-wrapper">
      <Marquee className='d-flex gap-15 className="mx-4 w-25"'>
       <div className="mx-4 w-25">
        <img src="images/brand-01.png" alt="brand" />
       </div>
       <div className="mx-4 w-25">
        <img src="images/brand-02.png" alt="brand" />
       </div>
       <div className="mx-4 w-25">
        <img src="images/brand-03.png" alt="brand" />
       </div>
       <div className="mx-4 w-25">
        <img src="images/brand-04.png" alt="brand" />
       </div>
       <div className="mx-4 w-25">
        <img src="images/brand-05.png" alt="brand" />
       </div>
       <div className="mx-4 w-25">
        <img src="images/brand-06.png" alt="brand" />
       </div>
       <div className="mx-4 w-25">
        <img src="images/brand-07.png" alt="brand" />
       </div>
       <div className="mx-4 w-25">
        <img src="images/brand-08.png" alt="brand" />
       </div>
       
      </Marquee>
      </div>
    </div>
  </div>

</div>
  </section>
  <section className="blog-wrapper py-5 home-wrapper-2">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Featured Collection</h3>
        </div>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      
      
      </div>
    </div>
  </section>
  <section className="blog-wrapper py-5 home-wrapper-2">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Our latest news</h3>
        </div>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      
      
      </div>
    </div>
  </section>
  </div>
  )
}

export default Home