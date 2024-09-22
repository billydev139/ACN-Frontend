"use client";
import React, { useState, useEffect } from 'react';

// List of countries
const countries = [
  'Autocenter Niederbipp AG',
  'Autocenter Niederbipp AG | Carrosserie',
  'Autocenter Niederbipp AG | An & Verkauf',
];

// Contact details associated with each country
const contactDetails = {
  'Autocenter Niederbipp AG': { phone: '+41 32-6330063', email: 'info@acnag.ch', tollFree: '+41 32-6330063', intlCall: 'Abschleppdienst kontaktieren' },
  'Autocenter Niederbipp AG | Carrosserie': { phone: '+41 79 804 66 66', email: 'carrosserie@acnag.ch', tollFree: '1-800-000-0000', intlCall: '+12143221213' },
  'Autocenter Niederbipp AG | An & Verkauf': { phone: '+41 79 723 99 99', email: 'verkauf@acnag.ch', tollFree: '1800-000-000', intlCall: '+6100004320001' },
};

function CountrySelector({ onCountrySelect, dis }) {
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    if (selectedCountry) {
      const { phone, email, tollFree, intlCall } = contactDetails[selectedCountry];
      onCountrySelect(selectedCountry, phone, email, tollFree, intlCall);
    }
  }, [selectedCountry, onCountrySelect]); // Add `onCountrySelect` to the dependencies array

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

return (
  <div className="w-full md:mx md:mt-7 relative flex flex-col gap-2 md:gap-4 z-50">
    {dis && <div className='text-brGold text-medium'>{dis}</div>} {/* Proper Tailwind class for red color */}
    
    <label htmlFor="country" className="block text-sm md:text-lg font-bold text-white">
      Abteilung
    </label>

    <div className='w-full'>
      <select
        id="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="my-1 text-white border-none outline-none block w-full py-2 bg-[#181818] rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-lg font-bold"
      >
        <option value="" className='font- text-sm md:text-lg'>
        Wähle deine Abteilung
        </option>
        {countries.map((country) => (
          <option key={country} value={country} className='md:text-lg text-sm'>
            {country}
          </option>
        ))}
      </select>
      
      <div className='w-full h-[0.3px] bg-brGold'></div>
    </div>
  </div>
);

}

export default CountrySelector;
