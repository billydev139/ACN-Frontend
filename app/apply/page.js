"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import BenefitsSection from '@/components/accets/common/Benifits'


function page() {
    return (
        <div className='overflow-x-hidden bg-[red]'>
            <div className="w-auto h-auto bg-[#202020] text-white flex flex-col items-center ">
                <header className="relative w-full h-auto">
                    <div className="w-screen h-[100vh]">
                        <Image
                            src="/community-page/1.jpeg"
                            alt="Banner Image"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center md:block flex flex-col gap-2 px-3">
                            <p className="text-sm text-white mb-2">JOIN OUR TALENT COMMUNITY</p>
                            <h1 className="md:text-6xl text-3xl text-white font-bold">
                            Carrosserielackierer/in EFZ
                            </h1>
                            <p className="md:text-3xl text-lg text-white">
                                We are always looking for ambitious people who share our passion
                                for Ferrari, and for excellence.
                            </p>
                        </div>
                    </div>
                </header>
                
                <ApplicationForm/>

            </div>
        </div>
    )
}

export default page




const countryCodes = [
    { name: "Schweiz", code: "+41" },
    { name: "Deutschland", code: "+49" },
    { name: "Österreich", code: "+43" },
    { name: "Frankreich", code: "+33" },
    { name: "Italien", code: "+39" },
    { name: "Spanien", code: "+34" },
  ];
  
  const ApplicationForm = () => {
    const [formData, setFormData] = useState({
      lebenslauf: null,
      foto: null,
      motivationsschreiben: null,
      vorUndNachname: "",
      email: "",
      telefonnummer: "",
      datenschutzBestimmungen: false,
      selectedCountry: countryCodes[0].code, 
    });
  
    const handleFileChange = (e, field) => {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, [field]: file }));
    };
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    };
  
    const handleCountryChange = (e) => {
      const selectedCountry = countryCodes.find(
        (country) => country.name === e.target.value
      );
      setFormData((prev) => ({
        ...prev,
        selectedCountry: selectedCountry.code,
        telefonnummer: selectedCountry.code, // Update the phone number prefix
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form submission logic here
  
      // Reset form data after submission
      setFormData({
        lebenslauf: null,
        foto: null,
        motivationsschreiben: null,
        vorUndNachname: "",
        email: "",
        telefonnummer: "",
        datenschutzBestimmungen: false,
        selectedCountry: countryCodes[0].code,
      });
    };
  
    return (
      <div className="w-full relative flex flex-col items-center top-0 left-0">
        {/* Background */}
        <div className="w-full absolute z-0">
          <img
            src="/background/Rectangle 156.svg"
            className="w-full h-full object-cover"
            alt="background"
          />
        </div>
        {/* Form Container */}
        <div className="w-full max-w-3xl mx-auto p-6 rounded-md relative z-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Meine Daten */}
            <div className="md:w-[70%] w-full">
              <label className="block md:text-xl text-lg font-semibold text-brGold">
                Meine Daten
              </label>
              <div className='mb-4'>Please provide your contact details</div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm md:text-lg font-semibold text-white mb-2">
                    Vor- und Nachname <span className="text-brGold">*</span>
                  </label>
                  <input
                    type="text"
                    name="vorUndNachname"
                    className="w-full p-2 border bg-brGray text-white border-gray-300 rounded-md"
                    placeholder="Vor- und Nachname"
                    required
                    value={formData.vorUndNachname}
                    onChange={handleChange}
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Vor- und Nachname")}
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-lg font-semibold text-white mb-2">
                    E-Mail-Adresse <span className="text-brGold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded-md bg-brGray text-white"
                    placeholder="Ihre E-Mail-Adresse"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Ihre E-Mail-Adresse")}
                  />
                </div>
  
                <div>
                  <label className="block text-sm md:text-lg font-semibold text-white mb-2">
                    Telefonnummer <span className="text-brGold">*</span>
                  </label>
                  <div className="flex items-center space-x-2">
                    <select
                      className="p-2 border border-gray-300 rounded-md bg-brGray text-white"
                      onChange={handleCountryChange}
                      value={
                        countryCodes.find(
                          (c) => c.code === formData.selectedCountry
                        )?.name || ""
                      }
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="telefonnummer"
                      className="w-full p-2 border border-gray-300 rounded-md bg-brGray text-white"
                      placeholder={formData.selectedCountry}
                      required
                      value={formData.telefonnummer}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) =>
                        (e.target.placeholder = formData.selectedCountry)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            
            
  
            <div className="w-full bg-brGold h-[0.3px]"></div>
  

            {/* Lebenslauf */}
            <div className="md:w-[70%] w-full">
  <label className="block text-xl font-semibold text-brGold mb-2">
    Lebenslauf <span className="text-brGold">*</span>
  </label>
  <div className="h-[40%] min-h-[150px] md:min-h-[200px] border border-gray-300 hover:border-brGold p-4 rounded-md relative cursor-pointer flex items-center justify-center">
    <input
      type="file"
      placeholder=".pdf,.doc,.docx,.jpeg,.jpg,.png"
      className="absolute inset-0 opacity-0 cursor-pointer text-white"
      required
      onChange={(e) => handleFileChange(e, "lebenslauf")}
    />
    {!formData.lebenslauf && (
      <label className="block text-center text-white">
        Datei hochladen oder Datei hier hinziehen Akzeptierte Dateien: PDF, DOC, DOCX, JPEG und PNG bis zu 50 MB.
      </label>
    )}
    {formData.lebenslauf && (
      <p className="text-center text-white mt-2">
        {formData.lebenslauf.name}
      </p>
    )}
  </div>
</div>

<div className="w-full bg-brGold h-[0.3px]"></div>

{/* Foto */}
<div className="md:w-[70%] w-full">
  <label className="block text-xl font-semibold text-brGold mb-2">
    Foto
  </label>
  <div className={`border border-gray-300 hover:border-brGold p-4 rounded-md relative cursor-pointer min-h-[150px] md:min-h-[200px] flex items-center justify-center`}>
    <input
      type="file"
      accept="image/png, image/jpeg, image/jpg"
      className="absolute inset-0 opacity-0 cursor-pointer"
      onChange={(e) => handleFileChange(e, "foto")}
    />
    {!formData.foto && (
      <label className="block text-center text-white">
        Datei hochladen oder Datei hier hinziehen  Akzeptierte Dateien: PNG, JPG und JPEG bis zu 20 MB.
      </label>
    )}
    {formData.foto && (
      <div className="text-center mt-2 overflow-hidden">
        <Image
          width={500}
          height={500}
          src={URL.createObjectURL(formData.foto)}
          alt="Preview"
          className="max-w-xs mx-auto rounded-md"
        />
      </div>
    )}
  </div>
</div>

<div className="w-full bg-brGold h-[0.3px]"></div>

{/* Motivationsschreiben/Anschreiben */}
<div className="md:w-[70%] w-full">
  <label className="block text-lg font-semibold text-brGold">
    Motivationsschreiben/Anschreiben
  </label>
  <div className='mb-4'>Upload your cover letter</div>
  <div className="border border-gray-300 hover:border-brGold p-4 rounded-md relative cursor-pointer min-h-[150px] md:min-h-[200px] flex items-center justify-center">
    <input
      type="file"
      accept=".pdf,.doc,.docx,.jpeg,.jpg,.png"
      className="absolute inset-0 opacity-0 cursor-pointer"
      onChange={(e) => handleFileChange(e, "motivationsschreiben")}
    />
    {!formData.motivationsschreiben && (
      <label className="block text-center text-white">
        Akzeptierte Dateien: PDF, DOC, DOCX, JPEG und PNG bis zu 50 MB.
        Datei hochladen oder Datei hier hinziehen 
      </label>
    )}
    {formData.motivationsschreiben && (
      <p className="text-center text-white mt-2">
        {formData.motivationsschreiben.name}
      </p>
    )}
    
  </div>
</div>

<div className="w-full bg-brGold h-[0.3px]"></div>

{/* Rechtliche Vereinbarungen */}
<div className="md:w-[70%] w-full">
  <label className="block text-lg font-semibold text-brGold mb-2">
    Rechtliche Vereinbarungen
  </label>
  <div className="flex items-start">
    <input
      type="checkbox"
      name="datenschutzBestimmungen"
      className="h-4 w-4 text-brGold border-gray-300 rounded mr-2"
      checked={formData.datenschutzBestimmungen}
      onChange={handleChange}
      required
    />
    <span>
      Ich bestätige die{" "}
      <a href="#" className="text-brGold underline">
        Datenschutzbestimmungen
      </a>{" "}
      <span className="text-brGold">*</span>
    </span>
  </div>
  <div className='mt-4 text-sm w-full flex justify-center'>Alle mit gekennzeichneten Felder sind Pflichtfelder.</div>
</div>

  
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-brGold text-white font-semibold rounded-md"
              >
                Jetzt Bewerbung senden!
              </button>
            </div>
          </form>

        </div>
          <BenefitsSection/>  
      </div>
    );
  };
  
  