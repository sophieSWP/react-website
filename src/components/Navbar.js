import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { Container } from 'react-dom';
import LoginPage from './pages/Login';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960) {
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
                    <Link to ="/" className="navbar-logo" onClick={closeMobileMenu}> 
                        <img src="SMARTWORKPLUS+LOGO.png"></img>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/Login' className='nav-links' onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li> */}
                        
                        <li className='nav-item'>
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Login
                            </Link>
                            
                        </li>
                    </ul>
                    { button && <Button buttonStyle='login--outline' > LOGIN</Button>
                    }

                </div>

            

            </nav>
        </>
    );
}

export default Navbar
