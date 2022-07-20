import React from 'react';
import '../styles/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Labforward newsletter to read more about our services
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Laboperator</h2>
            <Link to='/'>Helpdesk</Link>
            <Link to='/'>About us</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Contact</Link>
          </div>
          <div class='footer-link-items'>
           
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <h2>Legal</h2>
            <Link to='/'>Imprint</Link>
            <Link to='/'>GDPR</Link>
            <Link to='/'>Privacy</Link>
            <Link to='/'>Cookies</Link>
          </div>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Labforward © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
