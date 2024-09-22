'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import React, { Suspense, useRef, useState } from 'react';
import { faDownload, faFilePdf, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Timings from "./Timings"
import TextDetails from './TextDetails'
import Image from 'next/image';

function CarDetail({ data, onClick }) {
  const [mainImg, setMainImg] = useState(data.imageUrl[0]);
  const printRef = useRef();

  const handleImgClick = (value) => {
    setMainImg(value);
  };

  const handleDownloadPdf = async () => {
    const element = printRef.current;

    element.classList.add('black-text', 'pdf-bg');

    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('car-details.pdf');

    // Remove black text and background color classes
    element.classList.remove('black-text', 'pdf-bg');
  };


  const [newDis, setDis] = useState(true)
  const CarInfo = ({ data }) => {
    return (
      <div className='flex flex-col justify-center w-[90%] h-[65%] gap-3 text-white mb-2 md:mt-0 mt-20'>
        <div className='flex items-center font-bold md:text-3xl text-lg'>{data.price}</div>

        <div className='flex flex-col h-auto text-lg gap-1 text-brGold'>
          <div className='flex items-center gap-2'><Image width={500} height={500} loading="lazy" src="/icon/sales/cardetails/payments.svg" alt="PAYMET"  className='w-7 h-7 object-cover' /><div>{`${Math.round(data.instalment)}- pro Monat mit Leasingvertrag`}</div></div>
          <div className='flex items-center gap-2'><Image width={500} height={500} loading="lazy" src="/icon/sales/cardetails/bank.svg" alt="loading" className='w-7 h-7 object-cover' /><div>Kreditrate berechnen</div></div>
          <div className='flex items-center gap-2'><Image width={500} height={500} loading="lazy" src="/icon/sales/cardetails/publish.svg" alt="loading" className='w-7 h-7 object-cover' /><div>Versicherungsprämie berechnen</div></div>

        </div>

        <Button className='bg-brGold md:text-[22px] text-[16px] rounded p-2 text-white' onClick={() => setDis(false)}>
          Anfrage sender
        </Button>
        <div className='w-full h-[0.3px] bg-slate-400 mt-3'></div>

        <div className='flex justify-around gap-2'>
          <Button className='flex gap-2 md:w-[10rem]'><FontAwesomeIcon icon={faFilePdf} />Druken</Button>
          <Button className='flex gap-2' onClick={handleDownloadPdf}><FontAwesomeIcon icon={faDownload} /> Download PDF</Button>
        </div>

        <div className='w-full h-[0.3px] bg-slate-400 mt-2'></div>
        <div className='flex flex-col w-full gap-1'>
          <div className='flex flex-col gap-1 font-light'>
            <div className='md:text-lg text-sm font-bold'>Lhr Handler</div>
            <div className='md:text-lg text-sm'>{data.deler}</div>
          </div>
          <div className='flex items-center md:text-lg text-sm font-light gap-2'>
            <FontAwesomeIcon icon={faLocation} className='w-6 h-6' />{data.adress}
          </div>
          <div className='flex items-center md:text-lg text-sm font-light gap-2'>
            <FontAwesomeIcon icon={faPhone} className='w-6 h-6' />{data.phone}
          </div>
        </div>
      </div>
    );
  };

  return (

    <>
      {newDis && (
        <div className='flex flex-col'>
          <div>
            <div className='flex flex-col md:w-[80vw]  w-[90vw] h-auto gap-2 text-white md:px-10' ref={printRef}>
              <div className='md:w-full w-full md:pl-10'>
                <button
                  className='md:w-[20%] w-[60%] py-2 font-bold text-brGold flex items-center mt-2 hover:scale-105'
                  onClick={onClick}
                >
                  <ion-icon name="chevron-back-outline"></ion-icon>Zurück zur Übersicht
                </button>
              </div>

              {/* for desktop */}
              <div className='md:flex hidden justify-center w-full h-auto gap-2'>
                <div className='w-[40%] h-full flex flex-col gap-3'>
                  {/* first half */}
                  <div className='font-medium md:text-4xl text-lg text-white'>{data.name}</div>
                  <Image width={500} height={500} loading="lazy"
                    src={mainImg}
                    alt="Car"
                    className='object-cover w-full h-[85%]'
                  />
                  <div className='grid grid-cols-4 gap-2 w-full'>
                    {data.imageUrl.slice(1).map((value, index) => (
                      <Image width={500} height={500} loading="lazy"
                        key={index}
                        src={value}
                        alt='Car detail'
                        className='object-cover cursor-pointer'
                        onClick={() => handleImgClick(value)}
                      />
                    ))}
                  </div>

                </div>

                <div className='w-1/2 h-full flex flex-col px-16 relative'>
                  {/* 2nd half */}
                  <CarInfo data={data} />
                  <Timings />
                </div>
              </div>

              {/* for Mobile */}
              <div className='md:hidden flex flex-col w-[100vw] h-auto gap-4 items-center'>
                <div className='w-full h-full flex flex-col gap-3'>
                  {/* first half */}
                  <div className='font-medium md:text-2xl text-lg w-[95%] text-white'>{data.name}</div>
                  <Image width={500} height={500} loading="lazy"
                    src={mainImg}
                    alt="Car"
                    className='object-cover w-[90%] h-full rounded'
                  />
                  <div className='grid grid-cols-4 gap-2 w-[90%]'>
                    {data.imageUrl.slice(1).map((value, index) => (
                      <Image width={500} height={500} loading="lazy"
                        key={index}
                        src={value}
                        alt='Car detail'
                        className='object-cover cursor-pointer rounded'
                        onClick={() => handleImgClick(value)}
                      />
                    ))}
                  </div>
                  <div className='flex flex-col h-auto w-[100%]'>
                    {/* 1st half Down part */}
                    <CarInfo data={data} />
                    <Timings />


                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='flex h-auto md:w-[80vw] w-full justify-center'>
            {/* 1st half Down part */}
            <FinalDetails data={data} />
          </div>

          <div className='md:w-[80vw] w-full flex justify-center'>
            <div className='md:w-[90%] w-full md:px-7 '>
              <TextDetails />
            </div>
          </div>


        </div>
      )}

      {!newDis && (
        <FinalDisplay data={data} setDis={setDis} />
      )}
    </>
  );
}

export default CarDetail;




function FinalDisplay({ data, setDis }) {
  const [mainImg, setMainImg] = useState(data.imageUrl[0]);

  const handleImgClick = (imgUrl) => {
    setMainImg(imgUrl);
  };

  return (
    <div className="flex md:w-[85%] w-full flex-col items-center text-white mt-3">
      <div className='w-full'>
        <button
          className='md:w-[20%] w-[60%] py-2 font-bold md:ml-0  text-brGold flex items-center mt-2 hover:scale-105'
          onClick={() => setDis(true)}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>Zurück zur Übersicht
        </button>
      </div>
      {/* Car Details Section */}
      <div className="flex flex-col w-full items-start space-y-8">
        <div className='text-2xl font-light w-full'>
          {data.name}
        </div>
        {/* Left: Main Image + Thumbnails */}
        <div className="flex md:flex-row flex-col w-full gap-5">
          <div className="md:w-[45%] w-full md:h-[50vh] rounded overflow-hidden">
            <Image
              width={500}
              height={500}
              loading="lazy"
              src={mainImg}
              alt="Main Car"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {data.imageUrl.slice(1).map((imgUrl, idx) => (
              <div key={idx} className="cursor-pointer rounded overflow-hidden">

                <Image
                  width={100}
                  height={100}
                  loading="lazy"
                  src={imgUrl}
                  alt="Car Thumbnail"
                  className="object-cover w-full h-full"
                  onClick={() => handleImgClick(imgUrl)}
                />
              </div>
            ))}
          </div>
        </div>


        {/* Right: Car Info */}
        <div class="md:w-2/5 w-full text-white">
          <h2 class="font-bold md:text-2xl mb-2">
            Ihr Händler
          </h2>

          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <Image width={500} height={500} loading="lazy" src="/icon/sales/apartment.svg" alt="Building Icon" class="h-5 w-5" />
              <div>Autocenter Niederbipp</div>
            </div>
            <div class="flex items-center space-x-2">
              <Image width={500} height={500} loading="lazy" src="/icon/sales/location.svg" alt="Map Pin Icon" class="h-5 w-5" />
              <div>Old Street New House 125</div>
            </div>

            <div class="flex items-center space-x-2">
              <Image width={500} height={500} loading="lazy" src="/icon/sales/call.svg" alt="Phone Icon" class="h-5 w-5" />
              <div>+91 291 232 0392</div>
            </div>
          </div>
        </div>


        {/* Form Section */}
        <div class="w-full py-4 rounded-lg space-y-4">
          <h2 class="text-xl font-semibold text-white">Interesse?</h2>
          <div class="text-white">
            Dann kontaktieren Sie uns per Telefon oder über das Kontaktformular
          </div>
          <button class="bg-brGold text-white px-4 py-2 rounded-lg ">
            078 900 76 44
          </button>

          <form class="w-full">
            <div class="space-y-4">
              <div class="bg-[#181818] p-3 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg">
                <div class="flex flex-col gap-1">
                  <label class="text-sm text-white">Name<span class="text-brGold">*</span></label>
                  <input
                    type="text"
                    class="p-2 bg-brGray border border-gray-700 rounded text-white"
                    required
                  />
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-sm text-white">Firma<span class="text-brGold">*</span></label>
                  <input
                    type="text"
                    class="p-2 bg-brGray border border-gray-700 rounded text-white"
                    required
                  />
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-sm text-white">Straße + Nr<span class="text-brGold">*</span></label>
                  <input
                    type="text"
                    class="p-2 bg-brGray border border-gray-700 rounded text-white"
                    required
                  />
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-sm text-white">PLZ<span class="text-brGold">*</span></label>
                  <input
                    type="text"
                    class="p-2 bg-brGray border border-gray-700 rounded text-white"
                    required
                  />
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-sm text-white">Ort<span class="text-brGold">*</span></label>
                  <input
                    type="text"
                    class="p-2 bg-brGray border border-gray-700 rounded text-white"
                    required
                  />
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-sm text-white">Land<span class="text-brGold">*</span></label>
                  <select
                    class="p-2 bg-brGray border border-gray-700 rounded text-white"
                    required
                  >
                    <option>Land wählen</option>
                  </select>
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-sm text-white">E-Mail<span class="text-brGold">*</span></label>
                  <input
                    type="email"
                    class="p-2 bg-brGray border border-gray-700 rounded text-white"
                    required
                  />
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-sm text-white">Telefon</label>
                  <input
                    type="text"
                    class="p-2 bg-brGray border border-gray-700 rounded text-white"
                  />
                </div>
              </div>
            </div>

            <div class="col-span-2 flex flex-col bg-[#181818] p-3 mt-3 rounded-lg">
              <label class="text-sm text-white">Nachricht</label>
              <textarea
                class="p-2 bg-brGray border border-gray-700 rounded h-24 text-white"
              ></textarea>
            </div>

            <div class="bg-[#181818] mt-3 p-3 rounded-lg">
              <Button
                type="submit"
                class="bg-brGold text-white px-4 py-2 rounded-lg"
              >
                Absenden
              </Button>
            </div>
          </form>
        </div>



      </div>
    </div>
  );
}


const DetailCard = ({ src, name }) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='w-7 h-7'>
        <Image width={500} height={500} loading="lazy" src={src} className='w-full h-full object-contain' alt="icon" />
      </div>
      <div className='text-lg font-light'>{name}</div>
    </div>
  );
};

