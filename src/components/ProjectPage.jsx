import React, { useState } from "react";
import Project from "./Project";
import Nebula from "../assets/Nebula.png";
import dev from "../assets/dev.png";
import IWB from "../assets/IWB.png";
import Mosaic from "../assets/Mosiac.png";
import TwistedPixx from "../assets/TwistedPixx.png";
import FraudSentry from "../assets/FraudSentry1.png"
import V1 from "../assets/V1.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import minigesture from "../assets/minigesture.png";
import NinjaBrain from "../assets/NinjaBrain.png";
import Visualizer from "../assets/Visualizer.png";
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
        label="Study Companion"
        title="NinjaBrain"
        details = {"NinjaBrain is a study companion app developed in the 36-hour IgnitionHacks, Hackathon. Users simply take a picture of their nots and the app will intelligently ocnvert it into questions in the form of multiple choice, short asnwer or long ans wer questions. This is built with a React frontend and a Python backend with the help of the Google Cloud Vision API for OCR and fine-tuned LLM via Vertex AI for question generation. It also features a SQL database for user authentication and storage of user sessions/questions."}
        listItems={["Flask","Vertex AI","Google Cloud Vision","SQL"]}
        imgSrc={NinjaBrain}
        />
       <Project
        label="DSA"
        title="Algorithm Visualizer"
        details={"This project was created to help visualize sorting algorithms. The front end was created using React and the back end was created using Python. The back end features sorting algorithms such as bubble sort, quick sort, and merge sort. The front end features a simple UI to select the sorting algorithm and the speed of the visualization. Future implementations will invlude more if not all algorithms and possibly search algorithms :)"}
        listItems={["Python","Flask","React","Uvicorn","DSA"]}
        imgSrc={Visualizer}
      />
       <Project
        label="LR - Fraud Detection" 
        title="FraudSentry"
        details={"This project was a part of a collabrotive project which aimed to detect past fraudulent transactions. The backend features a simple logistic regression model with a single hidden layer neural network using raw numpy, pandas, and tensorflow. We achived a 98.345% accuracy for its binary catigorical output. A simple front end was created using React and Flask to connect the backend. Next steps for this project is to implement a real-time detection system."}
        listItems={["Python","Flask","TensorFlow","React","Uvicorn"]}
        imgSrc={FraudSentry}
      />
       <Project
        label="LSTM - Gesture Recognition"
        title="MiniGestures"
        details="MiniGestures is a gesture recognition system for android to automate and accelerate daily tasks. I chose an LSTM model for its 3 gate control flow which was ideal for processing sequential data. This also reduced the training time/data required by 75%. The gesture data is represented as temporal sequences where each frame corresponds to a certain time point. Due to hardware limitations, it was only able to achive an accuracy of 68.7% and 0.5 loss."
        listItems={["Python", "OpenCV", "TensorFlow","Keras","ReactNative"]}
        imgSrc={minigesture}
      />
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
            <Project
        label="Youtube"
        title="Twisted Pix - Travel & Photography"
        details={`Twisted Pix is a travel and photography YouTube channel that I started in 2020. I have always had a passion for photography and videography, and this channel has allowed me to share my experiences with the world. I have been able to travel to many different countries/provinces and capture some amazing footage. This allowed me to learn about video editing, and the importance of storytelling.`}
        listItems={["Premier Pro", "Motion Graphic", "Photography"]}
        imgSrc={TwistedPixx}
      />
    </motion.div>
    </div>
  );
};

export default ProjectPage;
