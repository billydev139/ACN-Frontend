import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SelectBar from '../SelectioBar';

function ContactDetail() {
  return (
    <div className="md:w-[95%] w-full p-3 bg-[#181818] rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-white">Kontaktdaten</h1>
      <h2 className="text-xl font-semibold mb-2 text-white">Hauptadresse (Rechnungsadresse)</h2>

      <form>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Anrede</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" name="anrede" value="Frau" className="form-radio" />
              <span className="ml-2 text-white">Frau</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="anrede" value="Herr" className="form-radio" />
              <span className="ml-2 text-white">Herr</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="anrede" value="Firma" className="form-radio" />
              <span className="ml-2 text-white">Firma</span>
            </label>
          </div>
        </div>

        {['Vorname', 'Nachname', 'Firma', 'Zusatz', 'Postfach', 'Strasse, Nummer', 'PLZ', 'Ort'].map((label, index) => (
          <div key={index} className="mb-4">
            <label className="block text-white  text-sm font-bold mb-2">{label}</label>
            <input type="text" required className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-brGray leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        ))}

        <div className="mb-4">
          <fieldset className=" h-auto rounded-lg w-full">
            <legend className="font-semibold text-sm text-white">Land</legend>
            <select className="border-[2px] border-gray-300 rounded w-full p-2 text-white bg-brGray">
              {countryData.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </fieldset>
        </div>


        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Telefonnummer (Beispiel: +41791234567)</label>
          <div className="flex">
            <select required className="appearance-none border rounded-l w-1/4 py-2 px-3 text-white bg-[#7e7575] leading-tight focus:outline-none focus:shadow-outline">
              <option>Auswählen</option>
              <option>+41</option>
              <option>+49</option>
              <option>+1</option>
            </select>
            <input type="text" className="shadow appearance-none border rounded-r w-3/4 py-2 px-3 text-white bg-brGray leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactDetail;





const countryData = [
  { label: "Schweiz", value: "schweiz" },
  { label: "Australia", value: "australia" },
  { label: "Germany", value: "germany" },
  { label: "USA", value: "usa" },
];

// export const FunctionComponent = () => {
//   return (
//     <div className="w-[95%] p-3 bg-white rounded-lg shadow-lg mx-auto">
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Funktion</h2>
//         <p className="text-gray-700 text-sm mb-4">
//           Da Bewerber:innen oftmals nach bestimmten Stellentiteln suchen, ist der Stellentitel einer der Faktoren, der die Performance Ihrer Stellenanzeige beeinflusst. Wir empfehlen Ihnen unsere Vorschläge zu verwenden.
//         </p>
//         <div className="flex items-center mb-4">
//           <label className="block w-32 font-medium text-gray-700">Hierarchiebene</label>
//           <input 
//             type="text" 
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//             value="Mitarbeiter" 
//             readOnly 
//           />
//         </div>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Funktion</h2>
//         <p className="text-gray-700 text-sm mb-4">
//           Da Bewerber:innen oftmals nach bestimmten Stellentiteln suchen, ist der Stellentitel einer der Faktoren, der die Performance Ihrer Stellenanzeige beeinflusst. Wir empfehlen Ihnen unsere Vorschläge zu verwenden.
//         </p>
//         <div className="flex items-center mb-4">
//           <label className="block w-32 font-medium text-gray-700">Hierarchiebene</label>
//           <input 
//             type="text" 
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//             value="Mitarbeiter" 
//             readOnly 
//           />
//         </div>
//       </div>
//     </div>
//   );
// };


