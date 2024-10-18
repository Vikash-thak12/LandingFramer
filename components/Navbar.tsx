'use client'
import React, { useState, useEffect } from 'react';
import DeskNavbar from './DeskNavbar';
import MobNavbar from './MobNavbar';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // You can adjust the width threshold as needed
  };

  useEffect(() => {
    // Check the screen size on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <MobNavbar /> : <DeskNavbar />}
    </div>
  );
};

export default Navbar;
