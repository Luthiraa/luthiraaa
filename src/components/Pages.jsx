import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Pages.css';
const Pages = () => {
  useEffect(() => {
    const $links = document.querySelectorAll('.menu__link');
    const targetLink = { centerX: 0, centerY: 0 };

    const mouseMove = ({ clientX, clientY, target }) => {
      const x = (clientX - targetLink.centerX) * 0.5;
      const y = (clientY - targetLink.centerY) * 0.5;

      gsap.to(target, { x, y });
    };

    const mouseover = ({ target }) => {
      const { left, top, width, height } = target.getBoundingClientRect();

      targetLink.centerX = left + width / 2;
      targetLink.centerY = top + height / 2;

      target.addEventListener('mousemove', mouseMove);
    };

    const mouseleave = ({ target }) => {
      target.removeEventListener('mousemove', mouseMove);

      targetLink.centerX = 0;
      targetLink.centerY = 0;

      gsap.killTweensOf(target);
      gsap.to(target, { x: 0, y: 0, duration: 0.2 });
    };

    $links.forEach(($link) => {
      $link.addEventListener('mouseover', mouseover);
      $link.addEventListener('mouseleave', mouseleave);
    });

    return () => {
      $links.forEach(($link) => {
        $link.removeEventListener('mouseover', mouseover);
        $link.removeEventListener('mouseleave', mouseleave);
      });
    };
  }, []);

  return (
    <div className="wrapper">
      <nav className="menu">
        <a href="#Ho" className="menu__link">
          link
        </a>
        <a href="#" className="menu__link">
          link
        </a>
        <a href="#" className="menu__link">
          link
        </a>
        <a href="#" className="menu__link">
          link
        </a>
      </nav>
    </div>
  );
};

export default Pages;
