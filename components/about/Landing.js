"use client";
import AnimatedText from "@/components/accets/common/AnimatedText"
import React, { useEffect, useState } from "react";
import MainButton from "../accets/MainButton";
import "./about.css";
import Partners from "@/components/accets/Partners";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function Landing() {
  const router = useRouter();

  const [color, setColor] = useState([
    "fill-slate-300 fill-opacity-50",
    "fill-slate-300 fill-opacity-50",
  ]);

  useEffect(() => {
    const changeColors = () => {
      setTimeout(() => {
        setColor([
          "fill-brGold fill-opacity-1",
          "fill-slate-300 fill-opacity-50",
        ]);
        setTimeout(() => {
          setColor(["fill-brGold fill-opacity-1", "fill-brGold fill-opacity-1"]);
          setTimeout(() => {
            setColor([
              "fill-slate-300 fill-opacity-50",
              "fill-slate-300 fill-opacity-50",
            ]);
            changeColors();
          }, 500);
        }, 400);
      }, 300);
    };
    changeColors();
  }, []);

  let a = 0;

  return (
    <div className="flex flex-col w-screen text-white overflow-x-hidden">
      <div className="w-full md:h-[113vh] overflow-hidden relative flex justify-center items-center bg-[#EAEFF2]">
        <div className="md:block hidden">
          <img
            src="AcnAG/About/About_ACNAG.avif"
            alt="Auto im Hintergrund"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:hidden block">
          <img
            src="/AcnAG/About/Banner2.avif"
            alt="Auto im Vordergrund"
            className="w-full h-screen object-cover"
          />
        </div>

        <div className="absolute top-0 md:max-h-[100vh] inset-0 bg-gradient-to-b"></div>
        <div className="z-2 flex flex-col items-center text-center w-[80%] md:top-[45%] top-[45%] translate-y-[-30%] left-[50%] translate-x-[-50%] absolute md:w-[63%] gap-2">
          <p
            className="md:text-[20px] text-sm font-medium"
          // data-aos="fade-up"
          // data-aos-delay="10"
          // data-aos-once="true"
          >
            Autocenter Niederbipp
          </p>
          <AnimatedText>
            <p
              className="text-lg md:text-4xl text-brGold font"
            >
              Ihr Experte für An- und Verkauf, Reparaturen, Spritzwerk und Carrosserie
            </p>
          </AnimatedText>

          <p
            className=" text-xs md:text-lg"
          // data-aos="fade-up"
          // data-aos-delay="70"
          // data-aos-once="true"
          >
            Im Autocenter Niederbipp bieten wir Ihnen erstklassige
            Dienstleistungen für den An- und Verkauf von Fahrzeugen,
            zuverlässige Reparaturen und Serviceleistungen, professionelle
            Lackierungen in unserem modernen Spritzwerk sowie präzise
            Karosseriearbeiten. Vertrauen Sie auf unsere Expertise und lassen
            Sie Ihr Fahrzeug wieder in neuem Glanz erstrahlen.
          </p>
          <div
            className="flex justify-center items-center  cursor-pointer"
            // data-aos="fade-up"
            // data-aos-delay="100"
            // data-aos-once="true"
            // data-aos-offset="0"
            onClick={() => router.push("/news/")}
          >
            MEHR ERFAHREN <MainButton />
          </div>
          <ul
            className="absolute w-full h-[10rem] bottom-[-15%] md:bottom-[-30%] flex justify-center z-20"
            data-aos-delay="0"
            data-aos-once="true"
          >
            <li className="absolute bottom-[10%]">
              <svg
                className={`${color[0]} md:w-[4rem] w-[2rem] h-[2rem] md:h-[4rem]`}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="15"
                viewBox="0 0 40 15"
                fill="none"
              >
                <path d="M20 9L0 0l16.182 13.35a6 6 0 0 0 7.636 0L40 0 20 9z" />
              </svg>
            </li>
            <li className="absolute bottom-0">
              <svg
                className={`${color[1]} md:w-[4rem] w-[2rem] h-[2rem] md:h-[4rem]`}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="15"
                viewBox="0 0 40 15"
                fill="none"
              >
                <path d="M20 9L0 0l16.182 13.35a6 6 0 0 0 7.636 0L40 0 20 9z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-screen flex justify-center items-center relative flex-col ">
        <div className="h-screen absolute top-0 inset-0 bg-gradient-to-b from-transparent to-black/50 z-1"></div>
        <div className="md:hidden block">
          <img
            src="AcnAG/About/Banner2.avif"
            alt="loading"
            className="w-full h-screen  object-cover "
          />
        </div>
        <div className="md:block hidden">
          <img
            src="AcnAG/About/Banner2.avif"
            alt="loading"
            className="w-full h-full  object-cover "
          />
        </div>
        <div className="z-2 flex flex-col items-center text-center w-[80%] top-[40%] md:top-[40%] translate-y-[-30%] left-[50%] translate-x-[-50%] absolute md:w-[63%] gap-2">
          {/* <AnimatedText> */}
          <p
            className="md:text-[20px] text-sm font-medium"
          >
            AutoCenter Niederbipp
          </p>
          {/* </AnimatedText> */}

          <AnimatedText>
            <p
              className="text-lg md:text-4xl  text-brGold"
            >
              Eröffnung am 2. August 2024
            </p>
          </AnimatedText>
          <p
            className=" md:text-lg text-xs"
          // data-aos="fade-up"
          // data-aos-delay="70"
          // data-aos-once="true"
          >
            Die offizielle Eröffnung des Autocenter Niederbipp fand am 2. August
            2024 statt. Von Anfang an haben wir uns darauf konzentriert, unseren
            Kunden hochwertige Dienstleistungen und herausragenden Service zu
            bieten. Unsere moderne Einrichtung und unser engagiertes Team
            gehören zu den besten in der Schweiz und sind darauf ausgelegt,
            sämtliche Bedürfnisse rund um Ihr Fahrzeug zu erfüllen. Seit dem
            Eröffnungstag arbeiten wir mit vollem Einsatz daran, die
            Zufriedenheit unserer Kunden sicherzustellen und uns einen festen
            Platz in der Region zu erarbeiten. Erleben Sie die Zukunft des
            Autocenter Niederbipp und entdecken Sie, warum wir als eine der
            besten Carrosserien in der Schweiz gelten.
          </p>
          <div
            className="flex justify-center items-center "
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
          >
            MEHR ERFAHREN <MainButton />
          </div>
        </div>
        <ul
          className="absolute w-full h-[10rem] bottom-[15%] md:bottom-[10%] flex justify-center z-20"
          data-aos-delay="0"
          data-aos-once="true"
        >
          <li className="absolute bottom-[10%]   ">
            <svg
              className={`${color[0]} md:w-[4rem] w-[2rem] h-[2rem] md:h-[4rem] `}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="15"
              viewBox="0 0 40 15"
              fill="none"
            >
              <path d="M20 9L0 0l16.182 13.35a6 6 0 0 0 7.636 0L40 0 20 9z" />
            </svg>
          </li>
          <li className="absolute bottom-0 ">
            <svg
              className={`${color[1]} md:w-[4rem] w-[2rem] h-[2rem] md:h-[4rem] `}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="15"
              viewBox="0 0 40 15"
              fill="none"
            >
              <path d="M20 9L0 0l16.182 13.35a6 6 0 0 0 7.636 0L40 0 20 9z" />
            </svg>
          </li>
        </ul>
      </div>

      <ImgCards />
      <div className="relative bg-[#202020] z-50 w-auto h-auto">
        <div className="w-screen h-[5%] md:h-[20%] top-0 z-10 absolute flex justify-center items-center">
          {/* if ypu want that section just uncomments the code below */}
          {/* <div className="relative bg-white/20 px-6 py-2 rounded-md">


            <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-wider shadow-md">
              Team
            </h1>
          </div> */}
        </div>
        <RracesCard num={a} />
      </div>
      <CarSH />
      <Partners />
    </div>
  );
}

