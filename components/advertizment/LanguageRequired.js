import { useState } from 'react';

function LanguageRequired() {



  // remarks contain the write data (discription)
  const [remarks, setRemarks] = useState('');

  const handleChange = (event) => {
    setRemarks(event.target.value);
  };

  return (
    <div className="w-[95%] font-sans text-gray-700">
      <h2 className="font-bold text-2xl mb-2 text-white">
        Ausbildung
      </h2>
      <p className="mb-8 text-white">
        Geben Sie hier an welche Art von Abschluss die Bewerberinnen haben sollten.
      </p>
      <textarea
        value={remarks}
        onChange={handleChange}
        className="w-full h-[70vh] p-4 text-sm font-sans text-gray-700 border-2 border-[#8484e0] rounded-md "
        placeholder='Platz für Bemerkungen'
      />
    </div>
  );
}

export default LanguageRequired;