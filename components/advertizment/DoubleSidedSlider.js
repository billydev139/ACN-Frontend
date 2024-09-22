import React from "react";
import {Slider} from "@nextui-org/react";
import { color } from "framer-motion";

export default function App() {
  return (
    <Slider 
      size="md"
      label="Selbstbehalt (CHF)"
      step={100} 
      minValue={0} 
      maxValue={3000} 
      defaultValue={1000} 
      formatOptions={{ style: "currency", currency: "CHF" }} 
      showTooltip={true}
      color="none"
      className="max-w-md"
      classNames={{
        filler:"bg-brGold",
        thumb: "bg-[#B29146] border-none",
      }}
      tooltipProps={{
        className:{
          base: [
            "bg-brGold",
          ],
        }
      }}
       
    />
  );
}
