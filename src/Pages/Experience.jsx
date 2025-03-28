import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import img1 from '../assets/images/certificates/new1.jpg'
import img2 from '../assets/images/certificates/img2.jpg'
import img3 from '../assets/images/certificates/img3.jpg'
import img4 from '../assets/images/certificates/img4.jpg'
import img5 from '../assets/images/certificates/img5.jpg'
import img6 from '../assets/images/certificates/img6.jpg'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const experienceRef = useRef(null)
  const headingRef = useRef(null)
  const learningRef = useRef(null)
  const [hoveredCert, setHoveredCert] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const previewRef = useRef(null)

  const experiences = [
    {
      role: "Front-End Developer Intern",
      company: "GrapeDawn",
      date: "Jan. 2025 - Present",
      description: "Contributed to web application development and enhancements for the ed-tech platform. and learned about the latest trends in web development."
    },
    {
      role: "Digital Content Creator & Social Media Strategist",
      company: "Prushal Technology Pvt. Ltd.",
      date: "Feb. 2024 - Apr. 2024",
      description: "Created user-centered designs by understanding business requirements and user feedback."
    },
    {
      role: "Freelance Web Developer & Designer",
      company: "Remote, Pune",
      date: "2023",
      description: "Designed and developed multiple web pages using HTML5, CSS, and JavaScript. Gained experience in responsive design and interactive web features."
    }
  ];

  const certifications = [
    { name: "ORACLE CERTIFIED FOUNDATIONS ASSOCIATE", year: "2024", image: img1 },
    { name: "GOOGLE ANDROID DEVELOPER VIRTUAL INTERNSHIP", year: "2024", image: img2 },
    { name: "ROBOTICS AND CONTROL BY IIT ROORKEE", year: "2024", image: img3 },
    { name: "FUNDAMENTALS OF DIGITAL IMAGE AND VIDEO PROCESSING", year: "2023", image: img4 },
    { name: "CYBERSECURITY VIRTUAL INTERNSHIP", year: "2023", image: img5 },
    { name: "INTRODUCTION TO WEB DEVELOPMENT", year: "2023", image: img6 }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the first heading
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
            trigger: '#experience-content h1',
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

      // Animate the & symbol
      const andSymbol = document.querySelector('#experience-content h1:nth-child(2)');
      if (andSymbol) {
        andSymbol.style.opacity = 0;
        andSymbol.style.transform = 'translateY(25px)';
        
        gsap.to(andSymbol, {
          scrollTrigger: {
            trigger: '#experience-content h1',
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 0.8
        });
      }

      // Animate the second heading
      if (learningRef.current) {
        const text = learningRef.current.textContent;
        learningRef.current.innerHTML = '';
        
        [...text].forEach((char, index) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.display = 'inline-block';
          span.style.opacity = 0;
          span.style.transform = 'translateY(25px)';
          learningRef.current.appendChild(span);
        });
        
        gsap.to(learningRef.current.children, {
          scrollTrigger: {
            trigger: '#experience-content h1',
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          delay: 0.5
        });
      }

      // Animate timeline items with stagger effect
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out'
      });

      // Animate timeline dots
      gsap.from('.timeline-dot', {
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        delay: 0.2
      });

      // Animate timeline dates
      gsap.from('.timeline-date', {
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.3,
        ease: 'power2.out',
        delay: 0.4
      });

      // Animate certifications heading
      const certHeading = document.querySelector('#certifications h1');
      if (certHeading) {
        const text = certHeading.textContent;
        certHeading.innerHTML = '';
        
        [...text].forEach((char, index) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.display = 'inline-block';
          span.style.opacity = 0;
          span.style.transform = 'translateY(25px)';
          certHeading.appendChild(span);
        });
        
        gsap.to(certHeading.children, {
          scrollTrigger: {
            trigger: '#certifications',
            start: 'top 60%',
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

      // Animate certification items
      gsap.from('.certification-div', {
        scrollTrigger: {
          trigger: '#certifications',
          start: 'top 60%',
          toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.5
      });

    }, experienceRef)

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      ctx.revert()
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (hoveredCert !== null && previewRef.current) {
      gsap.to(previewRef.current, {
        left: mousePos.x - 30,
        top: mousePos.y - 20,
        duration: 0.2,
        ease: "none"
      });
    }
  }, [mousePos, hoveredCert]);

  useEffect(() => {
    if (hoveredCert !== null && previewRef.current) {
      gsap.fromTo(previewRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        }
      );
    }
  }, [hoveredCert]);

  return (
    <div id="experience-container" ref={experienceRef}>
      <div id="line"></div>
      <div id="experience-content">
        <div>
          <div style={{ display: 'flex', width: '100%', flexDirection: 'row', gap: '16px', alignItems: 'center', textAlign: 'center' }}>
            <h1 ref={headingRef}>Experience</h1>
            <h1>&</h1>
          </div>
          <h1 ref={learningRef}>Learning</h1>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div id="certifications">
          <h1>Certifications</h1>
          <div className="certifications-container">
            <div className="certification-item">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCert(index)}
                  onMouseLeave={() => setHoveredCert(null)}
                  className="certification-div"
                >
                  <h3>{cert.name}</h3>
                  <h3>{cert.year}</h3>
                </div>
              ))}
            </div>
          </div>
          {hoveredCert !== null && (
            <div 
              ref={previewRef}
              className="certification-preview"
              style={{
                left: mousePos.x - 30,
                top: mousePos.y - 20,
                transform: 'translate(0, 0)'
              }}
            >
              <img src={certifications[hoveredCert].image} alt={certifications[hoveredCert].name} />
            </div>
          )}
        </div>
      </div>
      <div id="end-text">
          <h1>This is the part where you decide whether to contact me or pretend you never saw this website.</h1>
        </div>
    </div>
  )
}

export default Experience