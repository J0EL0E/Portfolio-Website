import React from 'react';

function Navbar (props) {
    
    return (
            <nav className='navbar'>
                    <a href="/"  className="navbar-link" id="home-btn">Jose Luis Salvador</a>
                    <a href="#about" className="navbar-link" >About</a>
                    <a href="#projects" className="navbar-link" >Projects</a>
                    <a href="#contacts" className="navbar-link">Contacts</a>
            </nav> 
        
    )
}

export default Navbar
