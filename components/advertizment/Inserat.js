"use client";
import { faAdd, faCancel, faCross, faCrosshairs, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useEffect, useState} from 'react';
import JobType from './JobType';
import ContractType from './ContractType';
import LanguageRequired from './LanguageRequired';
import JobDiscription from './JobDiscription';
import JobAdvantages from './JobAdvantages';
import { useRouter } from "next/navigation";
import ContactDetail from './ContactDetail'
import Vector from './Vector'
import { Button } from '@nextui-org/react';

const staticBanner = 'AcnAG/Carrosserie/Banner.avif';
const staticLogo = '/AcnAG/Carrosserie/company_logo.avif'; 

function Inserat() {
  const router = useRouter();
  const [OpenDetails,setOpenDetails]=useState(false);
  const [clicked,setClicked]=useState(false);

  useEffect(()=>{
    console.log(clicked)
  },[clicked])


  const SendBar=()=>{
    return(
      <div className='md:w-[95%] w-full px-3 py-4 flex items-center text-white rounded-[20px] md:mb-4 mb-2'>
        <h1 className=' md:text-xl text-sm'>Abbrechen</h1> 
        <div className='flex flex-grow justify-end gap-3'>
        <Button onClick={()=>setOpenDetails(!OpenDetails)} className=" bg-gray-300 text-gray-600 md:px-3 px-2 font-semibold py-2 rounded-md text-xs md:text-[12px]">
        Zusätzliche
        </Button>
        <Button className=" bg-brGold text-white font-semibold px-6 py-3 rounded-md text-xs md:text-[12px]">
          Send
        </Button>
        </div>
      </div>
    )
  }

  return (
    <div className='relative md:p-0 p-3 flex flex-col items-center overflow-auto gap-5 bg-[#202020]'>
      <div className='absolute w-full top-0 z-0 translate-y-[-2%]'><img src="/background/Rectangle 156.svg" className='w-full h-full object-cover' /></div>
      <div className='md:w-4/6 w-full h-auto flex flex-col z-50 items-center gap-4 rounded-md'>
        <div className='flex md:w-[95%] w-[99%] bg-[#FFFCE6] items-start p-4 gap-3 text-[#977402] rounded-md mt-5'>
          <FontAwesomeIcon icon={faTriangleExclamation} className='w-8' />
          <div className='font-light md:text-sm text-xs'>
          Sobald Sie Ihre Anfrage eingereicht haben, wird Ihre Schadenmeldung automatisch analysiert. Vertrauen Sie auf die Expertise der Autocenter Niederbipp AG in der Fahrzeugreparatur und lassen Sie Ihre Schäden von unseren qualifizierten Carrossiers schnell und effizient beheben. Wir sorgen dafür, dass Ihr Fahrzeug wieder in einwandfreiem Zustand ist.          </div>
        </div>
        <div className='flex md:w-[95%] w-full h-80 justify-end items-end rounded-lg md:p-[5px] relative'>
          <img src={staticBanner} className='flex justify-center items-center  w-full h-full object-cover z-0 rounded-md' alt="Banner" />
          <div className='absolute w-34 md:h-48 h-36 bg-[#404040] rounded-md flex justify-end items-end left-5 top-56'>
            <img src={staticLogo} className='flex justify-center items-center w-full h-full object-cover z-0 rounded-sm p-2' alt="Logo" />
          </div>
        </div>
        <div className='md:mt-24 mt-10'></div>
        <ContactDetail/>
        <ContractType />
        <Vector/>
        <SendBar/>
        {OpenDetails && (<AdditionalInfo setClicked={setClicked}/>)}
      </div>
    </div>
  );
}
export default Inserat;





const AdditionalInfo = ({setClicked}) => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const router=useRouter();

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const ImageHandler = (e) => {
    const file = e.target.files[0];
    console.log(image)
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="rounded-xl bg-[#181818] shadow-md md:p-4 p-3 md:w-[95%] w-full text-white mb-4">
      <h2 className="text-lg font-semibold">Zusätzliches </h2>

      <div className="mt-4">
        <p className="text-sm font-medium">Bilder</p>
        <div className={`bg-brGray rounded-md  p-2 mt-1 relative ${image ? "md:h-[70vh] h-[40vh]":"h-auto"}`}>
          <label className="bg-brGold text-white px-4 py-2 rounded-md cursor-pointer">
            Upload Pictures
            <input
              type="file"
              className="hidden"
              onChange={ImageHandler}
            />
          </label>
          {image && (
            <>
            <img
              src={image}
              alt="Uploaded"
              className="absolute w-full md:h-[70vh] h-[40vh] top-0 left-0 object-cover rounded-md"
            />
            <button className='absolute z-10 top-3 right-5' onClick={()=>setImage("")}><FontAwesomeIcon icon={faAdd} className='text-[red] rotate-[45deg] w-6 h-6'/></button>
            </>
          )}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium">Bemerkungen</p>
        <div className="border border-gray-300 rounded-2xl mt-1">
        <textarea className="mb-[-7px] w-full md:text-lg text-xs h-32 rounded-2xl p-2 focus:outline-none text-white bg-brGray"
            placeholder="Deine Nachricht"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-start space-x-4 w-full ">
        <Button className=" bg-gray-300 text-gray-600 px-3 py-2 rounded-md text-sm md:text-[16px]">
          Abbrechen
        </Button>
        <div className='flex flex-grow justify-end'>
        <Button className=" bg-brGold text-white px-6 py-3 rounded-md text-xs md:text-xl" onClick={()=>{setClicked(true); router.push('/taskcomplete/') }}>
          Weiter
        </Button>
        </div>
      </div>
    </div>
  );
};



