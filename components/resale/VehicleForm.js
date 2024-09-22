"use client";
import React, { useState, useEffect } from "react";
import MainButton from "../accets/MainButton";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import AnimatedText from "../accets/common/AnimatedText";

function VehicleForm() {
  return (
    <div className="w-full overflow-x-hidden bg-[#202020] relative">
      <div className="w-full absolute z-0 md:top-[98vh] top-[99.5vh]">
        <img
          src="/background/Rectangle 156.svg"
          className="w-full h-full z-0"
        />
      </div>

      {/* front theam page */}
      <div className="w-screen h-screen relative overflow-hidden z-0">
        <video
          src="/AcnAG/Video/intro.mp4"
          className="w-full h-full object-cover overflow-hidden"
          autoPlay
          muted
          loop
        />
        <div className="flex flex-col items-center text-center md:w-[40%] w-[80%] gap-4 text-white h-[20rem] absolute z-10 bottom-10 left-[50%] translate-x-[-50%] justify-center ">
          <div className="text-lg font-bold">Autocenter Niderbipp AG</div>
          <AnimatedText>
            <div className="text-4xl font-extrabold text-brGold">
              Verkaufe dein Auto
            </div>
          </AnimatedText>
          <div className="flex text-xs font-semibold items-center">
            <div>ENTDECKEN SIE DIE FERRARI BAUREIHE</div>
            <MainButton />
          </div>
        </div>
      </div>
      <div className="z-50 md:p-3">
        <FormComponent />
      </div>
    </div>
  );
}

export default VehicleForm;

const FormComponent = () => {
  const [vehicleType, setVehicleType] = useState("personenwagen");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ vehicleType, month, year, brand, model });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col z-10 gap-4 md:p-6 p-1 md:w-3/4 w-[95%] mx-auto rounded-lg font-sans text-white"
    >
      <div className="font-bold pb-2 block text-3xl mb-3 md:mt-4 mt-2 z-50">
        Art des Fahrzeugtyps wählen
      </div>

      {/* Dropdown for smaller screens */}
      <fieldset className="md:hidden block mb-6 bg-footer rounded-xl z-50 p-2">
        <label
          htmlFor="vehicleType"
          className="block mb-2 text-sm font-medium text-white"
        >
          Select Vehicle Type
        </label>
        <select
          id="vehicleType"
          name="vehicleType"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className="block w-full p-2 bg-brGray text-white rounded-md focus:ring-brGold focus:border-brGold"
        >
          <option value="personenwagen">Personenwagen</option>
          <option value="nutzfahrzeug">Nutzfahrzeug</option>
          <option value="lastwagen">Lastwagen</option>
          <option value="abholen">Abholen</option>
        </select>
      </fieldset>

      {/* Radio buttons layout for larger screens */}
      <fieldset className="mb-6 hidden md:flex justify-center bg-footer rounded-xl z-50 items-center p-4 md:p-6 md:h-[25vh]">
        {/* Personenwagen */}
        <div className="flex flex-col items-center md:w-1/4 mb-4 md:mb-0">
          <div className="flex justify-center">
            <img
              src="/resale/icons8-car-50 (1).png"
              alt="Personenwagen"
              className="inline-block w-10 h-10 mb-2"
            />
          </div>
          <label className="text-center flex gap-2 text-sm md:text-lg text-brGold">
            <input
              type="radio"
              name="vehicleType"
              value="personenwagen"
              checked={vehicleType === "personenwagen"}
              onChange={() => setVehicleType("personenwagen")}
            />
            Personenwagen
          </label>
        </div>
      </fieldset>

      <div className="bg-[#181818] md:p-6 p-2 z-50 rounded-lg">
        <div className="md:mb-6 mb-2 flex gap-2 flex-col ">
          <label className="font-bold md:text-2xl text-lg">
            Ohne Fahrzeugausweis
          </label>
          <div className="text-sm">
            Ohne die Angaben aus dem Fahrzeugausweis erfassen Sie einen
            grösseren Teil der Daten selbst.
          </div>
        </div>

        <div className="md:mb-6 mb-2">
          <label className="font-bold md:text-2xl text-lg">
            Baumonat und -jahr (oder Erstzulassung)
          </label>
          <div className="flex gap-2">
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-1/2 p-2 mt-1 mb-3 rounded border border-gray-300 text-white bg-brGray h-12"
            >
              <option value="">Monat</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-1/2 p-2 mt-1 rounded border border-gray-300 text-white bg-brGray h-12"
            >
              <option value="">Jahr</option>
              {Array.from({ length: 25 }, (_, i) => 2024 - i).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="font-bold md:text-2xl text-lg">Marke</label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="block w-full p-2 mt-1 rounded border border-gray-300 text-white bg-brGray"
          >
            {/* Add other brands as many as you want */}
            <option value="">Select Marke</option>
            <option value="BMW">BMW</option>
            <option value="Audi">Audi</option>
            <option value="Mercedes">Mercedes</option>
          </select>

          <div className="mb:my-6 my-2 ">
            <label className="font-bold md:text-2xl text-lg">Modell</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="block w-full p-2 mt-1 rounded border border-gray-300 text-white bg-brGray"
            >
              {/* model add as many as you want */}
              <option value="">Select Modell</option>
              <option value="325">325</option>
              <option value="320">320</option>
              <option value="330">330</option>
            </select>
          </div>
        </div>
      </div>

      <CarDetail_1 />
      <CarDetail_2 />
      <CarDetail_5 />
      <CarDetail_6 />
      <CarDetails_7 />
    </form>
  );
};

