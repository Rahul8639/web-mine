import React, { useEffect, useState, useCallback, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const CustomScrollbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const hideTimeoutRef = useRef(null);
  const lenisRef = useRef(null);

  const resetHideTimer = useCallback(() => {
    // Clear existing timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    // Set new timeout to hide after 7 seconds
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 7000);
  }, []);

  const handleScroll = useCallback((e) => {
    const currentScroll = e?.animatedScroll || 0;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (currentScroll / totalHeight) * 100;
    
    // Show scrollbar on first scroll or if already shown before
    if (!hasScrolled && currentScroll > 0) {
      setHasScrolled(true);
    }
    
    if (currentScroll > 0) {
      setIsVisible(true);
      resetHideTimer();
    }
    
    requestAnimationFrame(() => {
      setScrollPosition(scrollPercentage);
    });
  }, [hasScrolled, resetHideTimer]);

  const handleBarClick = (e) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const clickPosition = (e.clientY - rect.top) / rect.height;
    
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = totalHeight * clickPosition;

    // Use Lenis for smooth scrolling
    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetScroll, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }

    // Reset hide timer on click
    resetHideTimer();
  };

  const handleMouseEnter = () => {
    // Keep visible while hovering
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    // Start hide timer when mouse leaves
    resetHideTimer();
  };

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2
    });

    // Lenis scroll handler
    lenisRef.current.on('scroll', handleScroll);

    // RAF for Lenis
    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <div 
      className={`custom-scrollbar ${isVisible ? 'visible' : ''}`}
      onClick={handleBarClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="scroll-progress" 
        style={{ height: `${Math.min(Math.max(scrollPosition, 0), 100)}%` }}
      />
    </div>
  );
};

export default CustomScrollbar; 