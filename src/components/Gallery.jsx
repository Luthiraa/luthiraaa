import React from 'react';
import './Gallery.css';
import IMG1 from '../assets/gallery/IMG (1).jpg';
import IMG2 from '../assets/gallery/IMG (2).jpg';
import IMG3 from '../assets/gallery/IMG (3).jpg';
import IMG4 from '../assets/gallery/IMG (4).jpg';
import IMG5 from '../assets/gallery/IMG (5).jpg';
import IMG6 from '../assets/gallery/IMG (6).jpg';
import IMG7 from '../assets/gallery/IMG (7).jpg';
import IMG8 from '../assets/gallery/IMG (8).jpg';
import IMG9 from '../assets/gallery/IMG (9).jpg';
import IMG10 from '../assets/gallery/IMG (10).jpg';
import IMG11 from '../assets/gallery/IMG (11).jpg';
import IMG12 from '../assets/gallery/IMG (12).jpg';
import IMG13 from '../assets/gallery/IMG (13).jpg';
import IMG14 from '../assets/gallery/IMG (14).jpg';
import IMG15 from '../assets/gallery/IMG (15).jpg';
import IMG16 from '../assets/gallery/IMG (16).jpg';

const Gallery = () => {
  return (
    <div>
        <div className='title'>
        <h1>Gallery</h1>
        </div>
 <section className="gallery">

  
<div className="image">
  <img
  src={IMG1}
  alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG2} 
     alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG3}
alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG4}
alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG5}
alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG6}
alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG7}
alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG8}
alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG9}
alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG10}
alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG11}
alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG12}
alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG13}
alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG14}
alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG15}
alt="image"
    className="image-hover"
  />
</div>
<div className="image">
  <img
  src={IMG16}
alt="image"
    className="image-hover"
  />
</div>
</section>
    </div>
   
  );
};

export default Gallery;