const CarDetail_1 = () => {
  // Initialize the state as an object with boolean values
  const [aufbau, setAufbau] = useState({
    Limousine: false,
    Kombi: false,
    Coupé: false,
    Cabriolet: false,
    "Ich weiss nicht": false,
  });

  const [treibstoff, setTreibstoff] = useState({
    "Benzin bleifrei": false,
    Diesel: false,
    "Ich weiss nicht": false,
  });

  const [getriebeart, setGetriebeart] = useState({
    Schaltgetriebe: false,
    "Automat sequenziell": false,
    "Ich weiss nicht": false,
  });

  const handleSelect = (category, setCategory, item) => {
    setCategory({
      ...category,
      [item]: true,
      ...Object.keys(category).reduce((acc, key) => {
        if (key !== item) acc[key] = false;
        return acc;
      }, {}),
    });
  };

  return (
    <div className=" md:p-6 p-2 w-full mx-auto rounded-lg font-sans bg-[#181818]">
      {/* Aufbau Section */}
      <div className="mb-6">
        <label className="font-bold text-xl block mb-2">Aufbau</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Object.keys(aufbau).map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => handleSelect(aufbau, setAufbau, item)}
              className={`px-4 py-7 border rounded ${aufbau[item] ? "bg-brGold text-white" : "text-white bg-brGray"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Treibstoff Section */}
      <div className="mb-6">
        <label className="font-bold text-xl block mb-2">Treibstoff</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Object.keys(treibstoff).map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => handleSelect(treibstoff, setTreibstoff, item)}
              className={`px-4 py-7 border rounded ${treibstoff[item]
                  ? "bg-brGold text-white"
                  : "text-white bg-brGray"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Getriebeart Section */}
      <div className="mb-6">
        <label className="font-bold text-xl block mb-2">Getriebeart</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Object.keys(getriebeart).map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => handleSelect(getriebeart, setGetriebeart, item)}
              className={`px-4 py-7 border rounded ${getriebeart[item]
                  ? "bg-brGold text-white"
                  : "text-white bg-brGray"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const CarDetail_2 = () => {
  const [formData, setFormData] = useState({
    fahrzeugfarbe: "",
    preis: "",
    version: "",
    innerfarbe: "",
    zusatztitel: "",
    typenschein: "",
    fahrgestellNr: "",
    stammnummer: "",
    wagenNr: "",
    fahrzeugzustand: "",
    kilometer: "",
    letztePrufung: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const commonClasses =
    "block w-full p-2 rounded bg-brGray text-white border border-gray-300"; // Common border and styling for all inputs

  return (
    <div className="md:p-4 p-2 w-full mx-auto rounded-lg font-sans bg-[#181818]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-2 mb-4">
        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Fahrzeugfarbe</label>
          <select
            name="fahrzeugfarbe"
            value={formData.fahrzeugfarbe}
            onChange={handleChange}
            className={commonClasses}
          >
            <option value="">Auswählen</option>
            <option value="Schwarz">Schwarz</option>
            <option value="Weiß">Weiß</option>
            <option value="Rot">Rot</option>
          </select>
        </div>

        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Preis (CHF)</label>
          <input
            type="text"
            name="preis"
            value={formData.preis}
            onChange={handleChange}
            className={commonClasses}
          />
        </div>

        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Version</label>
          <input
            type="text"
            name="version"
            value={formData.version}
            onChange={handleChange}
            className={commonClasses}
          />
        </div>

        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Innerfarbe</label>
          <select
            name="innerfarbe"
            value={formData.innerfarbe}
            onChange={handleChange}
            className={commonClasses}
          >
            <option value="Metallisé">Metallisé</option>
            <option value="Schwarz">Schwarz</option>
            <option value="Weiß">Weiß</option>
            <option value="Beige">Beige</option>
            <option value="Grau">Grau</option>
          </select>
        </div>

        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Zusatztitel</label>
          <textarea
            name="zusatztitel"
            value={formData.zusatztitel}
            onChange={handleChange}
            className={commonClasses}
            maxLength={125}
          />
        </div>

        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Typenschein</label>
          <input
            type="text"
            name="typenschein"
            value={formData.typenschein}
            onChange={handleChange}
            className={commonClasses}
          />
        </div>

        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">
            Fahrgestell-Nr.
          </label>
          <input
            type="text"
            name="fahrgestellNr"
            value={formData.fahrgestellNr}
            onChange={handleChange}
            className={commonClasses}
          />
        </div>

        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Stammnummer</label>
          <input
            type="text"
            name="stammnummer"
            value={formData.stammnummer}
            onChange={handleChange}
            className={commonClasses}
          />
        </div>

        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Wagen-Nr.</label>
          <input
            type="text"
            name="wagenNr"
            value={formData.wagenNr}
            onChange={handleChange}
            className={commonClasses}
          />
        </div>

        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">
            Fahrzeugzustand
          </label>
          <select
            name="fahrzeugzustand"
            value={formData.fahrzeugzustand}
            onChange={handleChange}
            className={commonClasses}
          >
            <option value="">Auswählen</option>
            <option value="Neu">Neu</option>
            <option value="Gebraucht">Gebraucht</option>
          </select>
        </div>

        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Kilometer</label>
          <input
            type="text"
            name="kilometer"
            value={formData.kilometer}
            onChange={handleChange}
            className={commonClasses}
          />
        </div>

        <div className="col-span-1">
          <label className="block font-bold text-lg mb-2">Letzte Prüfung</label>
          <input
            type="text"
            name="letztePrufung"
            value={formData.letztePrufung}
            onChange={handleChange}
            className={commonClasses}
          />
        </div>
      </div>
    </div>
  );
};

const CarDetail_5 = () => {
  const initialFormData = {
    Ablagenpaket: false,
    Abstandsregeltempomat: false,
    AdaptivesKurvenlicht: false,
    Aktivlenkung: false,
    Alarmanlage: false,
    Anhängerkupplung: false,
    Apps: false,
    ParkDistanceControlHinten: false,
    ParkDistanceControlVorneUndHinten: false,
    Außenspiegelpaket: false,
    BMWIndividualEdelholzausführung: false,
    BMWIndividualerweiterteLeder: false,
    BMWIndividualHolzIntarsie: false,
    BMWIndividualKomposition: false,
    BMWIndividualLackierung: false,
    CDCWechsler: false,
    DurchladeKlappe: false,
    EdelholzAusführungBambusMaser: false,
    EdelholzAusführungMuschelahorn: false,
    EditionExclusive: false,
    HarmanKardon: false,
    HiFiLautsprechersystem: false,
    HolzapplikationenNussbaumhell: false,
    HolzapplikationenNussbaumwurzel: false,
    IndividualHartdop: false,
    LEDLichtelemente: false,
    LeichtmetallfelgenVSpeiche: false,
    Sternspeiche189: false,
    Sternspeiche230: false,
    VSpeiche338: false,
    VSpeiche342: false,
    Sternspeiche340: false,
    LenkradBeheizbar: false,
    FernlichtAssistent: false,
    Lichtpaket: false,
    MLederlenkrad: false,
    InterieurleistenAluminium: false,
    Doppelspeichen: false,
    MSportfahrwerk: false,
    MLederlenkrad: false,
    MTechnicAerodynamicPaket: false,
    PolsterDakota: false,
    MShadowLine: false,
    MSportEdition: false,
    MSportfahrwerk: false,
    MetallicLackierung: false,
    MTechnicAerodynamicPaket: false,
    StoffAlcantara: false,
    Multifunktionslenkrad: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: checked }));
  };
};

const CarDetail_6 = () => {
  const initialState = {
    abMFK: false,
    behindertengerecht: false,
    direktParallelimport: false,
    rennwagenOhneStrassenzulassung: false,
    tuning: false,
    unfallfahrzeug: false,
    achtfachBereift: false,
    kommentar: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="  md:p-4 p-2 w-full mx-auto rounded-lg font-sans bg-[#181818]">
      <div className="text-2xl sm:text-3xl font-bold mb-4">Detaildaten</div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Eigenschaften</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-2 gap-1">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="abMFK"
              checked={formData.abMFK}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            AB MFK
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="behindertengerecht"
              checked={formData.behindertengerecht}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Behindertengerecht
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="direktParallelimport"
              checked={formData.direktParallelimport}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Direkt-/Parallelimport
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="rennwagenOhneStrassenzulassung"
              checked={formData.rennwagenOhneStrassenzulassung}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Rennwagen ohne Strassenzulassung
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="tuning"
              checked={formData.tuning}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Tuning
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="unfallfahrzeug"
              checked={formData.unfallfahrzeug}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Unfallfahrzeug
          </label>
        </div>
      </div>

      <div className="bg-gray-300 w-[90%] h-[1px] mx-auto md:mb-4 mb-2"></div>

      <div className="md:mb-4 mb-2">
        <h3 className="font-semibold mb-2">Extras</h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="achtfachBereift"
            checked={formData.achtfachBereift}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          8-fach bereift
        </label>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Kommentare (öffentlich sichtbar)</h3>
        <textarea
          name="kommentar"
          value={formData.kommentar}
          onChange={handleInputChange}
          className="w-full   rounded-lg p-2 text-white bg-brGray"
          rows="4"
        />
      </div>
    </div>
  );
};

const CarDetails_7 = () => {
  const router = useRouter();
  const initialState = {
    title: "",
    lastName: "",
    firstName: "",
    street: "",
    houseNumber: "",
    postCode: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    website: "",
  };
  
  const [formData, setFormData] = useState(initialState);
  const [uploadedImages, setUploadedImages] = useState([]); // Store multiple images
  const [showFileInput, setShowFileInput] = useState(false); // Show file input when "Add More" is clicked
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleImageUpload = (e) => {
    const files = e.target.files;
    const imageUrls = Array.from(files).map((file) => URL.createObjectURL(file));
  
    setUploadedImages((prevImages) => [...prevImages, ...imageUrls]);
    setShowFileInput(false); 
  };
  
  const handleAddMoreClick = () => {
    setShowFileInput(true); 
  };
  
  const handleRemoveAllClick = () => {
    setUploadedImages([]); 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(uploadedImages); 
  };
  

  const commonClasses =
    "block w-full p-2 rounded bg-brGray text-white border border-gray-300"; 

  return (
    <div className="w-full mx-auto md:p-4 p-2   rounded-lg bg-[#181818]">
      <div className="md:mb-4 mb-2">
      <div className={`border-2 border-dashed border-gray-400 h-auto flex flex-wrap items-center justify-center text-white bg-brGray ${uploadedImages[0] ? "p-1" : "p-4"} rounded`}>
  {uploadedImages.length > 0 ? (
    <div className="w-full">
      <div className="flex flex-wrap justify-center">
        {uploadedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Uploaded ${index + 1}`}
            className="h-40 w-40 object-contain m-2"
          />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <Button
          onClick={handleAddMoreClick}
          className="px-4 py-2 bg-brGold text-white rounded hover:bg-brGold-dark"
        >
          Add More
        </Button>

        <Button
          onClick={handleRemoveAllClick} // Remove all images
          className="px-4 py-2 bg-white text-black rounded"
        >
          Remove All
        </Button>
      </div>

      {showFileInput && (
        <div className="mt-4">
          <label className="cursor-pointer">
            <input
              type="file"
              onChange={handleImageUpload}
              className="hidden"
              multiple
            />
            <div className="px-4 py-2 border border-gray-300 rounded bg-[#181818] text-white">
              Choose More Images
            </div>
          </label>
        </div>
      )}
    </div>
  ) : (
    <label className="cursor-pointer">
      <div className="text-center">Bilder Hochladen</div>
      <input
        type="file"
        onChange={handleImageUpload}
        className="hidden"
        multiple
      />
    </label>
  )}
