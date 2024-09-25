"use client";
import React, { Suspense, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import MainButton from "../accets/MainButton";
import AnimatedText from "../accets/common/AnimatedText";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="flex z-10 min-h-[220vh] py-52 overflow-hidden  antialiased relative  flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-10 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse  space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-full relative md:mx-auto py-20 md:py-40 md:px-4 w-full left-0 top-20">
      <video
        src="AcnAG/Video/Second.mp4"
        className="w-full min-h-[70vh] md:min-h-screen object-cover absolute z-0 top-[90%] md:top-[0%]"
        data-aos="zoom-in"
        muted
        loop
        autoPlay
      />
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-lg md:text-5xl text-white absolute z-1 top-[130%] md:top-[100%] left-[10%]"
      >
      <span className="text-brGold flex flex-col font">
        <AnimatedText>
        Autocenter Niederbipp
        </AnimatedText>
        </span>
        <span> Ihre Experten für Carrosserie und mehr</span>
      </div>
      <div
        className="max-w-2xl text-xs md:text-lg mt-8 text-white  absolute z-1 top-[150%] md:top-[130%] left-[10%]"
      >
        Willkommen im Autocenter Niederbipp, Ihrer erstklassigen Anlaufstelle
        für alle Anliegen rund um Ihr Fahrzeug. Unsere umfassenden
        Dienstleistungen beinhalten An- und Verkauf von Fahrzeugen, schnelle und
        zuverlässige Reparaturen und Wartungen, hochwertige Lackierungen in
        unserem Spritzwerk und präzise Karosseriearbeiten, um Ihr Auto wieder in
        Topform zu bringen. Besuchen Sie uns und erleben Sie herausragenden
        Service und höchste Qualität. Autocenter Niederbipp – Ihr Partner für
        Mobilität.
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
  };
  translate: MotionValue<number>;
}) => {
  const [text, setText] = useState("");
  const [des, setDes] = useState("");
  const [btn, setBtn] = useState(false);

  const handelText = () => {
    setText(product.title);
    setDes(product.description);
    setBtn(true);
  };

  const handelText_2 = () => {
    setText("");
    setDes("");
    setBtn(false);
  };

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-60 w-[20rem] md:h-80 md:w-[24rem] relative flex-shrink-0"
      onMouseEnter={handelText}
      onMouseLeave={handelText_2}
    >
      <Link href={product.link}>
        <div className="block group-hover:shadow-2xl">
          <div className="relative">
            <img
              src={product.thumbnail}
              loading="lazy"
              className="object-cover object-left-top "
              alt={product.title}
            />
            <div className="flex flex-col absolute top-4 left-4 text-white font-bold gap-2">
              <p>{text}</p>
              <p className="md:text-[13px] text-xs text-gradiant-r from-slate-200 to-slate-900 font-light">
                {des}
              </p>
              {btn && <MainButton />}
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-80 bg-black pointer-events-none"></div>
    </motion.div>
  );
};
