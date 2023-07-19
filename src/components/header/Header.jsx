import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className="header-wrapper">
        <div className="header-info">
            <h2>The Digital Marketing Agency</h2>
            <p>Crafting social media success for the <span style={{color:'#FF6634'}}> Food and Beverage Businesses </span> by deploying result-driven services around, social media strategy, content production, community management, paid social advertising and influencer marketing.
            </p>
            <button className='header-btn'>Get Started</button>
        </div>
        <div className="header-img">
          <img src="./header-img" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header