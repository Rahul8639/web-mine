import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading letter by letter
      if (headingRef.current) {
        // Create spans for each letter
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
        
        // Animate each letter
        gsap.to(headingRef.current.children, {
          scrollTrigger: {
            trigger: '#about-content h1',
            start: 'top 90%',
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

      // Animate paragraphs with stagger effect
      gsap.from('#about-content-paragraph p', {
        scrollTrigger: {
          trigger: '#about-content-paragraph',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      })

      // Animate the exit text
      gsap.from('#about-content-exit p', {
        scrollTrigger: {
          trigger: '#about-content-exit',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
    }, aboutRef)

    return () => ctx.revert()
  }, [])

  return (
    <div id="about-container" ref={aboutRef}>
      <div id="line"></div>
      <div id="about-content">
        <h1 ref={headingRef}>Welcome!</h1>
        <div id="about-content-paragraph">
          <p>
            I'm Rahul Prasad—just another guy who decided sleep is overrated and debugging is a personality trait. I write code, break code, and sometimes even fix it <span style={{ color: '#999999' }}>(miraculously)</span>. I specialize in turning caffeine into functional <span style={{ color: '#999999' }}>(mostly)</span> applications and pretending to understand error messages.
          </p>
          <p>
            I'm a Computer Science student at Ajeenkya DY Patil University, set to graduate in 2025 <span style={{ color: '#999999' }}>(assuming my code doesn't crash my degree)</span>. As a developer, I have excellent knowledge of C/C++, HTML5, CSS, Tailwind CSS, JavaScript, Next.js, React, and more 🚀 <span style={{ color: '#999999' }}>(a.k.a. the stuff that keeps my brain occupied at 2 AM)</span>.
          </p>
          <p>
            Beyond coding, I like to pretend I'm a tech guru on Stack Overflow, sharing insights and learning while secretly copying solutions from there. When I'm not debugging my existence, you'll find me capturing moments through photography 📸, editing videos, or designing graphics—because why limit myself to just breaking websites when I can break pixels too?
          </p>
          <p>
            And obviously, this entire website is made by me—except for the bugs. If you find any, feel free to report them through the Contact section, so I can <span style={{ fontStyle: 'italic' }}>conveniently ignore them.</span> <span style={{ color: '#999999' }}>(just kidding… maybe)</span>
          </p>
        </div>
        <div id="about-content-exit">
          <p>
            So yeah, that's all you need to know about me—unless you're a recruiter, in which case, I'm way more impressive.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About