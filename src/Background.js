import React, { useEffect } from 'react';
import './Background.css';

const Background = () => {
  useEffect(() => {
    const generateGradient = () => {
      const colors = ['#0f4c75', '#3282b8', '#bbe1fa']; // Customize with your desired colors
      const angle = Math.floor(Math.random() * 360); // Random angle for gradient
      const gradient = `linear-gradient(${angle}deg, ${colors.join(', ')})`;
      return gradient;
    };

    const setRandomBackground = () => {
      const gradient = generateGradient();
      document.querySelector('.gradient').style.background = gradient;
    };

    const animateBackground = () => {
      setRandomBackground();
      setInterval(setRandomBackground, 5000); // Change gradient every 5 seconds
    };

    animateBackground();

    return () => {
      clearInterval(animateBackground);
    };
  }, []);

  return (
    <div className="background">
      <div className="gradient"></div>
    </div>
  );
};

export default Background;
