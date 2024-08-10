import React from 'react'
import { FaBeer, FaBitcoin, FaCloud, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaSearch, FaTwitter } from "react-icons/fa";
import './ab2.css'
import madhavImage from '../image/madhav.png';
import anuragImage from '../image/Anurag.jpg';
import prashantImage from '../image/Prashant.jpg';
import divyansh from '../image/Divyansh.jpg'

function Ab2() {
  return (
    <div className="container1">
    <div className="header1">
        <h1>Our Team</h1>
    </div>
    <div className="sub-container1">
        <div className="teams">
            <img src={anuragImage} alt="" height="100px"/>
            <div className="name">Anurag Khanna</div>
            <div className="design">Co-Founder</div>
            <div className="design">Blockchain engineer and Consultant</div>
            <div className="about">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, assumenda!</div>
            <div className="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram/></a>
  	 				<a href="#"><FaTwitter/></a>
  	 				<a href="#"><FaLinkedin/></a>
            </div>
        </div>
       
        <div className="teams">
            <img src={prashantImage} alt="" height="100px"/>
            <div className="name">Prashant Singh</div>
            <div className="design">Co-Founder</div>
            <div className="design">Ai/ML Developer</div>
            <div className="about">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, assumenda!</div>
            <div className="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram/></a>
  	 				<a href="#"><FaTwitter/></a>
  	 				<a href="#"><FaLinkedin/></a>
            </div>
        </div>
       
        <div className="teams">
        <img src={madhavImage} alt="Description" height="100px" />
            <div className="name">Madhav Thakur</div>
            <div className="design">Web-Dev Lead</div>
            <div className="design">Full Stack Developer</div>
            <div className="about">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, assumenda!</div>
            <div className="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram/></a>
  	 				<a href="#"><FaTwitter/></a>
  	 				<a href="#"><FaLinkedin/></a>
            </div>
        </div>
        
    </div>
</div>

  )
}

export default Ab2