import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import f1_2021_final from './videos/f1_2021_final.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={f1_2021_final} autoPlay loop muted/> 
      <h1>GET IN THERE, LEWIS</h1>
      <p>"Bono, my tires man"</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;