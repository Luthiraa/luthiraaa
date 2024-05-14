import React from 'react';
import './Project.css'; 

const Project = ({ label, title, details, listItems, imgSrc }) => {
  return (
    <div className="project-container">
      <div className="project">
        <div className="project-content">
          <div className="project-label">{label}</div>
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