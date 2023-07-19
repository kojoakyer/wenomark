import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import MainSection from '../../components/main-section/MainSection'
import Navbar from '../../components/navbar/Navbar'
import WhoWeAre from '../../components/whoweare/WhoWeAre'
import Portfolio from '../../components/portfolio/Portfolio'
import { Banner } from '../../components/banner/Banner'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Header/>
        <WhoWeAre/>
        <MainSection/>
        <Portfolio/>
        <Banner/>
    </div>
  )
}

export default Home