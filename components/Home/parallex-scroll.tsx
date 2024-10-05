"use client";
import React, { useRef, useMemo } from "react"; // React importiert
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import { cn } from "@/utils/cn";

// Typisierung für die ImageItem-Komponente
interface ImageItemProps {
  src: string;
}

// ImageItem-Komponente mit React.memo für Performance
const ImageItem: React.FC<ImageItemProps> = React.memo(({ src }) => (
  <Image
    src={src}
    className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
    height="400"
    width="400"
    alt="thumbnail"
  />
));

interface ParallaxScrollProps {
  images: string[];
  className?: string;
}

export const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  images,
  className,
}) => {
  const gridRef = useRef<HTMLDivElement | null>(null); // Typisiere gridRef
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  // Berechne die Übersetzungen basierend auf dem Scrollfortschritt
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  // Teile die Bilder in drei Teile auf
  const firstPart = useMemo(() => images.slice(0, third), [images]);
  const secondPart = useMemo(() => images.slice(third, 2 * third), [images]);
  const thirdPart = useMemo(() => images.slice(2 * third), [images]);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1-" + idx}>
              <ImageItem src={el} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2-" + idx}>
              <ImageItem src={el} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3-" + idx}>
              <ImageItem src={el} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
