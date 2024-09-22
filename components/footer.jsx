"use client";
import React, { useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#181818] max-w-screen overflow-x-hidden">
      <footer className="footer bg-[#181818]">
        <div className="w-full text-2xl font-light flex justify-center items-end">
          <div className="w-full h-[25vh] relative flex justify-center items-center">
            <div className="w-full h-full bg-black/90 absolute z-1"></div>
            <img
              src="/AcnAG/Footer/footer.avif"
              alt="footer"
              className="w-full h-full object-cover z-0"
            />
            
          </div>
        </div>
        
        {/* pages part */}
          <div className=" w-full md:h-[25%] h-auto bg-footer flex flex-col items-center  relative">
              <img src="/icon/footer/company_logo_2.svg" alt="LOGO" className="object-cover w-52 h-52 absolute top-0"/>
              <div className="mt-20">
                <NewFooter/>
              </div>
          </div>
      </footer>

      <div className="w-full h-[0.3px] bg-gray-600 "></div>
      <div className="bg-[#181818] py-1 text-white md:mt-4 md:px-20">
        <SocialMedias />
      </div>
      <div className="w-full flex h-auto justify-center items-center border-t-1 border-t-gray-600 bg-[#181818] text-white">
        <div className="md:w-2/3 w-[80%] text-xs text-center px-15 py-10">
          Auto Center Niederbipp AG - Ihr erstklassiges Carrosserie-Unternehmen
          in der Schweiz, spezialisiert auf Fahrzeugverkauf, hochwertige
          Carrosseriearbeiten und professionelle Lackierungen. Unser
          Unternehmen, ansässig in Niederbipp, steht für unvergleichliche
          Qualität und herausragenden Kundenservice. Ob Fahrzeugreparaturen,
          Lackierarbeiten oder der Kauf eines neuen Fahrzeugs – die Auto Center
          Niederbipp AG ist Ihre erste Wahl. Besuchen Sie uns, um erstklassige
          Dienstleistungen zu erleben und zu verstehen, warum wir in der Region
          führend sind.
          <div style={{ marginTop: "10px" }}></div>
          Smatik GmbH - Ihr Partner für professionelle Webseitenentwicklung und
          Webdesign. Die Smatik GmbH bietet maßgeschneiderte Web-Lösungen, die
          Ihre Online-Präsenz stärken und Ihr Geschäft voranbringen. Mit einem
          hochqualifizierten Team und einem Fokus auf Performance und
          Benutzerfreundlichkeit erstellen wir Webseiten, die Ihre Marke
          hervorheben und Ihren Online-Erfolg maximieren. Vertrauen Sie auf
          Smatik GmbH für innovative und effektive Webdesign-Dienstleistungen.
          <div style={{ marginTop: "10px" }}></div>
          Urheberrecht 2024 - Alle Rechte vorbehalten.
        </div>
      </div>
      <div className="w-full p-3 font-light text-xl text-white flex border-t-1 border-t-gray-600 justify-center items-center">
        <p>Powered by </p>
        <img
          src="/Smtak_logo.svg"
          alt="Smatik Logo"
          className="w-32 h-auto ml-2"
        />
      </div>
    </div>
  );
};


const NewFooter = () => {
  return (
    <div className="w-full text-white py-4">
      <div className="flex justify-center w-full">
        <div className="flex flex-col md:flex-row md:w-full md:px-0 px-4 w-[100vw] flex-wrap space-y-3 md:space-y-0 md:space-x-4 text-sm items-start md:items-center">
          {/* Footer items */}
          {FooterData.map((item, index) => (
            <div key={index} className="flex items-center space-x-1">
              <span>{item.name}</span>
              {item.icon && (
                <img
                  src="/icon/footer/open.svg"
                  alt={`${item.name} icon`}
                  className="w-4 h-4"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FooterData=[{
  name:'HOME',
  icon:false
},
{
  name:'ÜBER UNS',
  icon:false
},
{
  name:'KARRIERE',
  icon:true
},
{
  name:'KOMTAKT',
  icon:true
},
{
  name:'ACN GROUP',
  icon:true
},
{
  name:'IMPRESSUM',
  icon:true
},
{
  name:'CARROSSERIE',
  icon:true
},
{
  name:'ERSATZWÄGEN',
  icon:false
}]




const SocialMedias = () => {


  const data = [
    {
      name: "INSTAGRAM",
      src: (
        <ion-icon
          name="logo-instagram"
          style={{ width: "24px", height: "24px", color: "#B29146" }}
        ></ion-icon>
      ),
      href: "https://www.instagram.com/acn_carrosserie?igsh=dGZ5bmw1djNkcHAw",
    },
    {
      name: "LINKEDIN",
      src: (
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ width: "24px", height: "24px", color: "#B29146" }}
        />
      ),
      href: "https://www.linkedin.com/company/autocenter-niederbipp/?viewAsMember=true",
    },
    {
      name: "TIKTOK",
      src: (
        <FontAwesomeIcon
          icon={faTiktok}
          style={{ width: "24px", height: "24px", color: "#B29146" }}
        />
      ),
      href: "https://www.tiktok.com/@acn_carrosserie?_t=8o6r9hhMV9M&_r=1",
    },
    {
      name: "AUTOSCOUT24",
      src: (
        <FontAwesomeIcon
          icon={faXTwitter}
          style={{ width: "24px", height: "24px", color: "#B29146" }}
        />
      ),
      href: "https://www.autoscout24.ch/de/s/seller-2668979",
    },
  ];

  return (
    <div className="w-full">
      <div className="md:w-auto w-full flex flex-col md:flex-row justify-around">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex flex-col md:items-center items-start md:gap-4 md:mb-4 px-4 md:w-[20%] w-screen "
          >
            <div className="flex items-center md:gap-16 justify-between md:w-auto w-full">
              <a href={value.href}>
                <div className="flex gap-2 md:text-xl text-sm tableRow">
                  <div>{value.src}</div>
                  <div className="flex gap-2 md:text-xl text-sm text-brGold">
                    <p>{value.name}</p>
                  </div>
                </div>
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Footer;
