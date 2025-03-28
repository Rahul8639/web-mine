import React, { useEffect, useState, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
import gsap from 'gsap';
import '../index.css';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const numberRef = useRef(null);
  const centerTextRef = useRef(null);
  const isComplete = useRef(false);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 50
  });

  useEffect(() => {
    const isInSession = sessionStorage.getItem('isInSession');
    
    if (isInSession) {
      setShowLoader(false);
      return;
    }

    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setStartCount(true);
      motionValue.set(100);
    }, 100);
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (numberRef.current) {
        numberRef.current.innerHTML = `<span style="margin-right: 5px;">/</span>${Math.round(latest)}`;

        // Update progress bar
        const progressBar = document.querySelector('.loader-progress');
        if (progressBar) {
          progressBar.style.height = `${latest}%`;
        }

        // Update welcome text opacity only
        if (centerTextRef.current) {
          centerTextRef.current.style.opacity = latest / 100;
        }

        // Check if counting is complete
        if (Math.abs(latest - 100) < 0.1 && !isComplete.current) {
          isComplete.current = true;
          setTimeout(() => {
            setTimeout(() => {
              // Instead of adding slide-up class, trigger GSAP animation
              gsap.to('.loader-container', {
                yPercent: -100,
                duration: 2,
                ease: "power4.inOut", // This creates a fast start, slow end curve
                onComplete: () => {
                  setShowLoader(false);
                  sessionStorage.setItem('isInSession', 'true');
                  document.body.style.overflow = 'auto';
                }
              });
            }, 1000);
          }, 200);
        }
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  if (!showLoader) return null;

  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-center-text" ref={centerTextRef}>
          <div className="text-wrapper">
            {'welcoMe'.split('').map((char, index) => (
              <span key={index} className="char" style={{ display: 'inline-block' }}>
                {char}
              </span>
            ))}
          </div>
        </div>
        <div className="loader-number">
          <span ref={numberRef}>0</span>
        </div>
        <div className="loader-bar">
          <div className="loader-progress" />
        </div>
      </div>
    </div>
  );
};

export default Loader;