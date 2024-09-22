"use client";
// Import necessary modules and components
import { Suspense, useEffect, useState } from "react";
import {Button} from "@nextui-org/react";
import CarCard from "./CarCard";
import { Pagination } from "@nextui-org/react";
import CarCardHorizontal from "./CarCardHorizontal";
import CarDetail from "./CarDetail";
import { useRouter } from "next/navigation";
import MainButton from "../accets/MainButton";
import AnimatedText from "../accets/common/AnimatedText";
import Image from "next/image";
import Loading from "@/app/loading";

export default function Filter() {
  const [resultCount, setResultCount] = useState(0);
  const [currentPage, setPage] = useState(1);
  const [postPerPage, setPosts] = useState(8);
  const [grid, setGrid] = useState([false, true]);
  const [Detail, setDetail] = useState(false);
  const [selectCar, setCar] = useState("");
  const [filters, setFilters] = useState({
    market: "",
    fuelType: "",
    price: "",
    Seats: "",
    transmition: "",
  });

  const ResetHandler = () => {
    return setFilters({
      market: "",
      fuelType: "",
      price: "",
      Seats: "",
      transmition: "",
    });
  };

  const filterCars = () => {
    return CarsData.filter((car) => {
      return (
        (!filters.market ||
          car.market.toLowerCase() === filters.market.toLowerCase()) &&
        (!filters.fuelType ||
          car.fuelType.toLowerCase() === filters.fuelType.toLowerCase()) &&
        (!filters.price ||
          parseFloat(car.price) <= parseFloat(filters.price)) &&
        (!filters.transmition ||
          car.transmition
            .toLowerCase()
            .includes(filters.transmition.toLowerCase())) &&
        (!filters.Seats || car.Seats === parseInt(filters.Seats))
      );
    });
  };

  let filteredCarsData = filterCars();

  useEffect(() => {
    setResultCount(filteredCarsData.length);
  }, [filteredCarsData]);

  useEffect(() => {
    if (grid[0] === true) {
      setPosts(3);
    } else {
      setPosts(8);
    }

    const updatePosts = () => {
      if (window.innerWidth < 700) {
        setPosts(3);
      } else {
        setPosts(8);
      }
    };

    updatePosts();
    window.addEventListener("resize", updatePosts);

    return () => {
      window.removeEventListener("resize", updatePosts);
    };
  }, [grid]);

  let lastPostIndex = currentPage * postPerPage;
  let firstPostIndex = lastPostIndex - postPerPage;
  let SlicedCarsData = filteredCarsData.slice(firstPostIndex, lastPostIndex);

  const detailHandler = (value) => {
    setGrid([false, false]);
    setCar(value);
    setDetail(true);
  };

  const detailHandlerInvers = () => {
    setGrid([false, true]);
    setDetail(false);
  };

  const Results = () => {
    return (
      <div className="flex flex-col md:w-[90%] w-[93%] h-auto ">
        {!Detail && (
          <div className="w-full h-[10vh] flex">
            <div className="flex items-center gap-2">
              <div className="font-bold text-3xl">{resultCount}</div>
              <div className="font-medium text-3xl">Ergebnisse</div>
            </div>
            <div className="flex-grow flex justify-end items-center gap-3">
              <div className="md:block hidden">
                <Image width={500} height={500}
                  loading="lazy"
                  src="/AcnAG/sales/list-grey.png"
                  alt="list"
                  className="object-cover md:w-8 md:h-[30px] cursor-pointer hover:scale-105"
                  onClick={() => setGrid([true, false])}
                />
              </div>
              <div className="md:block hidden">
                <Image width={500} height={500}
                  loading="lazy"

                  src="AcnAG/sales/grid-black.svg"
                  alt="grid"
                  className="object-cover md:w-8 md:h-[30px] cursor-pointer hover:scale-105"
                  onClick={() => setGrid([false, true])}
                />
              </div>
            </div>
          </div>
        )}
        {grid[1] && (
          <div className="w-full flex justify-center">
            <div className="md:grid flex flex-col grid-cols-4 md:gap-3 gap-4 w-full md:w-[90%]">
              {SlicedCarsData.map((value, index) => (
                <CarCard
                  key={index}
                  data={value}
                  onClick={() => detailHandler(value)}
                />
              ))}
            </div>
          </div>
        )}
        {grid[0] && (
          <div className="w-full flex justify-center">
            <div className="w-[80%] grid grid-cols-1 gap-4 overflow-hidden">
              {SlicedCarsData.map((car, index) => (
                <CarCardHorizontal
                  key={index}
                  data={car}
                  onClick={() => detailHandler(car)}
                />
              ))}
            </div>
          </div>
        )}
        {Detail && (
          <div className="flex flex-col md:items-center z-50">
            <div className="w-full flex justify-center">
              <Suspense fallback={<Loading/>}>
              <CarDetail data={selectCar} onClick={detailHandlerInvers} />
              </Suspense>
            </div>

          </div>
        )}
      </div>
    );
  };

  const handleFilterChange = (e, key) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: e.target.value }));
  };

  const router = useRouter();

  return (
    <div className="w-screen h-auto flex flex-col overflow-x-hidden text-white items-center">
      <div className="absolute z-0 top-[65vh] translate-y-[-1%]">
        <Image width={500} height={500}
                  loading="lazy"

          src="/background/Rectangle 156.svg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full relative text-white">
        <div className="hidden md:block w-full h-[65vh]">
          <Image width={500} height={500}
                  loading="lazy"

            src="/AcnAG/sales/sales.jpeg"
            alt="loading"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:hidden w-full h-screen">
          <Image width={500} height={500}
                  loading="lazy"

            src="/Contact/first_again.avif"
            alt="loading"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute md:w-[30%] w-[70%] flex flex-col gap-1 top-[55%] translate-y-[-50%] left-[8%]">
          <div className="text-xl font-bold">Hauptsitz</div>
          <div className="flex flex-col w-full">
            <div className="font-extrabold md:text-5xl text-2xl">
              Auto Center Niederbipp
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-lg font-medium text-brGold">
              <AnimatedText>
                Leenrütimattweg 3, 4704 Niederbipp
              </AnimatedText>
            </div>
            <div className="text-lg font-medium text-brGold">
              <AnimatedText>
                +032 633 00 63
              </AnimatedText>

            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="md:text-xl text-lg font-semibold text-white">
              Jetzt Anfrage erstellen
            </span>
            <MainButton
              className="bg-[#0D6EFD] md:text-xl text-lg font-semibold text-white"
              onClick={() => router.push("/resale/")}
            />
          </div>
        </div>
      </div>

      {!Detail && (
        <div className="md:p-0 p-2 w-full flex justify-center">
          <div className=" md:w-[85%] w-full md:p-0 mt-3 relative h-[70vh] md:h-[30vh] flex justify-center bg-[#181818] rounded-xl">
            <Selector handleFilterChange={handleFilterChange} />
            <Button
              className="md:block hidden absolute right-24 bottom-8 bg-brGold text-white w-20"
              onClick={ResetHandler}
            >
              Reset
            </Button>
          </div>
        </div>
      )}

      <Suspense fallback={<Loading/>}>
      <div className="w-full h-auto flex justify-center z-10">
        <Results />
      </div>
      </Suspense>

      <div className="flex w-[85%] justify-center p-4">
        {!Detail && (
          <divagination
            total={Math.ceil(filteredCarsData.length / postPerPage)}
            initialPage={1}
            onChange={(page) => setPage(page)}

          />
        )}
      </div>
    </div>
  );
}

