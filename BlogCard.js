import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <>
    
            <div className="col-3">
                <div className="blog-card">
                    <div className="blog-card-image">
                        <img src="images\blog-1.jpg " className='img-fluid' alt="" />
                    </div>
                    <div className="blog-content">
                       <p className="date">21 Dec,2022</p>
                       <h5 className="title">
                        A beutifull sunday morning
                       </h5>
                       <p className="desc">Should You be here I am not in Danger I am danger walter said to skyler</p>
                  <Link className='btn btn-danger'>Read more</Link>
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default BlogCard