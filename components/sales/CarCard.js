import React, { Suspense } from 'react';
import Image from 'next/image';

function CarCard({ data, onClick }) {
  return (
    <div
      className='bg-[#181818] w-full h-[90%] flex flex-col justify-between overflow-hidden cursor-pointer rounded-xl'
      onClick={onClick}
    >
      <div className='overflow-hidden md:h-[40%] w-full'>
        <Image width={500} height={500}
          src={data.imageUrl[0]}
          alt={data.name}
          className='object-cover w-full max-h-full hover:scale-110 transition-transform ease-in-out duration-[1s]'
        />
      </div>

      <div className='px-2 py-2 flex flex-col justify-between flex-grow'>
        <div className='mb-4'>
          <div className='text-sm 2xl:text-2xl text-brGold'>Autocenter Niederbipp AG</div>
          <p className='text-lg mt-1 truncate' title={data.name}>{data.name}</p> 
          <p className='font-bold text-xl mt-1'>{data.price}</p>
        </div>

        <div className='w-full flex justify-center items-center my-2'>
          <div className='w-full h-[0.4px] bg-brGold'></div>
        </div>

        <div className='flex flex-col space-y-2 text-gray-300 text-sm'>
          <div className='flex justify-between'>
            <span>Inverkehrsetzung</span>
            <span className='font-bold text-white'>{data.market}</span>
          </div>
          <div className='flex justify-between'>
            <span>Getriebe</span>
            <span className='font-bold text-white'>{data.transmition}</span>
          </div>
          <div className='flex justify-between'>
            <span>Kilometerstand</span>
            <span className='font-bold text-white'>{data.kilometer}</span>
          </div>
          <div className='flex justify-between'>
            <span>Kraftstofftyp</span>
            <span className='font-bold text-white'>{data.fuelType}</span>
          </div>
          <div className='flex justify-between'>
            <span>Motorleistung in PS</span>
            <span className='font-bold text-white'>{data.power}</span>
          </div>
          <div className='flex justify-between'>
            <div>
              <span>CO₂ Emissions </span>
              <p className='text-xs'>(Treibstoff- und Stromproduktion)</p>
            </div>
            <span className='font-bold text-white'>{data.CO2}</span>
          </div>
          <div className='flex justify-between'>
            <span>CO₂ Emission (kombiniert)</span>
            <span className='font-bold text-white'>{data.CombineCO2}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
