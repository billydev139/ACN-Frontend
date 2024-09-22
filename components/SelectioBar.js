import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

// Generalized SelectBar Component
export default function SelectBar({ data, placeholder, type, placement, label,required }) {
  return (
    <Select
      isRequired={required}
      size="md" 
      radius="lg" 
      selectionMode={type}
      placeholder={placeholder}
      label={label}
      labelPlacement={placement}
      className="w-full border rounded"
      classNames={{
        trigger: "bg-brGray text-white border-none rounded", 
        value: "text-white", 
        popover: "bg-brGray text-white rounded-lg", 
        item: "text-white" 
      }}
    >
      {data.map((item) => (
        <SelectItem
          key={item.value}
          value={item.value}
          className="text-black" 
        >
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
}
