import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { NavLink ,Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
   <header className="header-top-strip py-2">
   <div className="container-xxl ">
   <div className="row">
   <div className="col-6 ">
    <p className='text-white mb-0'>  Free shipping in pakistan</p>
   </div>
   <div className="col-6 ">
   
    <p className='text-end text-white mb-0'>Telephone: <a href='tel: +92304 8871970'>+92 3048871970 </a></p>
   </div></div></div>
    </header>
    <header className="header-upper py-2">
       <div className="container-xxxl">
        <div className="row align-items-center d-flex">
          <div className="col-2 text-center">
            <h2 >
              <Link className='text-white  '> ILLUSION</Link>
            </h2>
          </div>
          <div className="col-5">
          <div class="input-group mb-2 mt-2">
  <input type="text" class="form-control "
   placeholder="Search product Here" 
   aria-label="Search product Here" aria-describedby="basic-addon2"/>
  <span class="input-group-text p-3" 
  id="basic-addon2"><BsSearch className='bs-6'/></span>
</div>
            
          </div>
          <div className="col-5"> 
          <div className="header-upper-link d-flex align-items-center justify-content-between">
              <div>
                <Link className='d-flex align-items-center gap-10'>
                <img src='/images/compare.svg'alt=''/>
                <p className='mb-0  '> Compare <br/> Products</p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10'>
                <img src='/images/wishlist.svg'alt='wishlist'/>
                <p className='mb-0 '> Favourite <br/> wishlist</p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10'>
                <img src='/images/user.svg'alt='user'/>
                <p className='mb-0 '> Login <br/> Account</p>
                </Link>
              </div>
              <div>
                // write a code for adding 4 random numbers to cart                    
                <Link className='d-flex align-items-center gap-10 '>
                <img src='/images/cart.svg'alt='cart'/>
                <div className='d-flex flex-column'>
                  <span className="badge bg-white text-dark">0</span>
                  <p className='mb-0'>$ 500</p>
                </div>
                </Link>
              </div>



          </div>
          
           </div>
        </div>
       </div>
    </header>
   <header className="header-bottom py-1">
    <div className="container-xxl">
      <div className="row">
        
        <div className="col-8">
          <div className="menu-bottom d-flex align-items-center gap-30 ">
            <div>
            <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-10 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <img src='images/menu.svg'alt=''/> 
  <span className='d-inline-block me-Link'>
    shop categories</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
    <li><Link className="dropdown-item text-white" to="">Action</Link></li>
    <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
  </ul>
</div>
            </div>
<div className='menu-links'>
  <div className="d-flex align-items-center gap-15">
    <NavLink  to="/">Home</NavLink>
    <NavLink  to="/">Our Store</NavLink>
    <NavLink  to="/">Blogs</NavLink>
    <NavLink  to="/">Contact </NavLink>
  </div>


</div>
          </div>


        
      </div>
    </div></div>
   </header>
    </>
  )
}

export default Header