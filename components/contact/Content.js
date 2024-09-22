"use client";
import { useScroll, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import CountrySelector from "../accets/DropDown";
import "./contact.css";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import SelectBar from "../SelectioBar";

function Content({ GetValue }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latestValue) => {
      const progressPercentage = latestValue * 100;
      setProgress(progressPercentage);
      GetValue(progressPercentage);
    });

    return () => unsubscribe();
  }, [scrollYProgress, GetValue]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountry_2, setSelectedCountry_2] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [tollFree, setTollFree] = useState("");
  const [intCall, setIntCall] = useState("");
  const [yes, setYes] = useState(false);
  const [yes_2, setYes_2] = useState(false);

  const handleCountrySelect = (
    country,
    phoneNumber,
    email,
    tollFree,
    intlCall
  ) => {
    setSelectedCountry(country);
    setPhone(phoneNumber);
    setEmail(email);
    selectedCountry === "" ? setYes(false) : setYes(true);
  };

  const handleCountrySelect_2 = (
    country,
    phoneNumber,
    email,
    tollFree,
    intlCall
  ) => {
    setSelectedCountry_2(country);
    selectedCountry_2 === "" ? setYes_2(false) : setYes_2(true);
    setTollFree(tollFree);
    setIntCall(intlCall);
  };

  return (
    <motion.div ref={ref}>
      <div className="md:w-[75%] w-full flex flex-col h-auto gap-3 text-white md:pt-5 md:pr-7 z-50">
        {/* done */}
        <div className="w-full h-auto">
          <CountrySelector
            onCountrySelect={handleCountrySelect}
            dis={"Kontakte"}
          />
          {yes && (
            <div className="flex flex-col z-50">
              <div className="flex flex-col">
                <div className="flex mt-3">
                  <div className="flex flex-col w-1/2 gap-1">
                    <div className="md:text-sm text-xs md:font-normal font-light">
                      PHONE NUMBER
                    </div>
                    <div className="md:text-xl text-sm font-bold">{phone}</div>
                  </div>
                  <div className="flex flex-col w-1/2 gap-1">
                    <div className="md:text-sm text-xs md:font-normal font-light">
                      EMAIL
                    </div>
                    <div className="md:text-lg text-sm font-medium z-50">
                      {email}
                    </div>
                  </div>
                </div>
                <div className="text-[12px] font-light mt-3 w-[90%] z-20">
                  Our Customer Service is available as follows: From Monday to
                  Friday, from 8:30 to 19:00 (CET). Saturday from 09:00 to 13:00
                  (CET). Contact our customer care service reserved for Ferrari
                  clients and official dealers to receive information on
                  services available.
                </div>
              </div>
              <div className="flex items-center text-sm">
                GET IN TOUCH <MainButton />
              </div>
            </div>
          )}
        </div>
        {/* done */}
        <div className="w-full md:h-auto text-white">
          <CountrySelector
            onCountrySelect={handleCountrySelect_2}
            dis={"Transport Service"}
          />
          {yes_2 && (
            <div className="flex flex-col gap-4 z-10">
              <div className="flex flex-col">
                <div className="flex mt-3">
                  <div className="flex flex-col w-1/2 gap-1">
                    <div className="md:text-sm text-xs md:font-normal font-light">
                      TOLL FREE NUMBER
                    </div>
                    <div className="md:text-xl text-sm font-bold">
                      {tollFree}
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 gap-1">
                    <div className="md:text-sm text-xs md:font-normal font-light">
                      INTERNATIONAL CALL
                    </div>
                    <div className="md:text-lg text-sm font-medium">
                      {intCall}
                    </div>
                  </div>
                </div>
                <div className="text-[12px] font-light mt-3 w-[90%] z-50">
                  Contact the roadside assistance service for Ferrari Customers
                  and access an exclusive set of services available for your
                  car. INTERNATIONAL FREE PHONE NUMBER 00 800 0000 1947
                </div>
              </div>
            </div>
          )}
        </div>

      
        <ContactForm />

        <div className="max-w-screen md:h-auto md:overflow-hidden pl-3 pb-3">
          <div className="text-brGold text-lg font-light mb-2">Standorte</div>
          <div className="flex md:flex-row flex-col h-auto w-screen gap-8 md:max-w-[98%] md:justify-around">
            <MusiamCard
              name={"Autocenter Niederbipp AG"}
              conact={"+41 32-6330063"}
              mail={"info@acnag.ch"}
              adress={"Leenrütimattweg 3, 4707 Niederbipp"}
              src={"AcnAG/Kontakt/Standorte/Autocenterniederbippag.jpeg"}
            />
            <MusiamCard
              name={"Autocenter Zollikofen AG"}
              conact={"+031 910 40 10"}
              mail={"info@aczag.ch"}
              adress={"Bernstrasse 81, 3052 Zollikofen"}
              src={"/Contact/musiam (1).jpeg"}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Content;

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    street: "",
    zip: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <form

      className="p-3 rounded-lg shadow-md bg-[#181818] z-10"
    >
      <input type="hidden" name="_next" value="YOUR_THANK_YOU_PAGE_URL" />{" "}
      <input type="hidden" name="_captcha" value="false" />{" "}
      <h2 className="text-xl font-light mb-4 text-brGold">Kontaktformular</h2>
      <div className="mt-4">
        <label htmlFor="message" className="block text-white font-bold mb-2">
          Womit können wir Sie unterstützen?
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-brGray leading-tight focus:outline-none focus:shadow-outline"
          rows="5"
        ></textarea>
      </div>
      {/* File Upload */}


      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Name <span className="text-brGold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-brGray leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-white font-bold mb-2">
            Firma <span className="text-brGold">*</span>
          </label>
          <input
            required
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-brGray leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Street */}
        <div>
          <label htmlFor="street" className="block text-white font-bold mb-2">
            Strasse + Nr
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-brGray leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* ZIP Code */}
        <div>
          <label htmlFor="zip" className="block text-white font-bold mb-2">
            PLZ <span className="text-brGold">*</span>
          </label>
          <input
            required
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-brGray leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-white font-bold mb-2">
            Ort <span className="text-brGold">*</span>
          </label>
          <input
            required
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-brGray leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Country */}
        <div className="mb-4">
          <fieldset className=" h-auto rounded-lg w-full">
            <legend className="font-semibold text-sm text-white mb-[3.7%]">Land</legend>
            <select className="border-[2px] border-gray-300 rounded w-full p-2 text-white bg-brGray">
              {Data.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </fieldset>
        </div>

        {/* Email */}
        <div className="z-10">
          <label htmlFor="email" className="block text-white font-bold mb-2">
            E-Mail <span className="text-brGold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter Your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-brGray leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Phone */}
        <div className="z-10">
          <label htmlFor="phone" className="block text-white font-bold mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Your Number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-brGray leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      {/* Submit Button */}
      <Button
        onClick={() => Router.push("/resale")}
        type="submit"
        className="mt-4 bg-brGold text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Absenden
      </Button>
    </form>
  );
};

