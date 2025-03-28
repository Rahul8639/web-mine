import React from 'react'
import '../index.css'
import About from './About'
import Contact from './Contact'
import Work from './Work'
import Experience from './Experience'
import resume from '../assets/doc/Resume.pdf'

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div id="home-container">
        <div id="home-content">
          <h1>I'm <span id='home-name'>Rahul,</span> <br /> a <span>good</span> <span id='home-student'>Student</span> & <span id='home-developer'>Developer</span> <br /> Based in India.</h1>
          <div id='home-content-paragraph'>
            <p>Rahul loves to code and build cool stuff—except when the bugs start acting like they<br /> pay rent. He occasionally writes code that works on the first try <span id='cut-through'>a miracle</span> by his brain <span id='cut-through'>chatGPT</span>, and<br /> firmly believes that 'console.log' is a valid debugging strategy.</p>
            <p>Welcome to his chaotic masterpiece of creativity!</p>
          </div>
        </div>
        <div id="home-button">
          <button onClick={() => scrollToSection('contact-container')}>Contact With Me <i className="ri-arrow-right-up-line"></i></button>
          <button onClick={() => window.open(resume, '_blank')}>Resume <i className="ri-article-line"></i></button>
        </div>
      </div>
      <About />
      <Work />
      <Experience />
      <Contact />
    </>
  )
}

export default Home 