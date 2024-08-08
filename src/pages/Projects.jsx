import React from 'react'
import Project from '../components/Project'
import projectData from '../components/ProjectData'

function Projects () {

  return (
    <section className='project-section' id="projects">
      <div className='project-container'>
        <h2>Projects</h2>
        <div className='project-card'>
          {projectData.map(data => { 
          return <Project 
            key ={data.id}
            id = {data.id}
            image={data.image} 
            projectTitle={data.projectTitle} 
            description={data.description} 
            technology={data.technology} 
            features={data.features} 
            githubLink={data.githubLink}/>
        })} 
        </div>
        
      </div>
    </section>
  )
}

export default Projects