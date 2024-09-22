import React from 'react';
import "./img.css";
// import MainButton from "@/components/assets/MainButton";
import MainButton from '../accets/MainButton';
import { useRouter } from 'next/navigation';
import AnimatedText from '../accets/common/AnimatedText';

function ImagePresenter() {
    const router = useRouter();
    const data = [
        { heading: "Autocenter Niederbipp AG", subHeading: "Carrosserie", buttonTitel: "Entdecken", src: '/AcnAG/Diensleistungen/1.avif', route: '/home/carrosserie' },
        { heading: "Autocenter Niederbipp AG", subHeading: "Reparaturen & Service", buttonTitel: "Entdecken", src: '/AcnAG/Diensleistungen/2.avif', route: '/home/reperatur' },
        { heading: "Autocenter Niederbipp AG", subHeading: "Spritzwerk", buttonTitel: "Entdecken", src: '/AcnAG/Diensleistungen/3.avif', route: '/home/spritzwerk' },
        { heading: "Autocenter Niederbipp AG", subHeading: "An & Verkauf", buttonTitel: "Entdecken", src: '/AcnAG/Diensleistungen/4.avif', route: '/home/verkauf' },
    ];

    return (
        <div className="w-full h-auto md:h-[120vh] flex justify-start">
            <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className='relative image-container cursor-pointer`'
                        onClick={() => { router.push(item.route) }}
                    >
                        <div className='absolute w-full h-full bg-black/20 top-0 z-10'></div>
                        <TextPlace data={item} />
                        <img
                            src={item.src}
                            alt={`${item.subHeading}`}
                            className='w-full h-full'
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImagePresenter;

const TextPlace = ({ data }) => {
    return (
        <div className='text-white w-full absolute flex flex-col text-center items-center bottom-10 z-50'>
            <div className='text-sm  text-gray-300'>{data.heading}</div>
            <div className='text-2xl  w-[70%] text-brGold'>
                <AnimatedText>
                    {data.subHeading}
                </AnimatedText>
            </div>
            <div className='text-[10px] font-semibold text-gray-300 flex justify-center items-center pl-2'>
                {data.buttonTitel}
                <MainButton />
            </div>
        </div>
    );
};
