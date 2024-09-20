import React, { useEffect } from 'react';
import './Project.css'; 
import $ from 'jquery';
const Project = ({ label, title, details, listItems, imgSrc, projectUrl }) => {
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
    <div className="project-container">
      <div className="project">
        <div className="project-content">
          <div className="project-label">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">{label}</a>
          </div>
          <h4 className="project-title">{title}</h4>
          <div className="project-details">
            <p>{details}</p>
            <ul>
              {listItems.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
        
        <div className="project-img">
          <img src={imgSrc} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Project;