import React, { useEffect, useRef } from 'react'
import project1 from '../assets/images/1st.jpeg'
import project2 from '../assets/images/2nd.png'
import project3 from '../assets/images/3rd.png'
import project4 from '../assets/images/4th.png'
import project5 from '../assets/images/5th.jpg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  const workRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading
      if (headingRef.current) {
        const text = headingRef.current.textContent;
        headingRef.current.innerHTML = '';
        
        [...text].forEach((char, index) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.display = 'inline-block';
          span.style.opacity = 0;
          span.style.transform = 'translateY(25px)';
          headingRef.current.appendChild(span);
        });
        
        gsap.to(headingRef.current.children, {
          scrollTrigger: {
            trigger: '#work-content h1',
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          delay: 0.3
        });
      }

      // Animate project items with stagger effect
      gsap.from('#work-content-thing > div > div', {
        scrollTrigger: {
          trigger: '#work-content-thing',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });

      // Animate images with a slight delay after their containers
      gsap.from('.image-wrapper', {
        scrollTrigger: {
          trigger: '#work-content-thing',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.3
      });
    }, workRef)

    return () => ctx.revert()
  }, [])

  return (
    <div id="work-container" ref={workRef}>
      <div id="line"></div>
      <div id="work-content">
        <h1 ref={headingRef}>Work</h1>
        <div id="work-content-thing">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8vh' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '4vh' }}>
              <div id="work-content-thing-left">
                <h2>01</h2>
                <div style={{ display: 'flex', width: '1px' , height: '10px' , backgroundColor: '#999999' }}> </div>
                <p style={{ textAlign: 'justify' , width: '300px' }}>
                <span style={{ color: '#999999', fontStyle: 'italic' }}>Because waiting for slow internet is a personality test!</span> This Python-powered internet speed tester checks your download/upload speed, ping, latency, and packet loss—so you can prove once and for all that your ISP is lying.
                </p>
              </div>
              <div id="work-content-thing-right">
                <div className="image-wrapper">
                  <img src={project1} alt="Project 1" />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '4vh' }}>
            <div id="work-content-thing-right">
                <div className="image-wrapper">
                  <img src={project2} alt="Project 2" />
                </div>
              </div>
              <div id="work-content-thing-left">
                <h2>02</h2>
                <div style={{ display: 'flex', width: '1px' , height: '10px' , backgroundColor: '#999999' }}> </div>
                <p style={{ textAlign: 'justify' , width: '300px' }}>
                A sleek, animated portfolio built with HTML, CSS, JavaScript, and Tailwind CSS—because if a developer doesn't have a cool portfolio, do they even exist? Features smooth animations, modern styling, and just enough sass to impress recruiters.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '4vh' }}>
              <div id="work-content-thing-left">
                <h2>03</h2>
                <div style={{ display: 'flex', width: '1px' , height: '10px' , backgroundColor: '#999999' }}> </div>
                <p style={{ textAlign: 'justify' , width: '300px' }}>
                A fully responsive website built using React, Lenis, and ScrollTrigger to give a local business a digital glow-up. Because they deserves a website that's smoother than their customer service.
                </p>
              </div>
              <div id="work-content-thing-right">
                <div className="image-wrapper">
                  <img src={project3} alt="Project 3" />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '4vh' }}>
            <div id="work-content-thing-right">
                <div className="image-wrapper">
                  <img src={project4} alt="Project 4" />
                </div>
              </div>
              <div id="work-content-thing-left">
                <h2>04</h2>
                <div style={{ display: 'flex', width: '1px' , height: '10px' , backgroundColor: '#999999' }}> </div>
                <p style={{ textAlign: 'justify' , width: '300px' }}>
                A digital notebook built with React, Express.js, MongoDB, and Framer Motion—<span style={{ color: '#999999', fontStyle: 'italic' }}>because writing things down on paper is so last century.</span> Add schedules, lists, and notes with cool formatting, checkboxes, and animations that make productivity look fun.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '4vh' }}>
              <div id="work-content-thing-left">
                <h2>05</h2>
                <div style={{ display: 'flex', width: '1px' , height: '10px' , backgroundColor: '#999999' }}> </div>
                <p style={{ textAlign: 'justify' , width: '300px' }}>
                A food-ordering app built with React Native and Expo—because cravings deserve convenience. Smooth UI, seamless navigation, and a Menu. Crafted with love <span style={{ color: '#999999', fontStyle: 'italic' }}>(and a generous dose of debugging)</span>.
                </p>
              </div>
              <div id="work-content-thing-right">
                <div className="image-wrapper vertical">
                  <img src={project5} alt="Project 5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work