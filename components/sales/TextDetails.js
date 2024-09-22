import { useState } from 'react';

export default function TextDetails({ data }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='flex flex-col h-auto items-start'>
      <div className={`${isOpen ? "h-auto py-4" : "md:h-[50vh] h-[63vh] pt-4"} w-full overflow-hidden`}>
      <div
        dangerouslySetInnerHTML={{ __html: data }}
      />
    </div>
    <button className='flex justify-center text-brGold text-medium mt-2' onClick={() => setOpen(!isOpen)}>
        <img src="/icon/sales/cardetails/arrow.svg" className={`w-7 h-7 \${isOpen ? "-rotate-90" : "rotate-90"}`} />
        {`${isOpen ? 'Close' : ' Mehr anzeigen'}`}
      </button>
    </div>
  );

}