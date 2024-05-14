import React, { useState } from "react";
import Project from "./Project";
import Nebula from "../assets/Nebula.png";
import dev from "../assets/dev.png";
import IWB from "../assets/IWB.png";
import Mosaic from "../assets/Mosiac.png";
import V1 from "../assets/V1.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const ProjectPage = () => {
  const [state, setState] = useState(null); 
  const controls = useAnimation();
  const { ref, inView } = useInView();

  if (inView) {
      controls.start("visible");
  }
  return (
    <div><motion.div
    ref={ref}
    animate={controls}
    initial="hidden"
    transition={{ duration: 1 }}
    variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 }
    }}
    className="card"
>              
       <h1 className="centered-title">Projects</h1>
                    <Project
        label="Website"
        title="Luthira - V2"
        details="Version 2 of my website was also created using React. Using version 1 as a learning experience, I started by planning a mockup using Figma steamline the actual execution. I combined my passion for design and development to create a more visually appealing website by adding animations, and more interactive React libraries. Integrating a hti tracker allowed me to monitor sit visits and within publishing it reached over 1000 views."
        listItems={["React", "HTML", "JavaScript", "CSS","jQuery","Figma"]}
        imgSrc={V1}
      />
      <Project
        label="Sleep Tracker - UHN"
        title="Integrated Wristband"
        details="Developed an integrated wristband for Dr. Tatyana Mollayeva of KITE Rehabilitation Center - UHN, to monitor circadian rhythms (CRSD) and diagnose early signs of CRSDs. Managed a team of 6 individuals.to develop and prototype a sleep desynchrony wristband tracker, utilizing technologies such as a Gantt chart to keep track of internal and external project deadlines Organized team meetings and client meetings to facilitate streamlined communication.  From a technical standpoint, I was able to learn about event-driven programming, and the utilization of sensors to monitor human vitals."
        listItems={["Event-Driven Programming", "Project Management"]}
        imgSrc={IWB}
      />
        <Project
        label="Social Media"
        title="Mosiac"
        details="Created during a 24-hour hackathon project, Mosaic at its core is a social media app inspired by Pokemon :). We used Dart for our front end and Python SQLite for our backend as well as the Google Maps API. This project helped me understand the fundamentals of version control using .git and SQL."
        listItems={["Flutter", "Dart", "Python", "SQLite","GIT"]}
        imgSrc={Mosaic}
      />
              <Project
        label="Website"
        title="Luthira - V1"
        details="Version 1 of my personal website, created using React. This project helped me understand the fundamentals of web development, and the importance of responsive design. This was a great learning experience and taught that planning was equally important as the execution."
        listItems={["React", "HTML", "JavaScript", "CSS"]}
        imgSrc={V1}
      />

      <Project
        label="Robotics"
        title="Devolotics FTC"
        details="Executive member for 2 years, my role was programming the robot utilizing Java, and motion profiling libraries such as roadrunner (pathfinding) and TensorFlow for camera vision. I am proud to say after qualifying for provincials in our very first season, we were able to run it back and get even further to the Houston World Championships, representing Canada while being 1 of 2 Ontario teams, and the first-ever TDSB team to do so!"
        listItems={["Java", "TensorFlow", "Motion Profiling"]}
        imgSrc={dev}
      />
                  <Project
        label="Health Care"
        title="Nebula"
        details="All-in-one health application, created purely with React Native. This project gave me the chance to learn about the utilization of built-in smartphone sensors, and optimizing performance through the manipulation of rendering methods.  Features of this app include heart rate tracking, blood pressure monitoring, and screen time tracker. The graphical user interface is still under development."
        listItems={["React Native", "HTML", "CSS", "SQL","Python"]}
        imgSrc={Nebula}
      />
    </motion.div>
    </div>
  );
};

export default ProjectPage;
