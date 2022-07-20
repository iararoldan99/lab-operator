import React from 'react';
import '../styles/MainLabSection.css'
import { Button } from '../components/Button';

function MainLabSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video2.mp4' autoPlay loop muted />
      <h1>LAB OPERATOR</h1>
      <p>All your lab equipment and data connected</p>
      <h5> Universal Device Integration / Lab Automation / Lab Monitoring / Laboratory Execution System</h5>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          INQUIRE NOW
        </Button>
         
      </div>
    </div>
  );
}

export default MainLabSection;
