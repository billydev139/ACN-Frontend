import Image from "next/image";

export default function Partners() {
  return (
    <div className="w-full min-h-[30rem] border-white flex flex-col justify-center items-center overflow-hidden bg-footer gap-2">
      {/* Heading Section */}
      <div className="w-full h-[25%] flex justify-center items-center" data-aos="zoom-in-up" data-aos-delay="20">
        <h1 className="text-brGold text-xl md:text-3xl ">PARTNER</h1>
      </div>

      {/* Partner Logos Section */}
      <div className="w-full h-[47%] flex justify-center items-center flex-col my-4">
        <div className="grid grid-cols-3 md:grid-cols-7 gap-4 px-2 w-[80%] mx-auto flex-wrap justify-items-center">
          {/* Logos */}
          {logosData.map((logo, index) => (
            <Image
              width={500}
              height={500}
              loading="lazy"
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="w-[4rem] h-[2rem] md:w-[6rem] md:h-[3rem]"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={100 * index} // 
            />
          ))}
        </div>
      </div>

      {/* Gold Partner Section */}
      <h2 className="text-brGold text-xl md:text-3xl  md:mt-12 mt-8" data-aos="fade-up" data-aos-duration="600" data-aos-delay="50">GOLD PARTNER</h2>
      <div className="w-[35%] h-[2px] bg-slate-500" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100"></div>

      <div className="w-full h-[25%] py-3 md:pt-10">
        <div className="flex justify-center items-center gap-4" data-aos="zoom-in-up" data-aos-delay="750">
          {goldPartners.map((partner, index) => (
            <Image
              width={500}
              height={500}
              loading="lazy"
              key={index}
              src={partner.src}
              alt={partner.alt}
              className="w-[4rem] h-[2rem] md:w-[8rem] md:h-[3rem]"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={100 * index + 200} // Adjust delay for gold partners
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Sample Data
const logosData = [
  { src: "/Home/comanay_logos/adler-1.svg", alt: "adler" },
  { src: "/AcnAG/Partner/Basic/Alphera.svg", alt: "Alpehera" },
  { src: "/AcnAG/Partner/Basic/Cembra.svg", alt: "Cembra" },
  { src: "/AcnAG/Partner/Basic/Marketiv.svg", alt: "Marketiv" },
  { src: "/AcnAG/Partner/Basic/Quality1.svg", alt: "Quality1" },
  { src: "/AcnAG/Partner/Basic/Satander.svg", alt: "Satander" },
  { src: "/AcnAG/Partner/Basic/Zurich.svg", alt: "Zurich" },
];

const goldPartners = [
  { src: "/AcnAG/Partner/Gold/rsautocenter.svg", alt: "RsAutocenter" },
  { src: "/AcnAG/Partner/Gold/Smatik.svg", alt: "Smatik" },
  { src: "/AcnAG/Partner/Gold/autocenterzollikofen.svg", alt: "ACZAG" },
];
