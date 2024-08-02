
import MovieReviewSite from '../assets/images/Screenshot 2024-07-26 162321.png'
import Jotdown from '../assets/images/Screenshot 2024-07-26 193411.png'
import WeatherApp from '../assets/images/Screenshot 2024-07-29 094544.png'


const projectData = [
   {    
        id: 1,   
        image: MovieReviewSite,
        projectTitle: "Movie Review Site",
        description: "The Movie Review Site project showcases my proficiency in building a robust backend server using Express.js, capable of handling HTTP requests such as GET, POST, PUT, and DELETE. I integrated the TMDB API to fetch information on movies and TV shows for users to review. The application features a database that stores movie and TV show data along with user reviews. For the frontend, I used HTML, CSS, and JavaScript, and employed EJS for rendering data fetched from the backend server. Additionally, I implemented validation to handle scenarios where the server does not find the requested movie or TV show.",
        technology: "HTML, CSS, JavaScript, NodeJS, ExpressJS, EJS, PostgresSQL",
        features: "Responsive Design, REST API endpoints",
        githubLink: "https://github.com/J0EL0E/Movie-Review-App",
    },
    {   
        id: 2,
        image: Jotdown,
        projectTitle: "Jotdown",
        description: "In developing the Jotdown, I utilized my expertise in React Hooks, particularly useState and useEffect, to manage data persistence and retrieval. The project demonstrates my ability to implement conditional rendering, allowing components to be rendered or have their props values altered based on specific conditions. I also employed destructuring techniques to efficiently handle fetched data within components. Additionally, I implemented the passing of props between components to ensure seamless data flow throughout the application.",
        technology: "HTML, CSS, JavaScript, React",
        features: "Responsive Design, Created using a frontend framework",
        githubLink: "https://github.com/J0EL0E/Jotdown-",
    },
    {   
        id: 3,
        image: WeatherApp,
        projectTitle: "Weather App",
        description: "In the Weather App project, I created a backend server using Express.js to handle HTTP requests such as GET, POST, PUT, and DELETE. The application utilizes the Geocodify API to obtain the coordinates of the user-searched locations, which are then used with the Open Meteo API to fetch weather conditions. I employed Axios to retrieve data from these APIs. The frontend was developed using HTML, CSS, and JavaScript, with EJS used for rendering data fetched from the backend server..",
        technology: "HTML, CSS, JavaScript, NodeJS, ExpressJS, EJS,",
        features: "Responsive Design, REST API endpoints",
        githubLink: "https://github.com/J0EL0E/Weather-app",
    },
]

export default projectData;