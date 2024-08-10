import React from 'react'
import Footer from '../../footer/Footer'
import AboutUs from '../ABOUT/About'
import Service from '../Services/Service'
import Team from '../ABOUT/Ab2'
import Contact from '../CONT/Contact'
import './stl.css'
const Home = ()=>{
  return (
    <>
    <div className='lan-box'>
        <img src=''></img>
        <h1>Helios Innovations</h1>
        <h2>Tackling modern problems with innovative solutions</h2>
    </div>
        
        <Service/>
        <AboutUs/>
        <Contact/>
        
    </>
     
  )
}

export default Home