"use client";
import React, { useEffect, useState, useRef } from 'react';
import './contact.css';
import Content from './Content';
import AnimatedText from '../accets/common/AnimatedText';

function ContactUs() {
  const [screen, setScreen] = useState(0);


  const USESCROLL = (progressPercentage) => {
    if (progressPercentage > 75) {
      setScreen(4);
    } else if (progressPercentage > 30) {
      setScreen(3);
    } else if (progressPercentage > 15) {
      setScreen(2);
    } else {
      setScreen(1);
    }
  };


  return (
    <div className='flex flex-col w-full h-auto text-white bg-[#202020] relative top-0'>
      <div className='w-full relative z-10'>
        <div className='hidden md:block w-full h-screen'>
          <img src="AcnAG/Kontakt/Header/Kontakt_Header.jpeg" loading='lazy' alt="loading" className='w-full h-full object-cover' />
        </div>
        <div className='md:hidden block w-full h-screen'>
          <img src="/AcnAG/Kontakt/Header/Kontakt_Header.jpeg" loading='lazy' alt="loading" className='w-full h-full object-cover' />
        </div>
        <div className='absolute md:w-[30%] w-[50%] flex flex-col gap-3  top-[50%] translate-y-[-50%] left-[10%] text-white'>
          <div className='md:text-2xl text-xl font-bold' data-aos="fade-up" data-aos-delay="50">Hauptstandort</div>
          <div className='flex flex-col w-full'>
            <AnimatedText>
              <div className='font-extrabold text-2xl md:text-5xl w-full text-brGold'>Autocenter Niederbipp AG</div>
            </AnimatedText>
          </div>
          <div className='flex flex-col gap-1'>
            <AnimatedText>
              <div className='md:text-xl text-sm font-medium'>Leebrütimattweg 3, 4704 Niederbipp</div>
            </AnimatedText>
            <AnimatedText>
              <div className='md:text-xl text-sm font-medium'>+41 32-6330063</div>
            </AnimatedText>

          </div>
        </div>
      </div>

      <section className='w-screen h-auto mt-4 md:mt-0 flex text-white relative'>
        <div className='absolute w-full h-auto translate-y-[-10%] z-0'>
          <img src="/background/Rectangle 156.svg" className='w-full h-full object-cover' />
        </div>

        <div className='md:block left h-screen w-1/3 sticky top-0 flex'>
          <div className='xl:flex hidden  w-full justify-end md:pr-20 md:py-[76px] relative gap-1'>
            <div className='flex flex-col gap-3 font-semibold font-xl'>
              <div className={`${screen === 1 ? "text-brGold":"text-white"}`}>Kontaktdaten</div>
              <div className={`${screen === 2 ? "text-brGold":"text-white"}`}>Transport Service</div>
              <div className={`${screen === 3 ? "text-brGold":"text-white"}`}>Kontaktdaten</div>
              <div className={`${screen === 4 ? "text-brGold":"text-white"}`}>Standort</div>
            </div>
          </div>
        </div>

        <div className='right h-auto w-full xl:w-2/3'>
          <Content GetValue={USESCROLL} />
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
