import React, { useEffect } from 'react';

const DynamicTitle = () => {
  useEffect(() => {
    const titles = [
      "Rahul Prasad",
      "👈 That's me"
    ];

    let currentIndex = 0;
    let timeoutId;

    const changeTitle = () => {
      document.title = titles[currentIndex];
      currentIndex = (currentIndex + 1) % titles.length;
      
      // Schedule next title change after 6 seconds
      timeoutId = setTimeout(changeTitle, 8000);
    };

    // Start the title changes after 6 seconds
    timeoutId = setTimeout(changeTitle, 8000);

    // Cleanup function to clear timeout when component unmounts
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default DynamicTitle; 