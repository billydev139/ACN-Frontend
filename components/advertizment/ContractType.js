import React from "react";
import SelectBar from "../SelectioBar";
import DoubleSidedSlider from "./DoubleSidedSlider";

function ContractType() {
  return (
    <div className="flex flex-col md:w-[95%] w-full flex-wrap gap-10 md:mt-16 text-white rounded-xl bg-[#181818] p-3">
      <div className="flex flex-col gap-3">
        <p className="font-bold text-lg flex-wrap">Versicherung</p>
        <p className="font-light text-sm flex-wrap">
          Vertragsart und Schadendaten – Autocenter Niederbipp AG
        </p>
        <p className="font-light text-sm flex-wrap">
          Bei Autocenter Niederbipp AG bieten wir professionelle Unterstützung
          bei Carrosserie-Schäden und kümmern uns um alle relevanten
          Versicherungsansprüche. Vertrauen Sie auf unsere Expertise, um Ihr
          Fahrzeug schnell wieder auf die Straße zu bringen!
        </p>
      </div>


      {/* use state variabes to get its value */}
      <fieldset className="h-auto rounded-lg md:w-[47%] w-full p-4">
        <legend className="font-semibold text-sm">Schadendaten</legend>
        <select className="border-[2px] border-gray-300 rounded-lg w-full px-2 py-3 text-white bg-brGray">
          {damageData.map((damage) => (
            <option key={damage.value} value={damage.value}>
              {damage.label}
            </option>
          ))}
        </select>
      </fieldset>

      <div>
      {/* use state variabes to get its value */}

  <fieldset className=" h-auto rounded-lg md:w-[47%] w-full p-4">
    <legend className="font-semibold text-sm">Vertragsart</legend>
    <select className="border-[2px] border-gray-300 rounded-lg w-full p-2 text-white bg-brGray">
      {contractData.map((contract) => (
        <option key={contract.value} value={contract.value}>
          {contract.label}
        </option>
      ))}
    </select>
  </fieldset>
</div>

{/* check nextui sliders documantation at the end to check how to gets its value */}
      <div className="flex flex-col gap-3">
        <p className="text-xl font-bold">Selbstbehalt *</p>
        <DoubleSidedSlider />
      </div>
    </div>
  );
}

export default ContractType;

// Daten für die Schadendaten-Auswahl
const damageData = [
  { label: "Kollision", value: "kollision" },
  { label: "Parkschaden", value: "parkschaden" },
  { label: "Haftpflicht", value: "haftpflicht" },
  { label: "Wildunfall", value: "wildunfall" },
  { label: "Frontscheibe", value: "frontscheibe" },
];

// Daten für die Vertragsart-Auswahl
const contractData = [
  { label: "Haftpflichtversicherung", value: "parmanent employ" },
  { label: "Teilkasko", value: "contract" },
  { label: "Vollkasko", value: "internship" },
  { label: "Keine Versicherung", value: "freelance" },
];
