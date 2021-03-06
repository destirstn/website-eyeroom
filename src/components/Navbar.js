import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!false);

    const showButton = () =>{
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

   useEffect(() => {
       showButton();
   }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                   <p className='navbar-log' onClick={closeMobileMenu}>
                   <img src="/images/logo-eyeroom.png" className='img-logo' onClick={closeMobileMenu}/>Eyeroom 
                   </p> 
                   {/* <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/fitur' className='nav-links' onClick={closeMobileMenu}>Fitur</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/OurTeam' className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>
                    </ul> */}
                </div> 
            </nav>
        </>
    );
}

export default Navbar;
