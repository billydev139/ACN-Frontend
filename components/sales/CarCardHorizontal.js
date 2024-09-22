import React, { Suspense } from 'react';

function CarCardHorizontal({ data, onClick }) {
  return (
    <div
      className="w-full h-[38vh] shadow-md flex flex-col md:flex-row bg-[#181818] rounded-xl overflow-hidden"
      onClick={onClick}
    >
      <Image width={500} height={500}
        src={data.imageUrl[0]}
        alt="car"
        className="h-1/2 md:h-full w-full md:w-auto object-cover md:rounded-l-xl"/>
      <div className="flex flex-col flex-grow p-4 gap-2 justify-between">
          <div className='text-sm text-brGold'>Autocenter Niederbipp AG</div>
        <div className="flex justify-between items-center ">
          <span className="font-medium text-xl w-[80%] ">{data.name}</span>
          <span className="font-bold text-lg flex items-start h-full">{data.price}</span>
        </div>

        <div className="w-full flex justify-center my-2">
          <div className="w-full h-[2px] bg-brGold"></div>
        </div>

        <div className="flex justify-between gap-4 text-[#c9c7c7] text-sm">
          <div className="flex flex-col w-1/2 gap-1">
            <div className="flex justify-between">
              <span>Inverkehrsetzung</span>
              <span className="font-bold text-white">{data.market}</span>
            </div>
            <div className="flex justify-between">
              <span>Kilometer</span>
              <span className="font-bold text-white">{data.kilometer}</span>
            </div>
            <div className="flex justify-between">
              <span>Motorleistung in PS</span>
              <span className="font-bold text-white">{data.power}</span>
            </div>
            <div className="flex justify-between">
              <span>CO₂ Emission (kombiniert)</span>
              <span className="font-bold text-white">{data.CO2}</span>
            </div>
          </div>
          <div className="flex flex-col w-1/2 gap-1">
            <div className="flex justify-between">
              <span>Getriebe</span>
              <span className="font-bold text-white">{data.transmission}</span>
            </div>
            <div className="flex justify-between">
              <span>Kraftstofftyp</span>
              <span className="font-bold text-white">{data.fuelType}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>CO₂ Emissions (Treibstoff- und Stromproduktion)</span>
              <span className="font-bold text-white">{data.combineCO2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCardHorizontal;
