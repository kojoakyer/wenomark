import React from 'react'
import { Link } from 'react-router-dom'
import  './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-wrapper">
            <div className="footer-wrapper-left">
            <div className="logo-container ">
                <Link  style={{textDecoration:'none', color:'white'}} to='/'>
                <img src="assets/Wenomark_logo.png" className='navbar-logo' alt="" />
                </Link>
            </div>
                <div className="footer-wrapper-right-co">
                    <ul>
                        <h3>Our Contact</h3>
                        <li>Office: 4042 Imperial Road, UK</li>
                        <li>Help; (0411) 425 277 / 425</li>
                        <li>Email: inbox@finance.com</li>
                    </ul>
                </div>
                <div className="footer-wrapper-right-co">
                    <ul>
                        <h3>About Us</h3>
                        <p style={{width:'201px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies </p>
                    </ul>
                </div>
                <div className="footer-wrapper-right-co">
                    <ul>
                        <h3>Subscribe</h3>
                        <div className="footer-search">
                            <input type="Your Email"  placeholder='Your Email'/>
                            <img src="assets/Vector.png" alt="" />
                        </div>
                        <li>Follow Us</li>
                        <li>
                            <div className="footer-social">
                                <FacebookIcon sx={{marginLeft:'0px'}}/>
                                <TwitterIcon sx={{marginLeft:'10px'}}/>
                                <InstagramIcon sx={{marginLeft:'10px'}}/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-wrapper-right">
                <div className="right-container">
                        <p>Legal</p>
                        <Link to='/terms' style={{textDecoration:'none',color:'white'}}> <p>Terms and Conditions</p></Link>
                        <p>Privacy Policy</p>
                </div>
                <div className="left-container">
                    <p>© 2020 Enver, All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer