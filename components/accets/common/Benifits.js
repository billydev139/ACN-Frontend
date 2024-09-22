import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "/icon/benifites/star.svg", 
      title: "Unverschämt dynamisch",
      description:
        "Abwechslungsreiche und fordernde Jobs in jungen, dynamischen Teams, die auch mal neben der Arbeit etwas zusammen unternehmen.",
    },
    {
      icon: "/icon/benifites/abc.svg", 
      title: "Extrem appetitlich",
      description:
        "Vergünstigungen für Mahlzeiten in umliegenden Restaurants, weil uns eine ausgewogene und gesunde Ernährung wichtig ist.",
    },
    {
      icon: "/icon/benifites/building.svg", 
      title: "Total modern",
      description:
        "Attraktive Anstellungsbedingungen sowie fortschrittliche Sozialleistungen an unseren beiden Standorten (Sumiswald und Wasen i. Emmental).",
    },
    {
      icon: "/icon/benifites/person.svg",
      title: "Völlig individuell",
      description:
        "Gezielte Förderung der individuellen Entwicklung mittels internen und externen Aus- und Weiterbildungen.",
    },
  ];

  return (
    <div className="md:w-[65%] w-[95%] flex flex-col items-center my-12">
      <h2 className="md:text-3xl text-xl font-bold text-brGold mb-10">Vorteile bei der Autocenter Niederbipp AG</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-0 gap-4 w-full">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center text-center p-2 md:p-0]">
            <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 mb-2" />
            <h3 className="text-base md:w-52 w-full font-bold text-brGold">{benefit.title}</h3>
            <p className="text-white mt-2 w-full text-sm text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
