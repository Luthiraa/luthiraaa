import React from 'react';
import './WorkElement.css';

const WorkElement = ({ label, title, details, imgSrc }) => {
  return (
    <div className="work-container">
      <div className="work">
        <div className="work-content">
        <div className="work-label">{label}</div>
          <h4 className="work-title">{title}</h4>
          <div className="work-details">
            <p>{details}</p>
          </div>
        </div>
        
        <div className="work-img">
          <img src={imgSrc} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default WorkElement;