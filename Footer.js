import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin,BsGithub,BsYoutube,BsFacebook} from "react-icons/bs"

const Footer = () => {
  return (
    <>
     <footer className='py-3'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
          <div className="footer-top-data d-flex gap-30 aligh-items-center">
            <img src='images/newsletter.png' alt='newsletter'/>
            <h2 className='text-white mb-0'> Signup For Newsletter</h2>
          </div>
          </div>
          <div className="col-7">
          <div class="input-group mb-2 mt-2">
  <input type="text" class="form-control py-1 "
   placeholder="your email address" 
   aria-label="your email address" aria-describedby="basic-addon2"/>
  <span class="input-group-text p-2 button" 
  id="basic-addon2"> Subscribe</span>
</div>
          </div>
        </div>
      </div>

     </footer>
    <footer className='py-4 '>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4 ">
            <h4 className='text-white mb-3 '>Contact us</h4>
           <address className='text-white' >New hostel Mirpur <br/> Mirpur AJK</address>
           <a href='tel' className='mt-2'>0304 8871970</a><br/>
           <a href='mail' className='mt-2'>asfandarar1211@gmail.com</a>
           <div className="social-icons d-flex align-items-center gap-15 mt-3 text-white fs-4">
           <a to="" className="text-white">
           <BsLinkedin className='fs-4'></BsLinkedin>
           </a>
           <a to="" className="text-white">
           <BsGithub className='fs-4'></BsGithub>
           </a>
           <a to="" className="text-white">
           <BsFacebook className='fs-4'></BsFacebook>
           </a>
           <a to="" className="text-white">
           <BsYoutube className='fs-4'> </BsYoutube>
           </a>
            
           
           
           </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Information</h4>
            <div className="footer-links d-flex flex-column">
              <Link className='text-white mb-1 py-2'> Privacy policy</Link>
              <Link className='text-white mb-1 py-2'>Refund Policy</Link>
              <Link className='text-white mb-1 py-2'>Shipping Policy</Link>
              <Link className='text-white mb-1 py-2'>Terms & conditions</Link>
              <Link className='text-white mb-1 py-2'>Blog</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Account</h4>
            <div className="footer-links d-flex flex-column">
              <Link className='text-white mb-1 py-2'> About Us</Link>
              <Link className='text-white mb-1 py-2'>FAQ</Link>
              <Link className='text-white mb-1 py-2'>Contact</Link>
             
            </div>
          </div>
          <div className="col-2">
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className="footer-links d-flex flex-column">
              <Link className='text-white mb-1 py-2'> Laptops</Link>
              <Link className='text-white mb-1 py-2'>Headphones</Link>
              <Link className='text-white mb-1 py-2'>Tablets</Link>
              <Link className='text-white mb-1 py-2'>Watches</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    <footer className='py-4 lower-footer'>
      <div className="container-xxl">
       <div className="row">
      <div className="col-12">
        <p className='text-white text-center mb-0'>
         &copy;{new Date().getFullYear()};  Powered by asfand yar
        </p>
      </div>

       </div>
    
      </div>




    </footer>
   
    </>
  )
}

export default Footer