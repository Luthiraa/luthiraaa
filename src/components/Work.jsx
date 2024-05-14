import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import WorkElement from './WorkElement';
import Research from '../assets/Research.png';
import JunkShark from '../assets/JunkShark.png';
import OPS from '../assets/OPS.png';
import OPS2 from '../assets/OPS2.png';
import './Work.css'


const Work = () => {
    const [state, setState] = useState(null); 
    const controls = useAnimation();
    const { ref, inView } = useInView();

    if (inView) {
        controls.start("visible");
    }
    return (
        <div>
   <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{ duration: 1 }}
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -100 }
                }}
                className="card"
            ><h1 className="centered-title">Experience</h1><WorkElement
    label="May 2024 - Present"
    title="Computational Modeling & Machine Learning Student Researcher"
    details="Under the guidance of Dr. Paul Yoo, I am currently working on a project that involves the development of a computational + machine learning model to simulate the results of a study done to treat overactive bladders using electrical nerve stimulation. More updates to come as the summer progresses."
    imgSrc={Research}
/>
<WorkElement
    label="Janurary 2024 - May 2024"
    title="Front-End Developer @ JunkShark"
    details="Using React, I was able to develop a website for JunkShark, a local startup that specializes in junk removal. I was able to create a visually appealing website that was both user-friendly and responsive. I also integrated a booking system that allowed users to book appointments directly from the website."
    imgSrc={JunkShark}
/>
<WorkElement
    label="June 2024 - August 2024"
    title="Project Intern @ Ontario Public Services"
    details="
    During my summer internship at the Toronto Land Registry Office (LRO#66), I developed a Java application using Google's Cloud Vision API. This app was designed for camera-based scanning of large land registry pin datasets. One of my key contributions was the innovative sorting, formatting, and compiling of data into Excel, which significantly streamlined the data entry process. Additionally, I worked closely with the project team to gather and analyze data. Leveraging MS Excel, I created visualizations and charts that facilitated informed decision-making in the land registry process."
    imgSrc={OPS2}
/> </motion.div>
            
        </div>
    );
};

export default Work;