const FinalDetails = ({ data }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const details = [
    { src: "/icon/sales/cardetails/details/calander.svg", name: `${data.Inverkehrsetzung}` },
    { src: "/icon/sales/cardetails/details/car.svg", name: `${data.type}` },
    { src: "/icon/sales/cardetails/details/road.svg", name: `${data.kilometer}` },
    { src: "/icon/sales/cardetails/details/station.svg", name: `${data.fuelType}` },
    { src: "/icon/sales/cardetails/details/gear_type.svg", name: `${data.transmition}` },
    { src: "/icon/sales/cardetails/details/speed.svg", name: `${data.power}` },
    { src: "/icon/sales/cardetails/details/gear.svg", name: `${data.drive}` },
  ];

  return (
    <div className='h-full md:w-[90%] w-full flex flex-col text-[#B29146] gap-4 mt-4 md:px-7'>
      <div className='font-semibold text-3xl'>FAHRZEUGDATEN</div>
      <div className='grid grid-cols-2 gap-5 md:w-[50%] w-full flex-wrap'>
        {details.map((detail, index) => (
          <DetailCard key={index} src={detail.src} name={detail.name} />
        ))}
      </div>
      <div
        className='text-sm text-brGold mt-1 cursor-pointer flex items-center gap-1 transition-all duration-300'
        onClick={() => setDetailsVisible(!detailsVisible)}
      >
        <Image width={500} height={500} loading="lazy"
          src="/icon/sales/cardetails/arrow.svg"
          alt="arrow"
          className={`w-4 h-4 object-cover transition-transform duration-300 ${detailsVisible ? "-rotate-90" : "rotate-90"}`}
        />
        <span>Alle Fahrzeugdaten anzeigen</span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500  md:px-0 pr-2 ${detailsVisible ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`}
      >
        <TechnikDetails data={data} />
      </div>
    </div>
  );
};



const TechnikDetails = ({ data }) => {
  const techDetails = [
    { label: "Hubraum", value: `${data.Hubraum}` },
    { label: "Zylinder", value: `${data.Zylinder}` },
    { label: "Motorbauart", value: `${data.Motorbauart}` },
    { label: "Gänge", value: `${data.Gänge}` },
    { label: "Theoretische Anhängelast", value: `${data.weight}` },
    { label: "gebremst", value: `${data.braked}` },
  ];

  const licenseDetails = [
    { label: "Lizenzkategorie", value: `${data.Lizenzkategorie}` },
  ];

  const historyDetails = [
    { label: "Zustand", value: `${data.Zustand}` },
    { label: "Neupreis", value: `${data.Neupreis}` },
    { label: "Direkt-/Parallelimport", value: `${data.Direkt}` },
  ];

  return (
    <div className="flex flex-col gap-6 py-4 md:w-[44%] w-full text-white">
      {/* Technik Section */}
      <div>
        <div className="font-semibold text-lg">Technik</div>
        <div className="mt-2 flex flex-col gap-2">
          {techDetails.map((detail, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="font-medium">{detail.label}</span>
              <span>{detail.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lizenz Section */}
      <div>
        <div className="font-semibold text-lg">Lizenz</div>
        <div className="mt-2 flex flex-col gap-2">
          {licenseDetails.map((detail, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="font-medium">{detail.label}</span>
              <span>{detail.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fahrzeughistorie Section */}
      <div>
        <div className="font-semibold text-lg">Fahrzeughistorie</div>
        <div className="mt-2 flex flex-col gap-2">
          {historyDetails.map((detail, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="font-medium">{detail.label}</span>
              <span>{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};