const MusiamCard = ({ src, name, conact, mail, adress }) => {
  return (
    <div className="flex flex-col w-[90%] md:w-[80%] md:h-[90%] overflow-hidden bg-[#181818] rounded-xl">
      <div className="overflow-hidden">
        <img
          src={src}
          alt="musiam"
          className="w-full h-full md:h-[30vh] object-cover hover:scale-125 ease-in-out duration-[5s] transition-transform"
        />
      </div>

      <div className="mt-2 flex flex-col gap-2 px-2">
        <div className="font-semibold text-sm md:text-lg">{name}</div>
        <div className="flex flex-col w-full">
          <div className="flex text-sm">
            Tel{" "}
            <div className="flex-grow justify-end flex text-sm">{conact}</div>
          </div>
          <div className="flex text-sm">
            Mail{" "}
            <div className="flex-grow justify-end flex text-sm ">{mail}</div>
          </div>
          <div className="flex text-sm">
            Adress{" "}
            <div className="flex-grow justify-end flex text-xs md:text-sm">
              {adress}
            </div>
          </div>
        </div>
        <div className="font-semibold text-sm md:text-lg">Öffnungszeiten</div>
        <div className="flex flex-col w-full">
          <div className="flex text-sm ">
            Montag
            <div className="flex-grow justify-end flex text-sm flex-col text-right">
              <div>08:00 - 12:00</div>
              <div>13:15 - 18:30</div>
            </div>
          </div>
          <div className="flex text-sm ">
            Dienstag
            <div className="flex-grow justify-end flex text-sm flex-col text-right">
              <div>08:00 - 12:00</div>
              <div>13:15 - 18:30</div>
            </div>
          </div>
          <div className="flex text-sm ">
            Mittwoch
            <div className="flex-grow justify-end flex text-sm flex-col text-right">
              <div>08:00 - 12:00</div>
              <div>13:15 - 18:30</div>
            </div>
          </div>
          <div className="flex text-sm ">
            Donnerstag
            <div className="flex-grow justify-end flex text-sm flex-col text-right">
              <div>08:00 - 12:00</div>
              <div>13:15 - 18:30</div>
            </div>
          </div>
          <div className="flex text-sm ">
            Freitag
            <div className="flex-grow justify-end flex text-sm flex-col text-right">
              <div>08:00 - 12:00</div>
              <div>13:15 - 18:30</div>
            </div>
          </div>
          <div className="flex text-sm ">
            Samstag
            <div className="flex-grow justify-end flex text-sm flex-col text-right">
              <div>08:00 - 12:00</div>
              <div>13:15 - 18:30</div>
            </div>
          </div>
          <div className="flex text-sm ">
            Sonntag
            <div className="flex-grow justify-end flex text-sm flex-col text-right">
              <div>Geschlossen</div>
            </div>
          </div>
          <button className="flex justify-start items-center w-[70%] text-sm">
            VISIT WEBSITE <MainButton />
          </button>
        </div>
      </div>
    </div>
  );
};

const MainButton = () => {
  return (
    <button className="button">
      <div className="button-box">
        <span className="button-elem">
          <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
          </svg>
        </span>
        <span className="button-elem">
          <svg viewBox="0 0 46 40">
            <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
          </svg>
        </span>
      </div>
    </button>
  );
};




// data for drop down options

const Data = [
  { label: "Schweiz", value: "schweiz" },
  { label: "Australia", value: "australia" },
  { label: "Germany", value: "germany" },
  { label: "USA", value: "usa" },
];


