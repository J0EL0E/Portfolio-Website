import React, {useState} from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function Project (props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpandClick ()  {
    setIsExpanded(!isExpanded);
  };

  const card = {
    width: "100%", 
    height: "100%", 
    backgroundColor: "transparent", 
    boxShadow: "none", 
    color: "#D8D9DA"
  };

  const expandButton = {
    
    width: "40px", 
    height: "40px", 
    border: "none", 
    borderRadius: "50%", 
    backgroundColor: isExpanded === true ? "#61677A" : "transparent",
    transition: "all ease .5s"
  };

  const expandButtonTransition = () => {
   return{
    color: "#FFF6E0",
    
    transform: isExpanded === true ? "rotate(180deg)"  :  "rotate(0deg)" };
  };

  return (
    <div className='project' key={props.id}>
      <Card style={card}>
        <div className='project-content'>
          <CardHeader title={<h3>{props.projectTitle}</h3> } />
          <CardMedia>
            <img src={props.image} alt="project-image" />
          </CardMedia>
          <CardContent style={{height: "50%", overflow:"hidden", padding: "10px"}}>
            <p>{props.description}</p>
          </CardContent>
          <CardActions style={{marginLeft: "10px"}}>
            <button type='button' className='expandBtn' onClick={handleExpandClick} style={expandButton} ><ExpandMoreIcon  style={expandButtonTransition()}/></button>
          </CardActions>
          <Collapse in={isExpanded} unmountOnExit>
          <CardContent style={{padding: "10px"}}>
          <p><span>Technology: </span>{props.technology}</p>
          <p><span>Features: </span>{props.features}</p>
          </CardContent>
          <CardActions>
             <a href={props.githubLink} target="_blank" > <OpenInNewIcon style={{position: "relative", top: "5px", margin: "0 5px"}}/>Open in Github</a>
          </CardActions>   
          </Collapse>
              
              
        </div>
      </Card>
        
    </div>
  )
}

export default Project;
