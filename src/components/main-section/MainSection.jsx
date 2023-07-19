import React from 'react'
import './MainSection.css'

function MainSection() {
  return (
    <div className='main'>

      <img className='main-arrow' src="assets/arrow.png" alt="" />
      <img className='main-add' src="assets/add.png" alt="" />

      <div className="main-title">
         <h3>The Services We Provide For You</h3>
      </div>

      <div className="main-container">
        {data.map((item)=>{
          return(
            <div key={item.id} className="main-card">
              <img src={item.img} alt="" />
               <h6>{item.title}</h6>
                <p>{item.desc}</p>
            </div>
          )
        })}
        
      </div>
      

      
    </div>
  )
}

export default MainSection


const data =[
  {
    id:1,
    img:'assets/icon1.png',
    title:'Website Design& Development',
    desc:' Our web team prioritizes a seamless user experience, driving higher search rankings, superior quality traffic, and valuable inquiries.'
  },
  {
    id:2,
    img:'assets/icon2.png',
    title:'Social Media Advertising',
    desc:' Boost your brand with efficient social media ads. Reach a vast audience, save money, and achieve exceptional ROI.'
  },
  {
    id:3,
    img:'assets/icon3.png',
    title:' Graphik Designer',
    desc:' We provide Graphic Design services, with the best designers'
  },
  {
    id:4,
    img:'assets/icon4.png',
    title:' Motion Graphik',
    desc:' Create a platform with the best and coolest quality from us.'
  },  {
    id:5,
    img:'assets/icon5.png',
    title:'Photography',
    desc:' We provide Photography services, and of course with the best quality'
  },
  {
    id:6,
    img:'assets/icon6.png',
    title:'Videography',
    desc:' Create a platform with the best and coolest quality from us.'
  },
]