export default Landing;

const CarSH = () => {
  return (
    <div className="w-screen md:h-[52vh] overflow-hidden relative flex justify-center items-center bg-cover bg-center">
      <div className="absolute top-0 h-[100vh] inset-0 bg-gradient-to-b from-transparent to-black/50 z-2"></div>
      {/* <div className='md:block hidden w-[30rem] h-[20rem] absolute bg-[#EAEFF2] top-[69%] left-[53%] z-1'></div> */}
      <div className="md:block hidden z-0 relative">
        <img
          src="AcnAG/About/Karriere.avif"
          alt="loading"
          className="w-full h-full  object-cover scale-125"
        />
        <div className="absolute top-0 bg-black/35 h-full w-full"></div>
      </div>
      <div className="md:hidden block">
        <img
          src="/About/front (2).avif"
          alt="loading"
          className="w-full md:w-full h-[70vh]  object-cover "
        />
      </div>  
      <div className="flex flex-col w-[35%] absolute top-[15%] left-[5%] gap-2 z-2">
        <div className="flex items-center text-brGold gap-2">
          <div className="bg-brGold h-[0.3px] w-[25%]"></div>KARRIERE
        </div>
        <div className="flex flex-col gap-4 pl-6 md:w-auto w-screen">
          <p className="md:text-4xl text-3xl font-bold">
            Unsere Suche nach Exzellenz
          </p>
          <div className="flex text-medium font-medium items-center">
            KARRIERECHANCEN <MainButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const ImgCards = () => {
  return (
    <div className="relative bg-[#222121]">
      <div className="flex flex-col w-[300vw] md:w-[100vw] h-[80vh] md:h-screen overflow-hidden md:mt-2 py-3 justify-center">
        {/* Title for News */}
        <AnimatedText>
          <h1 className="text-brGold md:text-3xl text-xl flex w-full justify-start md:px-12 items-end">
            News AutoCenter Niederbipp
          </h1>
        </AnimatedText>
        {/* for desktop */}
        <div className="justify-center items-center w-full h-full gap-4 md:flex hidden">
          <Card
            src={"AcnAG/News/eroeffnung-news.avif"}
            heading="AutoCenter Niederbipp"
            subHeading="Neu Eröffnung Auto Center Niederbipp"
            dis="Erleben Sie die Neueröffnung des Auto Centers Niederbipp in Niederbipp! Unsere hochmoderne Carrosserie-Werkstatt bietet erstklassigen Service und fortschrittliche Reparaturtechniken für alle Fahrzeugmarken."
          />
          <Card
            src={"AcnAG/News/ersatzwagen-news.avif"}
            heading="AutoCenter Niederbipp"
            subHeading="Unsere Ersaatzfahrzeuge – für jeden was dabei"
            dis="Entdecken Sie die neuen Ersatzfahrzeuge im Auto Center Niederbipp! Unsere Flotte umfasst das neueste Mercedes A-Klasse Modell, das höchsten Fahrkomfort und modernste Technologie bietet. Ideal für Ihre Mobilität während der Reparatur Ihres Fahrzeugs."
          />
          <Card
            src={"AcnAG/News/verkauf-news..avif"}
            heading="AutoCenter Niederbipp"
            subHeading="Erster Autoverkauf am neuen Standort"
            dis="Besuchen Sie uns am neuen Standort des AutoCenters Niederbipp und sichern Sie sich Ihren ersten Gebrauchtwagen mit Qualität und Garantie. Franco Mantellassi berät Sie persönlich."
          />
        </div>

        {/* for mobile */}
        <motion.div
          className="md:hidden flex justify-center items-center h-full gap-4 md:pt-5 px-[1%] md:overflow-hidden w-full overflow-x-auto relative z-[50]"
          drag="x"
          dragConstraints={{ left: -777, right: 0 }}
        >
          <div className="md:hidden block absolute z-50 w-10 h-10 top-8 left-8 -rotate-90">
            <img
              src="/icon/down.svg"
              className="animate-bounce object-cover w-full h-full"
            />
          </div>
          <Card
            src="AcnAG/News/eroeffnung-news.avif"
            heading="CARS"
            subHeading="Neu Eröffnung Auto Center Niederbipp"
            dis="Erleben Sie die Neueröffnung des Auto Centers Niederbipp in Niederbipp! Unsere hochmoderne Carrosserie-Werkstatt bietet erstklassigen Service und fortschrittliche Reparaturtechniken für alle Fahrzeugmarken."
          />
          <Card
            src="AcnAG/News/ersatzwagen-news.avif"
            heading="PASSION"
            subHeading="Unsere Ersaatzfahrzeuge – für jeden was dabei "
            dis="Entdecken Sie die neuen Ersatzfahrzeuge im Auto Center Niederbipp! Unsere Flotte umfasst das neueste Mercedes A-Klasse Modell, das höchsten Fahrkomfort und modernste Technologie bietet. Ideal für Ihre Mobilität während der Reparatur Ihres Fahrzeugs. "
          />
          <Card
            src={"AcnAG/News/verkauf-news.avif"}
            heading="AutoCenter Niederbipp"
            subHeading="Erster Autoverkauf am neuen Standort"
            dis="Besuchen Sie uns am neuen Standort des AutoCenters Niederbipp und sichern Sie sich Ihren ersten Gebrauchtwagen mit Qualität und Garantie. Franco Mantellassi berät Sie persönlich."
          />
        </motion.div>
      </div>

      {/* Title for Team */}
      <AnimatedText>
        <h1 className="text-brGold  md:text-3xl text-xl flex w-full justify-start md:px-12 mb-2">
          Team
        </h1>
      </AnimatedText>
    </div>
  );
};




const Card = ({ src, heading, subHeading, dis }) => {
  return (
    <div className="flex flex-col h-[90%] md:h-[85%] w-[90%] md:w-[30%] gap-1 bg-[#181818] overflow-hidden rounded-lg">
      <div className="w-full h-[45%] overflow-hidden">
        <img
          src={src}
          alt="card_1"
          className="object-cover w-full h-full hover:scale-110 transition-transform ease-linear"
        />
      </div>
      <div className="p-2">
        <div className="flex flex-col gap-2">
          <AnimatedText>
            <p className="text-brGold text-medium font-semibold">{heading}</p>
          </AnimatedText>
          <p className="text-medium font-bold">{subHeading}</p>
          <p className="text-[12px]">{dis}</p>
          <div className="flex items-center text-basic font-semibold">
            <svg
              className="transition-transform rotate-90 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="8"
              viewBox="0 0 16 8"
            >
              <path d="M9.547.732L16 8 8 4 0 8 6.453.732A1.996 1.996 0 0 1 8 0c.623 0 1.18.285 1.547.732z" />
            </svg>
            Zum Beitrag
          </div>
        </div>
      </div>
    </div>
  );
};

const RracesCard = ({ num }) => {
  const name = [
    {
      name: "Rijard Sadriu",
      src: "/AcnAG/Team/Sadriu.avif",
      title: "Geschäftsleitung Werkstatt",
    },
    {
      name: "Silas Rotzetter",
      src: "/AcnAG/Team/Rotzetter.avif",
      title: "Geschschäfsleitung Verkauf/Ankauf",
    },
    {
      name: "Minushe Sadriji",
      src: "/AcnAG/Team/Minushe.avif",
      title: "Sachbearbeiter Buchhaltung/Administration",
    },
    {
      name: "Seweryn Piekarz",
      src: "/AcnAG/Team/Mitarbeiter3.avif",
      title: "Automobil-Mechatroniker",
    },
    {
      name: "Agron Aliu",
      src: "/AcnAG/Team/Mitarbeiter1.avif",
      title: "Carrosserie & Spritzwerk",
    },
    {
      name: "Ridvan Ibrahimi",
      src: "/AcnAG/Team/Mitarbeiter2.avif",
      title: "Carrosserie & Spritzwerk",
    },
  ];

  return (
    <div className="md:grid flex flex-col grid-cols-2 w-full items-center justify-center">
      {name.map((value, index) => (
        <div
          key={index}
          className="relative h-[50vh] md:h-[70vh] overflow-hidden w-full"
          data-aos="zoom-in"
          data-aos-delay={50 * (index + 1)}
        >
          <img
            src={value.src}
            alt={value.name}
            className="md:w-full w-screen h-full object-cover transition-transform ease-linear duration-[5000] hover:scale-150"
          />
          <div className="absolute z-2 left-[50%] w-full translate-x-[-50%] bottom-[10%] text-center flex flex-col items-center">
            <p className="font-bold md:text-3xl text-xl">{value.title}</p>
            <AnimatedText>
              <p className=" md:text-5xl text-3xl">{value.name}</p>
            </AnimatedText>
            <div className="flex md:text-lg text-base font-medium justify-center items-center w-full">
              Auto Center Niederbipp <MainButton />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
