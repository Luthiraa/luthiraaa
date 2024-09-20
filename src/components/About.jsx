import React from 'react';
import image from '../assets/pfp-fake.jpg';
import PFP from '../assets/PFP.jpg';
import './About.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const About = () => {
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
>          
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-container">
                <div className="about">
                    <div className="about-content">
                        <div className="about-details">
                            <p>Hi, my name is Luthira, a 2nd year Electrical Engineering student at the University Of Toronto. Prior to UofT I was a student at Dr. Norman Bethune CI, a school located in North Scarborough.</p>
                            <p>Currently, I am interested in the IoT space, systems integration and medtech, exploring how different devices and technologies can work together seamlessly to improve efficiency and enhance user experiences, hence leading me to pursue an EE degree. </p>
                            <p>Outside of the classroom, you can find me camping, on long bike rides, or in the gym. I also love taking photos, editing and designing things.</p>
                        </div>
                        <div className="top-skills">
                            <h2>Top Skills</h2>
                            <div className="skills-container">
                                <div>Python | C | C++ | JavaScript(React) MatLab | Java | Go</div>

                            </div>
                        </div>
                    </div>
                    <div className="about-img">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    );
};

export default About;
