"use client";
import React, { Suspense, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
  }[];
}) => {
  const images = [
    "/AcnAG/Home/Gang/Car.jpg",
    "/AcnAG/Home/Gang/buero.avif",
    "/AcnAG/Home/Gang/Spritzwerk.jpeg",
    "/AcnAG/Home/Gang/end.avif",
  ];
  const [activeCard, setActiveCard] = React.useState(3);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(index); 
      }
    });
  });

  return (
    <motion.div
      className="h-screen overflow-y-auto bg-footer flex justify-center relative space-x-10 z-[52]"
      ref={ref}
    >
      <div className="relative flex items-start px-4 h-auto" data-aos="fade-up">
        <div className="w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="md:my-20 my-16 ">
              {/* Animate both title and description consistently */}
              <motion.h2
                data-aos="zoom-in"
                data-aos-delay="300"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  fontSize: activeCard === index ? "text-2xl" : "text-sm", // Larger font for active card
                  scale: activeCard === index ? 1 : 0.6, // Scale up the active card
                  transition: { duration: 0.3 }, // Adjust duration as needed
                }}
                className={`text-2xl font-bold text-brGold flex justify-start h-10 `}
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  transition: { duration: 0.5 },
                }}
                className="text-slate-300 md:max-w-xl w-[20rem] md:mt-10 flex flex-col gap-2"
              >
                {item.description}
                <div>
                  <Button />
                </div>
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <motion.div className="hidden lg:block h-[80%] w-2/3 rounded-lg custom-gradient bg-white sticky top-10 overflow-hidden hover:translate-y-[-50] ease-linear">
        <Image
          width={700}
          height={700}
          src={images[activeCard]}
          loading="lazy"
          alt="images"
          className="object-cover rounded-lg w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
};

// Button component
const Button = () => {
  return (
    <a href="#" className="fancy" role="button">
      <span className="top-key"></span>
      <span className="text">Erfahre mehr</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>

      <style jsx>{`
        .fancy {
          background-color: transparent;
          border: 2px solid white;
          border-radius: 0;
          box-sizing: border-box;
          color: black;
          cursor: pointer;
          display: inline-block;
          float: right;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin: 0;
          outline: none;
          overflow: visible;
          padding: 1.25em 2em;
          position: relative;
          text-align: center;
          text-decoration: none;
          text-transform: none;
          transition: all 0.3s ease-in-out;
          user-select: none;
          font-size: 13px;
        }

        .fancy::before {
          content: " ";
          width: 1.5625rem;
          height: 2px;
          background: #b29146;
          top: 50%;
          left: 1.5em;
          position: absolute;
          transform: translateY(-50%);
          transition: background 0.3s linear, width 0.3s linear;
        }

        .fancy .text {
          font-size: 1.125em;
          line-height: 1.33333em;
          padding-left: 2em;
          display: block;
          text-align: left;
          transition: all 0.3s ease-in-out;
          text-transform: uppercase;
          color: #b29146;
        }

        .fancy .top-key,
        .fancy .bottom-key-1,
        .fancy .bottom-key-2 {
          height: 2px;
          background: #181818;
          transition: width 0.5s ease-out, left 0.3s ease-out, right 0.3s ease-out;
        }

        .fancy .top-key {
          width: 1.5625rem;
          top: -2px;
          left: 0.625rem;
          position: absolute;
        }

        .fancy .bottom-key-1 {
          width: 1.5625rem;
          right: 1.875rem;
          bottom: -2px;
          position: absolute;
        }

        .fancy .bottom-key-2 {
          width: 0.625rem;
          right: 0.625rem;
          bottom: -2px;
          position: absolute;
        }

        .fancy:hover {
          color: black;
          background: #b29146;
        }

        .fancy:hover::before {
          width: 0.9375rem;
          background: white;
        }

        .fancy:hover .text {
          color: white;
          padding-left: 1.5em;
        }

        .fancy:hover .top-key {
          left: -2px;
          width: 0px;
        }

        .fancy:hover .bottom-key-1,
        .fancy:hover .bottom-key-2 {
          right: 0;
          width: 0;
        }
      `}</style>
    </a>
  );
};
