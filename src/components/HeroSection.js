import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>EYEROOM</h1>
      <p>Aplikasi scan obat mata dan data obat kesehatan mata!</p>
      <div className='hero-btns'>
      <Link to='/signin'><Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SIGN IN
        </Button></Link>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CARA PAKAI <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;