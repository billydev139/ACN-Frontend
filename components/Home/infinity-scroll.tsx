"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const TeamSlider = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Define speed and direction via CSS classes
  const getSpeedClass = () => {
    if (speed === "fast") return "duration-20s";
    if (speed === "normal") return "duration-40s";
    return "duration-80s";
  };

  const getDirectionClass = () => {
    return direction === "left" ? "forwards" : "reverse";
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden bg-black",
        className
      )}
    >
      <ul
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll",
          getSpeedClass(),
          getDirectionClass(),
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {/* Directly duplicate items in JSX */}
        {items.concat(items).map((item, idx) => (
          <li
            className="w-auto h-auto relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={idx}
          >
            <div className="w-auto h-auto relative text-xl hover:text-3xl">
              <Image
                className="h-full w-auto object-cover rounded-2xl"
                alt="team_member"
                height={250}
                width={250}
                src={item.image}
                loading="lazy" // Lazy load images for better performance
              />
              <p className="text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                {item.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
