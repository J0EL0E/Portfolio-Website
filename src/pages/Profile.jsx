import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import photo from '../assets/SALVADOR JOSE LUIS0342.jpg';
import HTML from "../assets/logos/icons8-html-5-480.png";
import CSS from "../assets/logos/icons8-css-480.png"
import Javascript from "../assets/logos/icons8-javascript-480.png"
import Bootstrap from "../assets/logos/icons8-bootstrap-480.png"
import NodeJS from "../assets/logos/node-js-736399_1280.png"
import ExpressJS from "../assets/logos/icons8-express-js-250.png"
import EJS from "../assets/logos/icons8-ejs-480.png"
import PostgresSQL from "../assets/logos/icons8-postgres-480.png"
import ReactJS from "../assets/logos/icons8-react-js-480.png"


function Profile (props) {
  return (
    <section className='profile-section' id="about">
      <div className='profile-content'>
        
        <h3>Summary</h3>
        <p>Detail-oriented Software QA Engineer with 2 years of experience ensuring the quality and reliability of software applications. Proven expertise in identifying and resolving complex software issues, with a solid foundation in software testing. Passionate about transitioning into a developer role to leverage strong problem-solving skills and technical knowledge in building robust and efficient software solutions. Adept at collaborating with cross-functional teams to deliver high-quality products on time.</p>
        <a href="https://docs.google.com/document/d/1T5cU8mynD6G1Jsay7XmM2qKtEDP5yK4iHtgkszbrKxU/edit?usp=sharing" target='_blank' type="button" className='view-resume'>
        View my resume
        </a>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <div className="tech-stack-icons">
          <Tooltip title="HTML" placement='top' arrow>
            <button type="button">
              <img src={HTML} alt="html" />
            </button>
          </Tooltip>
          <Tooltip title="CSS" placement='top'arrow>
            <button type="button">
            <img src={CSS} alt="css" />
          </button>
          </Tooltip>
          <Tooltip title="JavaScript" placement='top' arrow>
            <button type="button">
              <img src={Javascript} alt="javascript" />
            </button>
          </Tooltip>
          <Tooltip title="Bootstrap" placement='top' arrow>
            <button type="button">
              <img src={Bootstrap} alt="bootstrap" />
            </button>
          </Tooltip>
          <Tooltip title="NodeJS" placement='top' arrow>
            <button type="button">
              <img src={NodeJS} alt="nodejs" />
            </button>
          </Tooltip>
          <Tooltip title="Express Js" placement='top' arrow>
            <button type="button">
            <img src={ExpressJS} alt="expressjs" />
            </button>
          </Tooltip>
          <Tooltip title="EJS" arrow>
            <button type="button">
              <img src={EJS} alt="ejs" />
            </button>
          </Tooltip>
          <Tooltip title="PostgresQL" arrow>
            <button type="button">
              <img src={PostgresSQL} alt="postgressql" />
            </button>
          </Tooltip>
          <Tooltip title="React" arrow>
            <button type="button">
             <img src={ReactJS} alt="react" />
            </button>
          </Tooltip>
      </div>
      </div>
    </section>
  )
}

export default Profile
