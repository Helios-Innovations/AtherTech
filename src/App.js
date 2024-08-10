import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Service from './Components/Services/Service';
import Home from './Components/Landing/home';
import { createBrowserRouter, RouterProvider, BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './footer/Footer';
import Contact from './Components/CONT/Contact';
import AboutUs from './Components/ABOUT/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>

       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/services" element={<Service/>}/>
       <Route path="/about" element={<AboutUs/>}/>
       <Route path="/contact" element={<Contact/>}/>
       </Routes>
       <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
