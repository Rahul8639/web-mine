import React from 'react'
import '../index.css'

const Header = () => {

  const scrollToSection = (sectionId) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="header-container">
        <div id="header-buttons">
          <button onClick={() => scrollToSection('top')}>Home</button>
          <button onClick={() => scrollToSection('work-container')}>Work</button>
          <button onClick={() => scrollToSection('about-container')}>About</button>
          <button onClick={() => scrollToSection('contact-container')}>Contact</button>
        </div>
      </div>
    </>
  )
}

export default Header