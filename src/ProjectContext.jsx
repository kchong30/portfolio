/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';

const ProjectContext = createContext();

export const useProjects = () => {
  return useContext(ProjectContext);
};

// eslint-disable-next-line react/prop-types
export const ProjectProvider = ({ children }) => {
    const projects = [
        {
          id: "1",
          title: "Agilitek - Segmentation Tool",
          description: "An Industry Project sponsored by Agilitek Solutions.",
          overview: "This industry project acted as one of the milestone projects in the BCIT Certification Program. It was based around the concept of segmentation -\
          which was the categorization of a particular population based off of demographic definitions. The ultimate goal was to provide a business analysis tool\
          that would allow the end user to upload CSV files to create segments, and then analyze those segments in the context of a defined product.\n\n\n\n\
          This project was a team five person team endeavor, and my focus on the project was heavily towards the segmentation sort functionality. This\
          functionality allowed the user to utilize a query building component to define a particular product type - then sort the segments in the database\
          based on likelihood of purchase.\n\n\n\n\
          In addition to focus of the segmentation sort - I spent a large amount of time with optimization on the backend to ensure that data fetches and queries\
          ended up running in reasonable time frames.",
          challenges: "The largest challenge encountered during this project was the scope of and size of the database. In general - whether projects being done\
          in class, or even personal projects - the size of the database schema and its accompanying tables were always comparitively small record wise. This project\
          introduced tables and a database schema that was larger (hundreds of thousands of records), and so brute force methods carried\
          consequences that were much more detrimental to the end user experience. \n\n\n\n\
          However - this challenge ultimately resulted in the most satifisying part of building the project. Leveraging tools from the certification program, and research\
          from other sources - we were able to implement database indices, more efficient queries, and optimized algorithms to significantly shave off the time required\
          for all of the required functionality.",
          technology: ["React", "AWS", "SST Serverless Stack", "PostgreSQL, TailwindCSS"],
          image: "https://i.imgur.com/rOFmbDx.png",
          githubLink: "https://github.com/djk88/Agilitek-project2-bcit",
          deploymentLink: "https://d3j8hsov25hvsw.cloudfront.net/",
          deploymentCredentials: "Username: agilitek\nPassword: Agilitek2023!",
        },
        {
          id: "2",
          title: "Pick and Go",
          description: "A restaurant ordering platform that specializes in customizable foods.",
          overview: "Pick and Go was the a milestone internal project for the BCIT Certification Program. The concept was to provide the end user\
          (a resturant owner or business) a scalable platform that would allow them to create a menu, input and track ingredient status, and track orders.\
          A customer would then be able to utilize the guest or registered user functionality to create orders and pick up times.\n\n\n\n\
          This project was a five person endeavor, and my main focus ultimately became the front end of the application - working on fine tuning the aesthetic\
          and user experience of the application. I also spent time developing the automated e-mail functionality through usage of SendGrid, as well as overseeing\
          and handling the GitHub Repository.",
          challenges: "The largest challenge I encountered during this project was the design and implementation of the final user experience and UX. The general CRUD\
          functionality of the app was relatively straightforward, but presenting it in a manner that would be considered appealing and intuitive was a time consuming,\
          and iterative process. \n\n\n\n\
          Alot of time and resources were spent on Figma - and use case testing to really make sure that the end result was something that\
          the group could really see themselves using.",
          technology: ["ASP.NET, MySQL, Bootstrap"],
          image: "https://i.imgur.com/IraHkP4.png",
          githubLink: "https://github.com/kchong30/pick-and-go",
        },
        {
          id: "3",
          title: "MVDB Movie App",
          description: "A movie application that draws from the MVDB API to provide up to date movie information.",
          overview: "This application was built as a solo project during the BCIT Certification Program - and its concept was simple. Draw relevant movie\
          data from the MVDB API - and present the information in a manner that was appealing and intuitive for the end user to browse. \n\n\n\n\
          After this base goal was implemented - the stretch goals of filtering the movies and allowing the user to save their favourite movies were set and reached\
          before the deadline.",
          challenges: "This project acted as the first foray into working with a proper live API, and React as a framework. The main challenges encountered were\
          essentially just getting used to the basics of React. State, Prop Drilling, Routers formed the foundations from which the application was built.",
          technology: ["React, Bootstrap"],
          image: "https://i.imgur.com/dnPkMJS.png",
          githubLink: "https://github.com/kchong30/react-p01-movie-app",
        },
        // Add more project objects as needed
      ];
      

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};