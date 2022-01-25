import React from 'react';
import { Button } from './Button';
import './MainSection.css';
import '../App.css';
import sample from './media/CIBC_Vid.mp4';


function MainSection() {
    return (
        <div className='background_img'>
        <div className='hero-container' >
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            <h1>About me</h1>
            <p>York University- Computer Engineering 2023</p>
            <div className='hero-btn'>
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Hire
                </Button>
            </div>
        </div>
        </div>
    );
}

export default MainSection;
