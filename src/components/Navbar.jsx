import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';


function Navbar () {
 
        const [open, setOpen] = useState(false);
        const [color, setColor] = useState();

        const toggleSidebar = (newOpen) => () => {
          setOpen(newOpen);
        };
        const setButtonColor = () =>  {  
                setColor
        }
      


        return (
            <nav className='navbar'>
                <a href="/"  className="navbar-link" id="home-btn">Jose Luis Salvador</a>
                <Button onClick={toggleSidebar(true)}><MenuIcon sx={{width: "40px", height: "40px", color: "#61677A"}} /></Button>
                <Drawer open={open} onClose={toggleSidebar(false)} anchor='right' sx={{width: "300px", display: "flex", backgroundColor: "#121313"}}>
                        <ListItem sx={{display: "flex", flexDirection: "column", width: "200px"}}>
                                <ListItemButton>
                                        <a href="#about" className="navbar-link" >About</a>
                                </ListItemButton>
                                <ListItemButton>
                                         <a href="#projects" className="navbar-link" >Projects</a>
                                </ListItemButton>
                                <ListItemButton onClick={setButtonColor()} >
                                <a href="#contacts" className="navbar-link">Contacts</a>        
                                </ListItemButton>
                        </ListItem>
                </Drawer>
            </nav>   
    )
}

export default Navbar
