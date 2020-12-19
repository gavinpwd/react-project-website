import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>A Gastronomic Guide</h1>
      <p>In Search of the World's Delicious Desserts</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          See Our Guides
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          YouTube Channel<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;