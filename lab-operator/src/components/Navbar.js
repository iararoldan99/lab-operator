import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../styles/Nabvar.css'

function Navbar() {

  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const displayButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    displayButton();
  }, []);

  window.addEventListener('resize', displayButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <a href="/"><img src="/images/icon.png" alt="logo" /></a>
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/lab-automation/' className='nav-links' onClick={closeMobileMenu}>
                LAB AUTOMATION
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/lab-monitoring/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                LAB MONITORING
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/features/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FEATURES
              </Link>
            </li>            

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                INQUIRES
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
