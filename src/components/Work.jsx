import React, { useState ,useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import WorkElement from './WorkElement';
import Research from '../assets/Research.png';
import JunkShark from '../assets/JunkShark.png';
import OPS2 from '../assets/OPS2.png';
import './Work.css';
import Particles from './Particles';
import $ from 'jquery';
const Work = () => {
    
    const [state, setState] = useState(null); 
    const controls = useAnimation();
    const { ref, inView } = useInView();

    if (inView) {
        controls.start("visible");
    }
    useEffect(() => {
        const canvas = document.getElementById('container');
        const clone = document.getElementById('blurCanvasBottom');
        const cloneCtx = clone.getContext('2d');
        const ctx = canvas.getContext('2d');
    
        let ww = $(window).width();
        let wh = $(window).height();
        canvas.width = ww;
        canvas.height = wh;
    
        const partCount = 155;
        let particles = [];
    
        function particle() {
          this.color = `rgba(255,255,255,${Math.random()})`;
          this.x = randomInt(0, ww);
          this.y = randomInt(0, wh);
          this.direction = {
            x: -1 + Math.random() * 2,
            y: -1 + Math.random() * 2,
          };
          this.vx = 0.3 * Math.random();
          this.vy = 0.3 * Math.random();
          this.radius = randomInt(1, 2);
          this.float = function () {
            this.x += this.vx * this.direction.x;
            this.y += this.vy * this.direction.y;
          };
          this.changeDirection = function (axis) {
            this.direction[axis] *= -1;
          };
          this.boundaryCheck = function () {
            if (this.x >= ww) {
              this.x = ww;
              this.changeDirection('x');
            } else if (this.x <= 0) {
              this.x = 0;
              this.changeDirection('x');
            }
            if (this.y >= wh) {
              this.y = wh;
              this.changeDirection('y');
            } else if (this.y <= 0) {
              this.y = 0;
              this.changeDirection('y');
            }
          };
          this.draw = function () {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
          };
        }
    
        function clearCanvas() {
          cloneCtx.clearRect(0, 0, ww, wh);
          ctx.clearRect(0, 0, ww, wh);
        }
    
        function createParticles() {
          for (let i = 0; i < partCount; i++) {
            const p = new particle();
            particles.push(p);
          }
        }
    
        function drawParticles() {
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.draw();
          }
        }
    
        function updateParticles() {
          for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.float();
            p.boundaryCheck();
          }
        }
    
        createParticles();
        drawParticles();
    
        function animateParticles() {
          clearCanvas();
          drawParticles();
          updateParticles();
          cloneCtx.drawImage(canvas, 0, 0);
          requestAnimationFrame(animateParticles);
        }
    
        requestAnimationFrame(animateParticles);
        cloneCtx.drawImage(canvas, 0, 0);
    
        $(window).on('resize', function () {
          ww = $(window).width();
          wh = $(window).height();
          canvas.width = ww;
          canvas.height = wh;
          clearCanvas();
          particles = [];
          createParticles();
          drawParticles();
        });
    
        function randomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        }
      }, []);
    
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
                <h1 className="centered-title">Experience</h1>
                <WorkElement
                    label="May 2024 - Present"
                    title="Computational Modeling & Machine Learning Student Researcher"
                    details="Under the guidance of Dr. Paul Yoo, I am currently developing a computational simulation of non-invasive peripheral nerve recording where a finite element model of the human lower leg will be used to simulate electrical recordings of single fiber action potentials propagating along the saphenous nerve. This will then be used in a CNN machine leanring model inorder to predict outcomes with more complex models/simulations."
                    imgSrc={Research}
                />
                <WorkElement
                    label="January 2024 - May 2024"
                    title="Front-End Developer @ JunkShark"
                    details="Using React, I was able to develop a website for JunkShark, a local startup that specializes in junk removal. I was able to create a visually appealing website that was both user-friendly and responsive. I also integrated a booking system that allowed users to book appointments directly from the website."
                    imgSrc={JunkShark}
                />
                <WorkElement
                    label="June 2024 - August 2024"
                    title="IT & Office Assistant Intern @ Ontario Public Services"
                    details="During my summer internship at the Toronto Land Registry Office (LRO#66), I developed a Java application using Google's Cloud Vision API. This app was designed for camera-based scanning of large land registry pin datasets. One of my key contributions was the innovative sorting, formatting, and compiling of data into Excel, which significantly streamlined the data entry process. Additionally, I worked closely with the project team to gather and analyze data. Leveraging MS Excel, I created visualizations and charts that facilitated informed decision-making in the land registry process."
                    imgSrc={OPS2}
                />
            </motion.div>
        </div>
    );
};

export default Work;
