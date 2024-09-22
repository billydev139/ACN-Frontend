"use client";
import './globals.css';
import dynamic from 'next/dynamic';
import Footer from '@/components/footer';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

// Import AnimatedMenu correctly
const AnimatedMenu = dynamic(() => import('@/components/Home/Navbar'), { ssr: false });

export default function RootLayout({ children }) {
  const path = usePathname();
  const isTaskCompleteRoute = path === '/taskcomplete';

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Auto Center Niederbipp – Ihre Top Carrosserie Werkstatt und Gebrauchtwagenexperten</title>
        <meta name="description" content="Besuchen Sie das Auto Center Niederbipp für erstklassige Carrosserie-Reparaturen, hochwertige Autos und professionelle Fahrzeugaufbereitung. Erleben Sie unseren hervorragenden Service und modernste Technik in Niederbipp. Jetzt mehr erfahren!" />
      </head>
      <body className="font-supermolot relative">
        {/* Logo aligned with the Navbar */}

        <div
          className={`transition-opacity duration-500 w-[20vw] h-[20vh] absolute z-50
    ${isNavbarOpen ? 'opacity-0' : 'opacity-100'}
  `}
        >
          <Image
            width={500}
            height={500}
            src="/icon/footer/company_logo_2.svg"
            alt="Logo"
            className={`absolute transition-transform  object-cover
      top-2 left-4 w-32 h-32
      md:w-40 md:h-40 md:top-6 md:left-6
      xl:w-48 xl:h-48 xl:top-2 xl:left-8
      2xl:w-56 2xl:h-56 2xl:top-5
      ${isNavbarOpen ? 'translate-x-[200px]' : 'translate-x-0'}
      transition-all duration-500 ease-in-out
    `}
          />
        </div>



        {/* Pass the state and its setter to AnimatedMenu */}
        {!isTaskCompleteRoute && <AnimatedMenu isOpen={isNavbarOpen} setIsOpen={setIsNavbarOpen} />}

        {/* Only show children if the Navbar is not open */}
        <main>{children}</main>

        {!isTaskCompleteRoute && <Footer />}

        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7HibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        ></script>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  );
}
