"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Footer.css';

const Navbar = ({ isOpen, closeNavbar, navHandler }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // To track the hovered item across both menus
  const [isMobile, setIsMobile] = useState(false); // To track if the user is on a mobile device

  // Check if the screen width is small enough to be considered a mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change the width as needed for your design
    };
    // Set initial state
    handleResize();
    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { name: 'HOMEPAGE', imgUrl: '/AcnAG/Navbar/Home.avif', route: '/home/' },
    { name: 'VERKAUF', imgUrl: '/AcnAG/Navbar/Verkauf.avif', route: '/sales/' },
    { name: 'CARROSSERIE', imgUrl: '/AcnAG/Navbar/Carrosserie.avif', route: '/corrosion/' },
    { name: 'ÜBER UNS', imgUrl: '/AcnAG/Navbar/About.avif', route: '/about/' },
  ];

  const currentImgUrl = hoveredIndex !== null ? menuItems[hoveredIndex]?.imgUrl : '';

  const handleInteraction = (index) => {
    if (isMobile) {
      // Mobile: Toggle the hovered index on tap
      setHoveredIndex(hoveredIndex === index ? null : index);
    } else {
      // Desktop: Set hovered index
      setHoveredIndex(index);
    }
  };

  return (
    <nav
      className={`z-[51] fixed top-0 left-0 h-screen w-screen bg-footer transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-500 z-[53] overflow-hidden md:pl-96 pl-4`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {currentImgUrl && (
          <div className="relative w-full h-full">
            <img src={currentImgUrl} className="w-full h-full object-cover" alt="Background" />
            <div className="absolute inset-0 bg-footer/70"></div> {/* Dark overlay */}
          </div>
        )}
      </div>

      {/* Animated SVG Backgrounds */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-300 ${
          hoveredIndex !== null && hoveredIndex < 4 ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="custom-shape-divider-bottom-1726424647">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#181818", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#2a2a2a", stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="custom-shape-divider-top-1726425485">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#181818", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#2a2a2a", stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative mt-20 w-full md:w-1/2 z-20 ">
        <div className="relative z-10">
          {/* Top Menu Items */}
          <ul className="text-2xl font-semibold">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => !isMobile && setHoveredIndex(index)} // Desktop hover
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                onClick={() => handleInteraction(index)} // Mobile click
              >
                <Link href={item.route}>
                  <div
                    onClick={navHandler}
                    className={`transition duration-300 flex gap-4 items-center h-16 ${
                      hoveredIndex === index
                        ? 'text-brGold'
                        : hoveredIndex !== null
                        ? 'text-[#615f5f] translate-x-2'
                        : 'text-brGold'
                    }`}
                  >
                    <div
                      className={`inline-block w-4 text-xs pr-2 transform transition-transform duration-300 ${
                        hoveredIndex === index ? 'translate-x-2' : ''
                      }`}
                    >
                      {`0${index + 1}`}
                    </div>
                    <div
                      className={`text-2xl md:text-4xl transform transition-transform duration-300 ${
                        hoveredIndex === index
                          ? '-translate-x-2'
                          : hoveredIndex !== null
                          ? 'translate-x-2'
                          : ''
                      }`}
                    >
                      {item.name}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Links */}
        <div className="px-5 md:px-10 mt-6">
          <ul className="text-sm flex flex-col gap-1 font-medium">
            {[
              { name: 'KARRIERE', icon: true, route: "/career/" },
              { name: 'IMPRESSUM', icon: true, route: "/impressum/" },
              { name: 'KONTAKT', icon: true, route: "/contact/" },
            ].map((item, index) => (
              <li
                key={index}
                className="group"
                onMouseEnter={() => !isMobile && setHoveredIndex(index + 4)} // Desktop hover
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                onClick={() => handleInteraction(index + 4)} // Mobile click
              >
                <Link href={item.route}>
                  <div
                    onClick={navHandler}
                    className={`transition duration-300 flex items-center ${
                      hoveredIndex === index + 4
                        ? 'text-brGold'
                        : hoveredIndex !== null
                        ? 'text-[#615f5f] translate-x-2'
                        : 'text-brGold'
                    }`}
                  >
                    <div
                      className={`transform transition-transform duration-300 flex text-lg gap-1 h-10 items-start ${
                        hoveredIndex === index + 4 ? '-translate-x-2' : ''
                      }`}
                    >
                      {item.name}
                      {item.icon && (
                        <span className="inline-block">
                          <img src="/icon/footer/open_2.svg" className="w-5 h-5 object-cover" alt={item.name} />
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
