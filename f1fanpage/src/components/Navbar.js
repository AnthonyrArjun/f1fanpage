import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from'./Button.js'
import f1_car from './images/f1-car.png'
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                       F1 Fan Page<img className="navbar-image" src={f1_car} alt="f1-car"></img>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/tracks' className='nav-links' onClick={closeMobileMenu}>
                                Tracks
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/tires' className='nav-links' onClick={closeMobileMenu}>
                                Tires
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/strategy' className='nav-links' onClick={closeMobileMenu}>
                                Strategy
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn-otline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
