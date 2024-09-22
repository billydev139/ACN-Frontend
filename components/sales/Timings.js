"use client";
import React, { useState } from "react";

function Timings() {
  const [dropDown, setDropDown] = useState(false);
const today=new Date().getDay()
console.log(today);
  return (
    <div className="flex flex-col gap-2 w-[90%] mt-3">
      <button
        className="flex items-center w-full gap-4"
        onClick={() => setDropDown(!dropDown)} // Fixing the toggle logic
      >
        <img
          src="/icon/sales/cardetails/clock.svg"
          className="w-7 h-7 object-cover"
          alt="clock"
        />
        <div className="text-lg italic text-brGold">
          {dropDown ? "Öffnungszeiten ausblenden" : "Öffnungszeiten anzeigen"}
        </div>
        <div className="flex-grow flex justify-end">
          <img
            src="/icon/sales/cardetails/arrow.svg"
            alt="arrow"
            loading="lazy"
            className={`w-7 h-7 object-cover transition-transform duration-300 ${
              dropDown ? "-rotate-90" : "rotate-90"
            }`} // Rotate based on state
          />
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          dropDown ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } flex flex-col gap-1 text-base pl-10`}
      >
        {/* Time define */}
        <div className={`flex ${today === 0 ? "text-brGold" : "text-white"}`}>
          <div>Mo</div>
          <div className="items-end flex-grow flex flex-col text-sm">
            <div>09:00-12:00</div>
            <div>13:30-18:30</div>
          </div>
        </div>

        <div className={`flex ${today === 1 ? "text-brGold" : "text-white"}`}>
          <div>Mi</div>
          <div className="items-end flex-grow flex flex-col text-sm">
            <div>09:00-12:00</div>
            <div>13:30-18:30</div>
          </div>
        </div>

        <div className={`flex ${today === 2 ? "text-brGold" : "text-white"}`}>
          <div>Do</div>
          <div className="items-end flex-grow flex flex-col text-sm">
            <div>09:00-12:00</div>
            <div>13:30-18:30</div>
          </div>
        </div>

        <div className={`flex ${today === 3 ? "text-brGold" : "text-white"}`}>
          <div>Fr</div>
          <div className="items-end flex-grow flex flex-col text-sm">
            <div>09:00-12:00</div>
            <div>13:30-18:30</div>
          </div>
        </div>

        <div className={`flex ${today === 4 ? "text-brGold" : "text-white"}`}>
          <div>Sa</div>
          <div className="items-end flex-grow flex flex-col text-sm">
            <div>09:00-12:00</div>
            <div>13:30-18:30</div>
          </div>
        </div>

        <div className={`flex ${today === 5 ? "text-brGold" : "text-white"}`}>
          <div>Mo</div>
          <div className="items-end flex-grow flex flex-col text-sm">
            <div>09:00-12:00</div>
            <div>13:30-18:30</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timings;
