// src/components/Services.js
import React, { useEffect, useRef } from 'react';
import UseInter from './UseInter';
import { FaCloud, FaSearch, FaBitcoin } from 'react-icons/fa';
import './style.css';

const Services = () => {
    const setElements = UseInter({ threshold: 0.1 });

    const elementsRef = useRef([]);

    useEffect(() => {
        setElements(elementsRef.current);
    }, [setElements]);

    return (
        <div className='outer-most'>
    <h1 className="animate-on-scroll" ref={el => elementsRef.current[0] = el}>Our Services</h1>
    <div className='serv-box'>
        <div className='service animate-on-scroll' ref={el => elementsRef.current[1] = el}>
            <FaCloud size="4rem" />  
            <h2>Web Development</h2>
            <p>At Helios Innovations, we take pride in being at the forefront of website development. Our team of highly skilled engineers—comprising both seasoned back-end wizards and creative front-end maestros—brings your digital vision to life. Here’s why you should choose us:</p>
            <button className='my-button'>Know More</button>
        </div>
        <div className='service animate-on-scroll' ref={el => elementsRef.current[2] = el}>
            <FaSearch size="4rem" />  
            <h2>AI / ML</h2>
            <p>At Helios Innovations, we don’t just follow trends; we shape them. Our team of brilliant minds—AI/ML enthusiasts and blockchain aficionados—transforms complex concepts into practical solutions. Here’s why we stand out:</p>
            <button className='my-button'>Know More</button>
        </div>
        <div className='service animate-on-scroll' ref={el => elementsRef.current[3] = el}>
            <FaBitcoin size="4rem" />  
            <h2>Blockchain Development</h2>
            <p>In the ever-evolving landscape of technology, blockchain stands out as a transformative force. Beyond cryptocurrencies, blockchain offers secure, transparent, and tamper-proof solutions. Here’s why you should choose us for your blockchain development needs:</p>
            <button className='my-button'>Know More</button>
        </div>
    </div>
</div>

    );
};

export default Services;