</div>



      </div>

      <div className="text-3xl font-bold md:mb-4 mb-2">Kontaktdaten</div>
      <div className="text-xl font-semibold">
        Hauptadresse (Rechnungsadresse)
      </div>
      <form onSubmit={handleSubmit}>
        <div className="md:mb-4 mb-2">
          <h3 className="font-semibold mb-2 mt-1">Anrede</h3>
          <div className="flex w-full gap-5">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="mr"
                name="title"
                value="mr"
                checked={formData.title === "mr"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="mr">Herr</label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="mrs"
                name="title"
                value="mrs"
                checked={formData.title === "mrs"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="mrs">Frau</label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="firm"
                name="title"
                value="firm"
                checked={formData.title === "firm"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="firm">Firma</label>
            </div>
          </div>
        </div>

        <div className="md:mb-4 mb-2">
          <label className="block font-semibold mb-2" htmlFor="lastName">
            Nachname
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={commonClasses}
          />
        </div>

        <div className="md:mb-4 mb-2">
          <label className="block font-semibold mb-2" htmlFor="firstName">
            Vorname
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={commonClasses}
          />
        </div>

        <div className="md:mb-4 mb-2">
          <label className="block font-semibold mb-2" htmlFor="street">
            Strasse (optional)
          </label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
            className={commonClasses}
          />
        </div>

        <div className="md:mb-4 mb-2">
          <label className="block font-semibold mb-2" htmlFor="houseNumber">
            Hausnummer (optional)
          </label>
          <input
            type="text"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleInputChange}
            className={commonClasses}
          />
        </div>

        <div className="md:mb-4 mb-2">
          <label className="block font-semibold mb-2" htmlFor="postCode">
            PLZ
          </label>
          <input
            type="text"
            name="postCode"
            value={formData.postCode}
            onChange={handleInputChange}
            className={commonClasses}
          />
        </div>

        <div className="md:mb-4 mb-2">
          <label className="block font-semibold mb-2" htmlFor="city">
            Ort
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className={commonClasses}
          />
        </div>

        <div className="md:mb-4 mb-2">
          <label className="block font-semibold mb-2" htmlFor="country">
            Land
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className={commonClasses}
          />
        </div>

        <div className="md:mb-4 mb-2">
          <label className="block font-semibold mb-2" htmlFor="phone">
            Telefonnummer
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={commonClasses}
          />
        </div>

        <div className="md:mb-4 mb-2">
          <label className="block font-semibold mb-2" htmlFor="email">
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={commonClasses}
          />
        </div>

        <div className="md:mb-4 mb-2">
          <label className="block font-semibold mb-2" htmlFor="website">
            Webseite (optional)
          </label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className={commonClasses}
          />
        </div>

        <div className="flex justify-between md:mt-4 mt-2">
          <Button
            type="button"
            className="bg-white text-black md:px-4 md:w-[10vw] px-2 md:py-2 py-1 rounded-md"
            onClick={() => router.push("/sales/")}
          >
            Zurück
          </Button>
          <Button
            type="submit"
            className="bg-brGold text-white md:w-[10vw] md:px-4 px-2 md:py-2 py-1 rounded-md"
          >
            Weiter
          </Button>
        </div>
      </form>
    </div>
  );
};
