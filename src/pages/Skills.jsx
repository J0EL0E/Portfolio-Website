import React from 'react'
import HTML from "../assets/logos/icons8-html-5-480.png";
import CSS from "../assets/logos/icons8-css-480.png"
import Javascript from "../assets/logos/icons8-javascript-480.png"
import Bootstrap from "../assets/logos/icons8-bootstrap-480.png"
import NodeJS from "../assets/logos/node-js-736399_1280.png"
import ExpressJS from "../assets/logos/icons8-express-js-250.png"
import EJS from "../assets/logos/icons8-ejs-480.png"
import PostgresSQL from "../assets/logos/icons8-postgres-480.png"
import ReactJS from "../assets/logos/icons8-react-js-480.png"


function Skills (props) {
  return (
    <section className='skills-section' id='skills'>
      <h2>Skills</h2>
      <h3>Technical Skills</h3>
      <div className="tech-skills">
        <img src={HTML} alt="html" />
        <img src={CSS} alt="css" />
        <img src={Javascript} alt="javascript" />
        <img src={Bootstrap} alt="bootstrap" />
        <img src={NodeJS} alt="nodejs" />
        <img src={ExpressJS} alt="expressjs" />
        <img src={EJS} alt="ejs" />
        <img src={PostgresSQL} alt="postgressql" />
        <img src={ReactJS} alt="react" />
      </div>
      <div className="soft-skills">
        <h3>Soft Skills</h3>
        <ul>
          <li>
            <b>Problem-Solving: </b>
             Developed through years of analytical work during my tenure as a Software QA Engineer.</li>
          <li>
            <b>Communication: </b> Strong verbal and written skills, honed through client interactions and team collaborations</li>
          <li>
            <b>Adaptability: </b> Proven ability to learn and adapt quickly in dynamic environments</li>
        </ul>
      </div>
      
    </section>
  )
}

export default Skills