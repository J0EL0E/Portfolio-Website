import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallMe from '../assets/Digital Assets/Calling-amico.png'

function Contacts () {
  const currentYear = new Date().getFullYear()
  return (
    <section className='contact-section' id="contacts">
      <h3>Contact</h3>
      <div className='contact-details'>
        <div className='contact-info'>
          <h4>Connect and Get in touch with me</h4>
          <div className='contact-links'>
            <a href="https://github.com/J0EL0E" target='_blank'><GitHubIcon style={{width: "70px", height: "70px"}}/></a>
            <a href="https://www.linkedin.com/in/jose-luis-salvador-1869a5242/" target='_blank'><LinkedInIcon  style={{width: "70px", height: "70px"}}/></a>
            <a href="mailto:joseluisi.salvador0626@gmail.com" target='_blank'><EmailIcon style={{width: "70px", height: "70px"}} /></a>
            <a href="https://www.facebook.com/jolo.salvador.14/" target='_blank'><FacebookIcon style={{width: "70px", height: "70px"}} /></a>
          </div>
        </div>
        <div className="contact-icon">
          <img src={CallMe} alt="contact_me_asset" className='contact-me'/>
        </div>  
      </div>
      <footer>
        <p id="copyright">&#169; {currentYear}  All Rights Reserved. </p>
        <p> Designed and developed by Jose Luis Salvador</p>
        </footer>
    </section>
  )
}

export default Contacts