const data = {
  market: ["Audi", "Bmw", "Mercedes", "Volkswagen", "Ferrari", "Porsche", "Lamborghini", "Volvo", "Seat"],
  fuelType: ["Diesel", "Electric", "Hybrid", "Benzin"],
  price: [10000, 20000, 50000, 100000, 200000],
  Seats: [2, 4, , 6, 7],
  transmition: ["Manual", "Automat", "Other"],
};

function FilterDropDown({ label, data, onChange }) {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
    onChange(e);
  };

  return (
    <div className="w-full h-[5vh] rounded-md flex gap-1 flex-col">
      <div className="md:text-xl text-sm">{label}</div>
      <select
        value={selected}
        onChange={handleChange}
        className="rounded-md bg-brGray text-white text-xl w-full p-2 border-[2px] border-slate-300"
      >
        <option value="" className="md:text-sm text-xs">
          Alle
        </option>
        {data.map((value, index) => (
          <option className="md:text-sm text-xs" value={value} key={index}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

function Selector({ handleFilterChange }) {
  return (
    <div className="w-[85%] md:gap-3 py-3 grid md:grid-cols-4 grid-cols-1 ">
      <FilterDropDown
        label="Marke"
        data={data.market}
        onChange={(e) => handleFilterChange(e, "market")}
      />
      <FilterDropDown
        label="Kraftstoffart"
        data={data.fuelType}
        onChange={(e) => handleFilterChange(e, "fuelType")}
      />
      <FilterDropDown
        label="Preis"
        data={data.price}
        onChange={(e) => handleFilterChange(e, "price")}
      />
      <FilterDropDown
        label="Sitzplätze"
        data={data.Seats}
        onChange={(e) => handleFilterChange(e, "Seats")}
      />
      <FilterDropDown
        label="Getriebeart"
        data={data.transmition}
        onChange={(e) => handleFilterChange(e, "transmition")}
      />
    </div>
  );
}


const CarsData = [
  {
    imageUrl: [
      "/AcnAG/Sales/cars/MERCEDES-BENZGLCCoup63SAMG4Matic9G-Tronic/e1.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZGLCCoup63SAMG4Matic9G-Tronic/e2.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZGLCCoup63SAMG4Matic9G-Tronic/e3.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZGLCCoup63SAMG4Matic9G-Tronic/e4.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZGLCCoup63SAMG4Matic9G-Tronic/e5.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZGLCCoup63SAMG4Matic9G-Tronic/e6.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZGLCCoup63SAMG4Matic9G-Tronic/e7.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZGLCCoup63SAMG4Matic9G-Tronic/e8.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZGLCCoup63SAMG4Matic9G-Tronic/e9.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZGLCCoup63SAMG4Matic9G-Tronic/e10.webp",
    ],
    drive: "Allrad",
    name: "MERCEDES-BENZ GLC Coupé 63 S AMG 4Matic 9G-Tronic",
    price: `CHF ${new Intl.NumberFormat("de-CH").format(65900)}`,
    instalment: 65900 / 12,
    Inverkehrsetzung: "10.2019",
    market: "Occasion",
    transmition: "Automat",
    kilometer: "88'000 km",
    fuelType: "Benzin",
    power: "510 PS (375 kW)",
    CO2: "36g/km",
    CombineCO2: "158 g/km",
    deler: "Autocenter Niederbipp AG",
    adress: "Leenrütimattweg 3, 4704 Niederbipp",
    phone: "+41 79 723 99 99",
    guarantee: "Yes",
    type: "SUV",
    color: "Black",
    seats: "5",
    Hubraum: "3'982 cm³",
    Zylinder: "8",
    Motorbauart: "V",
    Gänge: "9",
    weight: "1'900 kg",
    gebremst: "Yes",
    Lizenzkategorie: "B",
    Zustand: "Occasion",
    condition: "Used",
    Neupreis: `CHF ${new Intl.NumberFormat("de-CH").format(129300)}`,
    Direkt: "No",
    ausstattungen: `
        <h2 className="text-3xl font-bold mb-2">Ausstattungen</h2>
        <h3 className="text-xl font-semibold mb-4">Optionale Ausstattung</h3>
        <ul className="list-disc pl-5 text-base">
          <li>Anhängerkupplung</li>
          <li>Assist: Driving Assistant Professional</li>
          <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
          <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
          <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
          <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
          <li>Lackierung: Metallic-Lackierung</li>
          <li>M Dachreling Hochglanz Shadow Line</li>
          <li>Media: BMW Live Cockpit Professional</li>
          <li>Media: harman/kardon Surround Sound-System</li>
        </ul>
        
        <div class="pt-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Ausstattungen</h2>
          </div>
          <h3 class="text-lg font-medium mb-2">Optionale Ausstattung</h3>
          <ul class="list-disc ml-4">
            <li>Anhängerkupplung</li>
            <li>Assist: Driving Assistant Professional</li>
            <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
            <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
            <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
            <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
            <li>Lackierung: Metallic-Lackierung</li>
            <li>M Dachreling Hochglanz Shadow Line</li>
            <li>Media: BMW Live Cockpit Professional</li>
            <li>Media: harman/kardon Surround Sound-System</li>
          </ul>
        </div>

  `
  },
  {
    imageUrl: [
      "/AcnAG/sales/cars/BMW320dxDriveMSportSteptronic/b1.webp",
      "/AcnAG/sales/cars/BMW320dxDriveMSportSteptronic/b2.webp",
      "/AcnAG/sales/cars/BMW320dxDriveMSportSteptronic/b3.webp",
      "/AcnAG/sales/cars/BMW320dxDriveMSportSteptronic/b4.webp",
      "/AcnAG/sales/cars/BMW320dxDriveMSportSteptronic/b5.webp",
      "/AcnAG/sales/cars/BMW320dxDriveMSportSteptronic/b6.webp",
      "/AcnAG/sales/cars/BMW320dxDriveMSportSteptronic/b7.webp",
      "/AcnAG/sales/cars/BMW320dxDriveMSportSteptronic/b8.webp",
      "/AcnAG/sales/cars/BMW320dxDriveMSportSteptronic/b9.webp",
      "/AcnAG/sales/cars/BMW320dxDriveMSportSteptronic/b10.webp",
    ],
    drive: "Allrad",
    name: "BMW 320d xDrive M Sport Steptronic",
    price: `CHF ${new Intl.NumberFormat("de-CH").format(34900)}`,
    instalment: 34900 / 12,
    Inverkehrsetzung: "07.2019",
    market: "Occasion",
    transmition: "Automat",
    kilometer: "126'000 km",
    fuelType: "Diesel",
    power: "190 PS (140 kW)",
    CO2: "122 g/km",
    CombineCO2: "139 g/km",
    deler: "Autocenter Zürich AG",
    adress: "Bahnhofstrasse 12, 8001 Zürich",
    phone: "+41 44 123 45 67",
    guarantee: "Yes",
    type: "Limousine",
    color: "schwarz",
    seats: "5",
    Hubraum: "1995 cm³",
    Zylinder: "4",
    Motorbauart: "Inline",
    Gänge: "8",
    weight: "1'530 kg",
    braked: "Yes",
    Lizenzkategorie: "B",
    Zustand: "Occasion",
    condition: "Used",
    Neupreis: `CHF ${new Intl.NumberFormat("de-CH").format(80000)}`,
    Direkt: "No",
    ausstattungen: `
        <h2 className="text-3xl font-bold mb-2">Ausstattungen</h2>
        <h3 className="text-xl font-semibold mb-4">Optionale Ausstattung</h3>
        <ul className="list-disc pl-5 text-base">
          <li>Anhängerkupplung</li>
          <li>Assist: Driving Assistant Professional</li>
          <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
          <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
          <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
          <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
          <li>Lackierung: Metallic-Lackierung</li>
          <li>M Dachreling Hochglanz Shadow Line</li>
          <li>Media: BMW Live Cockpit Professional</li>
          <li>Media: harman/kardon Surround Sound-System</li>
        </ul>
        
        <div class="pt-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Ausstattungen</h2>
          </div>
          <h3 class="text-lg font-medium mb-2">Optionale Ausstattung</h3>
          <ul class="list-disc ml-4">
            <li>Anhängerkupplung</li>
            <li>Assist: Driving Assistant Professional</li>
            <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
            <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
            <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
            <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
            <li>Lackierung: Metallic-Lackierung</li>
            <li>M Dachreling Hochglanz Shadow Line</li>
            <li>Media: BMW Live Cockpit Professional</li>
            <li>Media: harman/kardon Surround Sound-System</li>
          </ul>
        </div>
  `
  },
  {
    imageUrl: [
      "/AcnAG/sales/cars/MERCEDES-BENZCLA45AMG4MaticSpeedshift/c1.webp",
      "/AcnAG/sales/cars/MERCEDES-BENZCLA45AMG4MaticSpeedshift/c2.webp",
      "/AcnAG/sales/cars/MERCEDES-BENZCLA45AMG4MaticSpeedshift/c3.webp",
      "/AcnAG/sales/cars/MERCEDES-BENZCLA45AMG4MaticSpeedshift/c4.webp",
      "/AcnAG/sales/cars/MERCEDES-BENZCLA45AMG4MaticSpeedshift/c5.webp",
      "/AcnAG/sales/cars/MERCEDES-BENZCLA45AMG4MaticSpeedshift/c6.webp",
      "/AcnAG/sales/cars/MERCEDES-BENZCLA45AMG4MaticSpeedshift/c7.webp",
      "/AcnAG/sales/cars/MERCEDES-BENZCLA45AMG4MaticSpeedshift/c8.webp",
      "/AcnAG/sales/cars/MERCEDES-BENZCLA45AMG4MaticSpeedshift/c9.webp",
      "/AcnAG/sales/cars/MERCEDES-BENZCLA45AMG4MaticSpeedshift/c10.webp",
    ],
    drive: "All Wheel Drive",
    name: "MERCEDES-BENZ CLA 45 AMG 4Matic Speedshift",
    price: `CHF ${new Intl.NumberFormat("de-CH").format(65900)}`,
    instalment: 65900 / 12,
    Inverkehrsetzung: "03.2020",
    market: "Occasion",
    transmition: "Automat",
    kilometer: "40'000 km",
    fuelType: "Benzin",
    power: "381 PS",
    CO2: "187 g/km",
    CombineCO2: "199 g/km",
    deler: "Autocenter Basel AG",
    adress: "Grosser Markt 15, 4051 Basel",
    phone: "+41 61 234 56 78",
    guarantee: "Yes",
    type: "Coupe",
    color: "White",
    seats: "4",
    Hubraum: "1991 cm³",
    Zylinder: "4",
    Motorbauart: "Inline",
    Gänge: "7",
    weight: "1'800 kg",
    braked: "Yes",
    Lizenzkategorie: "B",
    Zustand: "Occasion",
    condition: "Used",
    Neupreis: `CHF ${new Intl.NumberFormat("de-CH").format(71000)}`,
    Direkt: "No",
    ausstattungen: `
    <div className='flex flex-col h-auto items-start'>
      <div className={\`\${isOpen ? "h-auto py-4" : "md:h-[50vh] h-[63vh] pt-4"} w-full overflow-hidden\`}>
        <h2 className="text-3xl font-bold mb-2">Ausstattungen</h2>
        <h3 className="text-xl font-semibold mb-4">Optionale Ausstattung</h3>
        <ul className="list-disc pl-5 text-base">
          <li>Anhängerkupplung</li>
          <li>Assist: Driving Assistant Professional</li>
          <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
          <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
          <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
          <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
          <li>Lackierung: Metallic-Lackierung</li>
          <li>M Dachreling Hochglanz Shadow Line</li>
          <li>Media: BMW Live Cockpit Professional</li>
          <li>Media: harman/kardon Surround Sound-System</li>
        </ul>
        
        <div class="pt-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Ausstattungen</h2>
          </div>
          <h3 class="text-lg font-medium mb-2">Optionale Ausstattung</h3>
          <ul class="list-disc ml-4">
            <li>Anhängerkupplung</li>
            <li>Assist: Driving Assistant Professional</li>
            <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
            <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
            <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
            <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
            <li>Lackierung: Metallic-Lackierung</li>
            <li>M Dachreling Hochglanz Shadow Line</li>
            <li>Media: BMW Live Cockpit Professional</li>
            <li>Media: harman/kardon Surround Sound-System</li>
          </ul>
        </div>
      </div>
    </div>
  `
  },
  {
    imageUrl: [
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h1.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h2.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h3.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h4.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h5.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h6.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h7.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h8.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h9.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h10.webp",
    ],
    drive: "All Wheel Drive",
    name: "MERCEDES-BENZ S63 AMG Coupé 4Matic Speedshift MCT",
    price: `CHF ${new Intl.NumberFormat("de-CH").format(65900)}`,
    instalment: 65900 / 12,
    Inverkehrsetzung: "01.2021",
    market: "Occasion",
    transmition: "Automat",
    kilometer: "53'300 km",
    fuelType: "Benzin",
    power: "265 PS",
    CO2: "36g/km",
    CombineCO2: "158 g/km",
    deler: "Autocenter Niederbipp AG",
    adress: "Leenrütimattweg 3, 4704 Niederbipp",
    phone: "+41 79 723 99 99",
    guarantee: "Yes",
    type: "SUV",
    color: "Black",
    seats: "2",
    Hubraum: "2993 cm³",
    Zylinder: "6",
    Motorbauart: "Row",
    Gänge: "8",
    weight: "1'900 kg",
    braked: "Yes",
    Lizenzkategorie: "B",
    Zustand: "Occasion",
    condition: "Used",
    Neupreis: `CHF ${new Intl.NumberFormat("de-CH").format(143040)}`,
    Direkt: "No",
    ausstattungen: `
        <h2 className="text-3xl font-bold mb-2">Ausstattungen</h2>
        <h3 className="text-xl font-semibold mb-4">Optionale Ausstattung</h3>
        <ul className="list-disc pl-5 text-base">
          <li>Anhängerkupplung</li>
          <li>Assist: Driving Assistant Professional</li>
          <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
          <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
          <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
          <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
          <li>Lackierung: Metallic-Lackierung</li>
          <li>M Dachreling Hochglanz Shadow Line</li>
          <li>Media: BMW Live Cockpit Professional</li>
          <li>Media: harman/kardon Surround Sound-System</li>
        </ul>
        
        <div class="pt-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Ausstattungen</h2>
          </div>
          <h3 class="text-lg font-medium mb-2">Optionale Ausstattung</h3>
          <ul class="list-disc ml-4">
            <li>Anhängerkupplung</li>
            <li>Assist: Driving Assistant Professional</li>
            <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
            <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
            <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
            <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
            <li>Lackierung: Metallic-Lackierung</li>
            <li>M Dachreling Hochglanz Shadow Line</li>
            <li>Media: BMW Live Cockpit Professional</li>
            <li>Media: harman/kardon Surround Sound-System</li>
          </ul>
        </div>
  `
  },
  {
    imageUrl: [
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h1.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h2.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h3.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h4.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h5.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h6.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h7.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h8.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h9.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZS63AMGCoup4MaticSpeedshiftMCT/h10.webp",
    ],
    drive: "All Wheel Drive",
    name: "AUDI Q7 55 TFSIe quattro 8G",
    price: `CHF ${new Intl.NumberFormat("de-CH").format(82900)}`,
    instalment: 82900 / 12,
    Inverkehrsetzung: "07.2023",
    market: "New",
    transmition: "Automat",
    kilometer: "0 km",
    fuelType: "Hybrid",
    power: "381 PS",
    CO2: "41g/km",
    CombineCO2: "189 g/km",
    deler: "Autocenter Lausanne AG",
    adress: "Avenue des Alpes 34, 1006 Lausanne",
    phone: "+41 21 456 78 90",
    guarantee: "Yes",
    type: "SUV",
    color: "Silver",
    seats: "7",
    Hubraum: "2995 cm³",
    Zylinder: "6",
    Motorbauart: "Row",
    Gänge: "8",
    weight: "2'500 kg",
    braked: "Yes",
    Lizenzkategorie: "B",
    Zustand: "New",
    condition: "New",
    Neupreis: `CHF ${new Intl.NumberFormat("de-CH").format(92000)}`,
    Direkt: "No",
    ausstattungen: `
    <div className='flex flex-col h-auto items-start'>
      <div className={\`\${isOpen ? "h-auto py-4" : "md:h-[50vh] h-[63vh] pt-4"} w-full overflow-hidden\`}>
        <h2 className="text-3xl font-bold mb-2">Ausstattungen</h2>
        <h3 className="text-xl font-semibold mb-4">Optionale Ausstattung</h3>
        <ul className="list-disc pl-5 text-base">
          <li>Anhängerkupplung</li>
          <li>Assist: Driving Assistant Professional</li>
          <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
          <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
          <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
          <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
          <li>Lackierung: Metallic-Lackierung</li>
          <li>M Dachreling Hochglanz Shadow Line</li>
          <li>Media: BMW Live Cockpit Professional</li>
          <li>Media: harman/kardon Surround Sound-System</li>
        </ul>
        
        <div class="pt-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Ausstattungen</h2>
          </div>
          <h3 class="text-lg font-medium mb-2">Optionale Ausstattung</h3>
          <ul class="list-disc ml-4">
            <li>Anhängerkupplung</li>
            <li>Assist: Driving Assistant Professional</li>
            <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
            <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
            <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
            <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
            <li>Lackierung: Metallic-Lackierung</li>
            <li>M Dachreling Hochglanz Shadow Line</li>
            <li>Media: BMW Live Cockpit Professional</li>
            <li>Media: harman/kardon Surround Sound-System</li>
          </ul>
        </div>
      </div>
    </div>
  `
  },
  {
    imageUrl: [
      "/AcnAG/Sales/cars/MERCEDES-BENZAMGGTSEdition1SpeedshiftDCT/a1.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZAMGGTSEdition1SpeedshiftDCT/a2.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZAMGGTSEdition1SpeedshiftDCT/a3.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZAMGGTSEdition1SpeedshiftDCT/a4.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZAMGGTSEdition1SpeedshiftDCT/a5.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZAMGGTSEdition1SpeedshiftDCT/a6.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZAMGGTSEdition1SpeedshiftDCT/a7.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZAMGGTSEdition1SpeedshiftDCT/a8.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZAMGGTSEdition1SpeedshiftDCT/a9.webp",
      "/AcnAG/Sales/cars/MERCEDES-BENZAMGGTSEdition1SpeedshiftDCT/a10.webp",
    ],
    drive: "All Wheel Drive",
    name: "Volkswagen Tiguan 2.0 TDI 4MOTION DSG",
    price: `CHF ${new Intl.NumberFormat("de-CH").format(27900)}`,
    instalment: 27900 / 12,
    Inverkehrsetzung: "11.2019",
    market: "Occasion",
    transmition: "Automat",
    kilometer: "55'000 km",
    fuelType: "Diesel",
    power: "150 PS",
    CO2: "144 g/km",
    CombineCO2: "162 g/km",
    deler: "Autocenter Bern AG",
    adress: "Münsterplattform 3, 3011 Bern",
    phone: "+41 31 234 56 78",
    guarantee: "Yes",
    type: "SUV",
    color: "Grey",
    seats: "5",
    Hubraum: "1968 cm³",
    Zylinder: "4",
    Motorbauart: "Inline",
    Gänge: "7",
    weight: "2'500 kg",
    braked: "Yes",
    Lizenzkategorie: "B",
    Zustand: "Occasion",
    condition: "Used",
    Neupreis: `CHF ${new Intl.NumberFormat("de-CH").format(34000)}`,
    Direkt: "No",
    ausstattungen: `
        <h2 className="text-3xl font-bold mb-2">Ausstattungen</h2>
        <h3 className="text-xl font-semibold mb-4">Optionale Ausstattung</h3>
        <ul className="list-disc pl-5 text-base">
          <li>Anhängerkupplung</li>
          <li>Assist: Driving Assistant Professional</li>
          <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
          <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
          <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
          <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
          <li>Lackierung: Metallic-Lackierung</li>
          <li>M Dachreling Hochglanz Shadow Line</li>
          <li>Media: BMW Live Cockpit Professional</li>
          <li>Media: harman/kardon Surround Sound-System</li>
        </ul>
        
        <div class="pt-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Ausstattungen</h2>
          </div>
          <h3 class="text-lg font-medium mb-2">Optionale Ausstattung</h3>
          <ul class="list-disc ml-4">
            <li>Anhängerkupplung</li>
            <li>Assist: Driving Assistant Professional</li>
            <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
            <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
            <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
            <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
            <li>Lackierung: Metallic-Lackierung</li>
            <li>M Dachreling Hochglanz Shadow Line</li>
            <li>Media: BMW Live Cockpit Professional</li>
            <li>Media: harman/kardon Surround Sound-System</li>
          </ul>
        </div>

  `
  },
  {
    imageUrl: [
      "/AcnAG/Sales/cars/BMMX7xDrive30dSteptronic2/f1.webp",
      "/AcnAG/Sales/cars/BMMX7xDrive30dSteptronic2/f2.webp",
      "/AcnAG/Sales/cars/BMMX7xDrive30dSteptronic2/f3.webp",
      "/AcnAG/Sales/cars/BMMX7xDrive30dSteptronic2/f4.webp",
      "/AcnAG/Sales/cars/BMMX7xDrive30dSteptronic2/f5.webp",
      "/AcnAG/Sales/cars/BMMX7xDrive30dSteptronic2/f6.webp",
      "/AcnAG/Sales/cars/BMMX7xDrive30dSteptronic2/f7.webp",
      "/AcnAG/Sales/cars/BMMX7xDrive30dSteptronic2/f8.webp",
      "/AcnAG/Sales/cars/BMMX7xDrive30dSteptronic2/f9.webp",
      "/AcnAG/Sales/cars/BMMX7xDrive30dSteptronic2/f10.webp",
    ],
    drive: "Rear Wheel Drive",
    name: "Porsche 911 Carrera S PDK",
    price: `CHF ${new Intl.NumberFormat("de-CH").format(119000)}`,
    instalment: 119000 / 12,
    Inverkehrsetzung: "05.2022",
    market: "Occasion",
    transmition: "Automat",
    kilometer: "20'000 km",
    fuelType: "Benzin",
    power: "450 PS",
    CO2: "206 g/km",
    CombineCO2: "219 g/km",
    deler: "Autocenter Genève AG",
    adress: "Rue du Rhône 25, 1204 Genève",
    phone: "+41 22 345 67 89",
    guarantee: "Yes",
    type: "Coupe",
    color: "Red",
    seats: "2",
    Hubraum: "2981 cm³",
    Zylinder: "6",
    Motorbauart: "Flat",
    Gänge: "8",
    weight: "750 kg",
    braked: "No",
    Lizenzkategorie: "B",
    Zustand: "Occasion",
    condition: "Used",
    Neupreis: `CHF ${new Intl.NumberFormat("de-CH").format(125000)}`,
    Direkt: "No",
    ausstattungen: `
    <div className='flex flex-col h-auto items-start'>
      <div className={\`\${isOpen ? "h-auto py-4" : "md:h-[50vh] h-[63vh] pt-4"} w-full overflow-hidden\`}>
        <h2 className="text-3xl font-bold mb-2">Ausstattungen</h2>
        <h3 className="text-xl font-semibold mb-4">Optionale Ausstattung</h3>
        <ul className="list-disc pl-5 text-base">
          <li>Anhängerkupplung</li>
          <li>Assist: Driving Assistant Professional</li>
          <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
          <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
          <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
          <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
          <li>Lackierung: Metallic-Lackierung</li>
          <li>M Dachreling Hochglanz Shadow Line</li>
          <li>Media: BMW Live Cockpit Professional</li>
          <li>Media: harman/kardon Surround Sound-System</li>
        </ul>
        
        <div class="pt-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Ausstattungen</h2>
          </div>
          <h3 class="text-lg font-medium mb-2">Optionale Ausstattung</h3>
          <ul class="list-disc ml-4">
            <li>Anhängerkupplung</li>
            <li>Assist: Driving Assistant Professional</li>
            <li>Dekor: BMW Individual Instrumententafel lederbezogen</li>
            <li>Dekor: BMW Individual Interieurleisten Pianolack schwarz</li>
            <li>Dekor: Glasapplikation CraftedClarity für Interieurelemente</li>
            <li>Fahrwerk: Adaptive 2-Achs Luftfederung</li>
            <li>Lackierung: Metallic-Lackierung</li>
            <li>M Dachreling Hochglanz Shadow Line</li>
            <li>Media: BMW Live Cockpit Professional</li>
            <li>Media: harman/kardon Surround Sound-System</li>
          </ul>
        </div>
      </div>
    </div>
  `
  }
];