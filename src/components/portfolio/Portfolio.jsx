import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio'>
        <h3>Our Awesome Portofolio</h3>
        <div className="portfolio-wrapper">
            <img className='portfolio-img1' src="assets/img1.png" alt="" />
            <img className='portfolio-img2' src="assets/img2.png" alt="" />
            <img className='portfolio-img3' src="assets/img3.png" alt="" />
        </div>
    </div>
  )
}

export default Portfolio