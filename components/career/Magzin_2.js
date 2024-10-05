"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@nextui-org/react'
import BenefitsSection from '@/components/accets/common/Benifits'

function Magzin() {
    const router = useRouter()
    const [career, setCareer] = useState(true)
    const [TrueData, setTrueData] = useState([])



    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function ScrollMid() {
        window.scrollTo({
            top: 1800,
            behavior: 'smooth'
        })
    }


    const JobHandler = (id) => {
        setTrueData(jobs[id]);
        setCareer(false)
        console.log(TrueData);
    };

    const JOB = ({ TrueData }) => {
        // Split the text data into arrays by newline character
        const jobDescription = TrueData['Job Description'].split('\n');
        const expectations = TrueData.Expectations.split('\n');
        const requirements = TrueData.Requirements.split('\n');

        return (
            <div className='flex flex-col w-full items-center bg-[#202020]'>
                {/* Theme Image Section */}
                <header className="relative w-full h-auto">
                    <div className='w-screen h-screen bg-black/20 absolute'></div>
                    <div className="w-screen h-[100vh]">
                        <img
                            src="/community-page/1.jpeg"
                            alt="Banner Image"
                            className="w-full object-cover h-full"
                        />
                    </div>

                    <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center z-10">
                        <div className="text-center md:block flex flex-col gap-2 px-3">
                            <p className="text-sm text-white mb-2">Autocenter Niederbipp AG</p>
                            <h1 className="md:text-6xl text-3xl text-brGold font-bold">
                                Carrosserielackierer/in EFZ
                            </h1>
                            <p className="md:text-3xl text-lg text-white">
                                We are always looking for ambitious people who share our passion
                                for Ferrari, and for excellence.
                            </p>
                        </div>
                    </div>
                </header>

                {/* Job Description Section */}
                <div className='w-full relative flex justify-center'>
                    <div className='absolute w-full md:top-[-1%] top-0 left-0 z-0'>
                        <img src="/background/Rectangle 156.svg" className='w-full h-full object-cover' />
                    </div>
                    <div className="flex md:flex-row flex-col  md:w-[70%] w-[95%] justify-between md:p-5 z-10 p-2 mt-4">
                        <div className="flex-1 md:pr-5">
                            <h2 className="text-brGold md:text-4xl text-2xl font-bold">Jobbeschreibung</h2>
                            <div className='text-sm md:text-lg font-bold w-2/3 mt-4'>
                                Moderni Technik trifft uf Familieungernäme Bisch du bereit, mit üs Gränzä z verschiebä?
                            </div>
                            <div className='text-sm md:text-base font-light mt-4'>
                                Das Autocenter Niederbipp AG ist ein erfolgreiches Unternehmen mit Sitz in Niederbipp. Seit 85 Jahren erbringen wir weltweit Höchstleistungen in den Bereichen Medizintechnik, Uhrenanlagen und Zeitsystemen. Unsere Kernkompetenzen liegen in der Präzisionsmechanik, Elektronikfertigung und Informationstechnologie
                            </div>
                            <div className='text-sm md:text-base font-light mt-4'>
                                Mir wei, dass dir t'Arbeit Spass macht. Du schaffsch imne junge und motivierte Team wo im familiäre Umfäud cha ufblüehe u hesch persönlechi Entwickligsmüglechkeite. Mir garantiere dir, bi üs wird's nie längwilig!
                            </div>
                            <div className='text-sm md:text-base font-light mt-4'>
                                Does that speak to you ah? From now on or after Veribarig, you can move the borders out
                            </div>

                            <h3 className="text-white text-lg md:text-xl font-bold mt-4">{TrueData.Title}</h3>

                            <div className='mt-4 font-semibold text-lg md:text-xl'>Das erwartet di bi üs:</div>
                            <ul className="text-white mt-2 leading-relaxed list-disc list-inside pl-4">
                                {jobDescription.map((item, index) => (
                                    <li key={index} className='text-sm md:text-base'>{item}</li>
                                ))}
                            </ul>

                            <h3 className="text-white text-xl font-bold mt-6">Das chơi mir dir biete:</h3>
                            <ul className="text-white mt-2 leading-relaxed list-disc list-inside pl-4">
                                {expectations.map((item, index) => (
                                    <li key={index} className='text-sm md:text-base'>{item}</li>
                                ))}
                            </ul>

                            <h3 className="text-brGold text-xl font-bold mt-6">Stellenanforderungen</h3>
                            <ul className="text-white mt-2 leading-relaxed list-disc list-inside pl-4">
                                {requirements.map((item, index) => (
                                    <li key={index} className='text-sm'>{item}</li>
                                ))}
                            </ul>
                            <div className='mt-4 text-medium md:text-lg'>Du bisch motiviert u zueverlässig, hesch Luscht mit emne junge u dynamische Team öppis z bewege? De bisch du genau dr Richtig oder die Richtigi für üs. Mir fröie üs, vo dir z ghöre</div>
                            {/* <div className=' w-full flex justify-end'><Button className='bg-blue-600 text-white w-32 p-3'>BACK</Button></div> */}

                        </div>

                        {/* Action Buttons and Details Section */}
                        <div className="min-w-[200px] text-center md:mt-0 mt-3">
                            <Button className="bg-brGold text-white py-2 px-4 rounded mb-2 w-full text-lg" onClick={() => router.push("/apply/")}>
                                Bewerben
                            </Button>
                            <Button className="border border-blue-900 text-brGold py-2 px-4 rounded bg-white text-lg w-full" onClick={() => { setCareer(true); ScrollMid() }}>
                                zurück
                            </Button>
                            <div className="text-left p-3 mt-4">
                                <h4 className="font-bold md:text-2xl text-lg mb-2">Details</h4>
                                <div className="mb-1 flex gap-2 md:text-xl text-lg"><img src="/icon/location.svg" className='w-6 h-6 object-cover' />{TrueData.Location}</div>
                                <div className="mb-1 md:pl-8 md:text-xl text-lg"> {TrueData.City}</div>
                                <div className="mb-1 flex gap-2 md:text-xl text-lg"><img src="/icon/group.svg" className='w-6 h-6 object-cover' />{TrueData.type}</div>
                            </div>
                        </div>


                    </div>
                </div>

                <BenefitsSection/>
            </div>
        );
    };




    return (
        <div className='flex flex-col items-center w-full h-auto text-white overflow-x-hidden'>
            {/* theam page */}
            {career && (
                <>
                    <div className='w-full h-1/2 md:h-[75vh] relative z-10'>
                        <img src="AcnAG/Karriere/Home/Header/Karriere.jpeg" alt="loading" loading='lazy' className='md:block hidden w-full h-full object-cover' />
                        <img src="career/theam (1).jpeg" alt="loading" loading='lazy' className='md:hidden block w-full h-full object-cover' />
                        <div className='absolute top-[50%] left-[50%] font-bold md:text-5xl text-4xl translate-x-[-50%] translate-y-[-50%]'>Karriere</div>
                    </div>
                    <div className='w-full flex flex-col h-auto bg-[#202020] items-center pt-4 gap-3 relative'>
                        <div className='absolute w-full top-0 left-0 z-0 translate-y-[-3%]'><img src="/background/Rectangle 156.svg" className='w-full h-full object-cover' /></div>

                        <div className='md:w-[50%] w-[95%] md:px-0 px-2 flex flex-col md:items-start items-center z-10 overflow-x-hidden mt-8'>
                            {/* <div className='xl:w-[65%] 2xl:w-[75%] w-full h-1 bg-white'></div> */}
                            <div className="w-full h-1 bg-white xl:w-[65%] 2xl:w-[70%]"></div>

                            <div className='text-brGold md:text-3xl 2xl:text-4xl text-[20px] w-full mt-2'>WIR WACHSEN, WACHSE MIT UNS</div>
                            <div className='md:w-[74%] text-sm mt-1'>GEMEINSAM ARBEITEN - Global präsent und dennoch ein Unternehmen mit familiärer Atmosphäre das sind die Markenzeichen von Autocenter Niederbipp AG. Als Teil unseres Teams hast du die Gelegenheit, von beiden Welten zu profitieren: beruflichen Perspektiven und persönlicher Entfaltung</div>
                        </div>
                        <div className='md:w-[80%] w-[95%] md:px-0 px-2 relative flex flex-col items-center gap-4 z-10'>
                            <img src="AcnAG/Karriere/Home/Arbeit3.jpeg" alt="loading" className='w-full h-[70vh] object-cover' />
                            <div className='w-20 h-20 md:bg-[#4c4a4a] bg-[#202020] absolute md:right-[-4%] right-[-6%] top-[0%] 2xl:right-[0%]'></div>
                            <div className='w-32 2xl:h-16 2xl:w-40 h-12 bg-[#202020] absolute md:bottom-[20%] 2xl:bottom-[11%] bottom-[39%] left-[-1%]'></div>
                            <div className='md:w-[80%]  w-full flex md:mt-0 mt-[-2%] gap-3 text-sm z-10 md:px-0 px-2'>
                                <div className='w-1/2'>Auch wenn unsere Standorte auf der ganzen Welt verteilt sind, der Gründergeist und die Nähe eines Familienunternehmens sind überall spürbar. Faire Anstellungsbedingungen, eine gute Kommunikations- und Feedbackkultur sowie grosse Anstrengungen bezüglich Gesundheit und Sicherheit am Arbeitsplatz zeichnen Moser- Baer aus.</div>
                                <div className='w-1/2'>Neben zahlreichen interessanten und zukunftsorientierten Stellen auf allen Funktionsstufen bieten wir verschiedene Lehrstellen und am Standort Sumiswald auch Schnupperlehren.</div>
                            </div>
                        </div>

                        <div className='w-full flex justify-center mt-6 z-10'>
                            {/* for desktop */}
                            <div className='w-[80%]  md:flex hidden justify-end'>
                                <div className=' w-[80%]  flex'>
                                    {/* left half */}
                                    <div className='w-[45%] flex flex-col gap-2 '>
                                        <div className='w-[80%]  h-1 bg-white'></div>
                                        <div className='w-full text-3xl text-brGold'>DEINE MÖGLICHKEITEN</div>
                                        {/* details */}
                                        <div className='w-[80%]  flex flex-col'>
                                            <div className='semibold text-base mt-2'>
                                                Autocenter Niderbipp AG steht für Weltklasseleistungen, sei es in der Autotechnik oder mit der Carrosserie. Doch das geht nur mit den richtigen Fachkräften.
                                            </div>
                                            <div className='text-[gray] text-xs mt-2'>Softwareentwicklung Netzwerkdechnik Informationstechningin, Elektronikentwicklung LetterplattenbesiGekung, äusserste Präzision beim Präsen Drehen, Bohren, Schleifen, State of the An Oberflächenbehandlungen, Bearbeitung modermater und sentische Wwkatoffedas sind nur einige der Kompetanzen liber die una Lintermen verfügt. Als Mitglied eines unserer Teams bist du Tell der Zukunft. Und damn du selbot stets am Puis des Zeitgehen bebet, sorgen wie mit termen und externen Weiterbildungsmöglichkeiten für deine persönliche Entwicidung</div>
                                            <div className='text-[gray] text-xs mt-2 mb-2'>Unsere Recruited Rijard Sadriu freut sich auf dune Kontaktnahme</div>
                                            <div className='font-semibold text-white text-[14px]'>Rijard Sadriu, Minushe Sadriji & Silas Rotzetter</div>
                                            <div className='text-white text-sm'>Autocenter Niederbipp AG Team</div>
                                            <div className='text-sm mt-3 flex-col gap-2'>
                                                <div>Autocenter Niederbipp AG</div>
                                                <div>Leenrütimattweg 3</div>
                                                <div>4807 Niederbipp</div>
                                                <div>Tel. +41 32-6330063</div>
                                                <div>E-Mail info@acnag.ch</div>
                                                <div className='flex gap-1 items-center mt-4'><FontAwesomeIcon icon={faWhatsapp} className='w-7 h-7' /> Kontaktiere Uns über WhatsAppi</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* right half */}
                                    <div className='w-[55%] h-full flex items-center'>
                                        <img src="/AcnAG/Karriere/Home/Team.avif" alt="loading" className='w-[100%] h-1/2 2xl:h-[75%] object-cover' />
                                    </div>
                                </div>
                            </div>

                            {/* for mobile    */}
                            <div className='w-[95%] md:px-0 px-2 flex flex-col items-center md:hidden'>
                                <div className='w-full h-1 bg-white'></div>
                                <div className='font-semibold text-3xl mt-2 text-brGold'>DEINE MÖGLICHKEITEN</div>
                                <div className="mt-3     relative">
                                    <img src="/career/passion.avif" className="w-full h-full object-cover" alt="Career passion" />
                                    <div className="w-24 h-10 bg-[#202020] absolute top-0 right-[-1%]"></div>
                                    <div className="w-10 h-32 bg-[#202020] absolute bottom-[-15%] left-[-1%] z-0"></div>
                                </div>
                                <div className='mt-3 z-10'>
                                    Autocenter Niederbipp AG steht für Weltklasseleistungen, sei es in der Medizintechnik oder mit den Produkten und Systemen unserer Marke Mobatime. Doch das geht nur mit den richtigen Fachkräften.
                                </div>
                                <div className='text-[gray] text-xs mt-2'>Softwareentwicklung Netzwerkdechnik Informationstechningin, Elektronikentwicklung LetterplattenbesiGekung, äusserste Präzision beim Präsen Drehen, Bohren, Schleifen, State of the An Oberflächenbehandlungen, Bearbeitung modermater und sentische Wwkatoffedas sind nur einige der Kompetanzen liber die una Lintermen verfügt. Als Mitglied eines unserer Teams bist du Tell der Zukunft. Und damn du selbot stets am Puis des Zeitgehen bebet, sorgen wie mit termen und externen Weiterbildungsmöglichkeiten für deine persönliche Entwicidung</div>
                                <div className='text-[gray] text-xs mt-3 mb-3'>Unsere Recruited Alina Baber freut sich auf dune Kontaktnahme</div>
                                <div className='font-semibold text-white text-[16px] w-full'>Sarah Held, Irina Horak & Alina Rebes</div>
                                <div className='text-white text-sm w-full'>H& Employer Brand Marketing Team</div>
                                <div className='text-sm mt-3 flex-col gap-2 w-full'>
                                    <div>Autocenter Niederbipp AG</div>
                                    <div>Spitalstrasse 7</div>
                                    <div>3454 Sumiswald</div>
                                    <div>Tel. +41 34-4324579</div>
                                    <div>E-Mail jobs@mobatime.com</div>
                                    <div className='flex gap-1 items-center mt-4'><FontAwesomeIcon icon={faWhatsapp} className='w-7 h-7' /> Kontaktiere utts über WhatsAppi</div>
                                </div>
                            </div>
                        </div>


                        <div className='md:w-[75%] w-[95%] md:px-0 px-2 md:ml-14  h-auto mt-12 flex flex-col md:mb-0 mb-2'>
                            <div className='w-full md:pl-24 flex flex-col gap-2 '>
                                <div className='md:w-[29%] w-full bg-white h-1'></div>
                                <div className='text-3xl text-brGold'>OFFENE STELLEN</div>
                            </div>


                            <div className="w-full h-auto shadow-[#B29146] rounded-lg shadow-lg p-3 custom-gradient mt-2">
                                <InfoCard
                                    dis={"Carrosserielackierer/in EFZ (m/w/d) 100%"}
                                    location={"4704 Niederbipp"}
                                    id={0}
                                    onClick={() => { JobHandler(0); scrollToTop() }}
                                />
                            </div>

                        </div>

                        <div className='w-full flex flex-col items-center h-screen justify-center relative mt-15'>
                            <div className='w-[80%]  h-[80vh] absolute left-0 bottom-5 z-0 bg-[#4c4a4a]'></div>
                            <div className='w-[90%] h-[75vh] absolute right-0 md:top-10 top-16 bg-[#4c4a4a] z-0'></div>

                            <div className='md:w-[70%] w-[95%] flex flex-col z-10 md:pl-10'>
                                <div className='md:pl-[10%] flex flex-col gap-2 md:px-0 px-4'>
                                    <div className='md:w-[49%] w-full h-1 bg-white mt-6'></div>
                                    <div className='font-normal md:text-4xl text-2xl text-brGold'>HIER SIND DIE VORTEILE</div>
                                    <div className='md:mt-4 mt-2 md:text-lg font-[600] md:w-[70%] w-full text-xs'>Arbeiten bei Autocenter Niederbipp AG bietet dir zahlreiche namhafte Vorteile.
                                        Zögere nicht wir freuen uns auf dich!</div>

                                    <div className='grid md:grid-cols-2 grid-cols-1 md:self-start self-center md:pl-0 pl-[50%] md:translate-x-0 translate-x-[-50%] w-4/5 mt-4 gap-3'>
                                        <Qualities icon={'/icon/tech.svg'} dis={"Moderner Arbeitsplatz mit hochstehenden Produktionsmitteln"} />
                                        <Qualities icon={'/icon/saving.svg'} dis={"Leistungsgerechte Bezahlung"} />
                                        <Qualities icon={'/icon/mood.svg'} dis={"Individuelle Weiterentwicklung"} />
                                        <Qualities icon={'/icon/heart.svg'} dis={"Familiäre und wertschätzende Firmenkultur"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* for desktop */}
                        <div className='w-[80%]  md:flex hidden mt-20 gap-7'>
                            <div className='h-[78vh] w-[50%] relative'>
                                <img src="AcnAG/Karriere/Home/Arbeit1.jpeg" alt="loading" className='w-full h-full object-cover' />
                                <div className='bg-[#202020] absolute h-20 w-10 top-0 right-0'></div>
                                <div className='bg-[#202020] absolute w-20 h-10 bottom-0 left-0'></div>
                            </div>

                            <div className="container mx-auto px-4 w-1/2">
                                <div className="text-3xl font-bold text-start mb-4 flex flex-col leading-tight ">
                                    <div className='w-full h-1 bg-white'></div>
                                    <span className="text-brGold">DIESE LEHRBERUFE BIETEN WIR AN!</span>                              
                                    </div>
                                <p className="text-base leading-normal mb-4">
                                    Hier bist du richtig. Die Ausbildung der Lernenden hat bei der Autocenter Niederbipp AG einen hohen Stellenwert, nicht zuletzt, weil wir an den Standort unseres Hauptsitzes und seine Fachkräfte glauben. In Sumiswald bieten wir rund 20 Lehrstellen in sieben verschiedenen Berufen:
                                </p>
                                <ul className="text-sm ml-8 text-brGold leading-relaxed list-disc">
                                    <li className="">Automobil-Fachmann/-frau EFZ</li>
                                    <li className="">Carrosserielackierer/in EFZ</li>
                                    <li className="">Kaufmann/frau EFZ</li>
                                </ul>
                                <p className="text-base mt-4 mb-4 leading-normal">
                                    Wir garantieren eine spannende und vielseitige Ausbildung und eine kompetente Unterstützung während der gesamten Lehrzeit.
                                </p>
                                <button className="bg-brGold hover:bg-brGold text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Offene Lehrstellen
                                </button>
                            </div>
                        </div>




                        {/* for mobile */}
                        <div className="w-full flex flex-col items-center mt-20 md:hidden">
    <div className="w-[95%] flex flex-col lg:flex-row items-start">

        {/* Text content section */}
        <div className="container mx-auto lg:w-1/2 w-full">
            {/* Top bar */}
            <div className="w-full h-1 bg-white"></div>

            {/* Main heading */}
            <div className="text-xl font-bold text-center mb-4">
                DIESE LEHRBERUFE BIETEN WIR AN!
            </div>

            {/* Image section */}
            <div className="relative w-full lg:w-1/2 mb-6 lg:mb-0">
                <img src="AcnAG/Karriere/Home/Arbeit1.jpeg" alt="Career Theme" className="w-full h-full object-cover" />
                <div className="bg-[#202020] absolute h-20 w-10 top-0 right-0"></div>
                <div className="bg-[#202020] absolute w-20 h-10 bottom-0 left-0"></div>
            </div>

            {/* Description paragraph */}
            <p className=" text-sm mb-2">
                Hier bist du richtig. Die Ausbildung der Lernenden hat bei der Autocenter Niederbipp AG einen hohen Stellenwert, nicht zuletzt, weil wir an den Standort unseres Hauptsitzes und seine Fachkräfte glauben. In Sumiswald bieten wir rund 20 Lehrstellen in sieben verschiedenen Berufen:
            </p>

            {/* List of professions */}
            <ul className="text-sm ml-8 text-[#B29146] list-disc">
                <li>
                    <a href="#" className="hover:underline">
                        Carrosserielackierer/In EFZ
                    </a>
                </li>
                <li>Kaufmann/frau EFZ</li>
            </ul>

            {/* Additional description */}
            <p className=" text-sm mt-2 mb-2">
                Wir garantieren eine spannende und vielseitige Ausbildung und eine kompetente Unterstützung während der gesamten Lehrzeit.
            </p>

            {/* Button */}
            <Button className="bg-brGold hover:bg-brGold text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Offene Lehrstellen
            </Button>
        </div>
    </div>
</div>
 





                        {/* for desktop */}
                        <div className='w-[80%]  md:flex hidden mt-28 mb-4 gap-7'>
                            <div className='h-[78vh] w-[50%] relative '>
                                <img src="AcnAG/Karriere/Home/Arbeit2.jpeg" alt="loading" className='w-full h-full object-cover' />
                                <div className='bg-[#202020] absolute h-20 w-10 top-0 right-0'></div>
                                <div className='bg-[#202020] absolute w-20 h-10 bottom-0 left-0'></div>
                            </div>
                            <div className="container mx-auto px-4 w-1/2">
                                <div className="text-3xl font-bold text-start mb-4 flex flex-col">
                                    <div className='w-full h-1 bg-white'></div>
                                    <div className='mt-2 text-brGold'>SCHNUPPERLEHRE BEI AutoCenter Niederbipp AG</div>
                                </div>
                                <p className="text-base mb-2">Hast du Lust in einem spannenden Umfeld erste Erfahrungen zu schnuppern? Bei uns erhältst du Einblick in die Welt verschiedener Berufe.</p>
                                <ul className="text-sm ml-8 leading-relaxed my-2 list-disc">
                                    <li>
                                        Carrosserie-Lackierer/in EFZ – perfekt für dich, wenn du es liebst, Fahrzeuge mit glänzenden Farben zu versehen
                                    </li>
                                    <li>
                                        Kaufmann/frau EFZ – wenn das 10-Finger-System für dich keine Hürde ist und du dich für Zahlen begeisterst
                                    </li>
                                </ul>
                                <p className="text-base mt-2 mb-2">Während deiner Schnupperlehre lernen wir uns gegenseitig kennen und du kannst dir ein Bild deiner möglichen Lehrstelle machen.</p>
                                <button className="bg-brGold hover:bg-brGold text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Hier geht's zur Anmeldung</button>
                            </div>
                        </div>

                        {/* for mobile */}
                        <div className="w-full md:hidden flex flex-col items-center mt-12 mb-4">
                            <div className="w-[95%] flex flex-col lg:flex-row items-start">
                                {/* Text content section */}
                                <div className="container mx-auto lg:w-1/2 w-full">
                                    {/* Top bar */}
                                    <div className="w-full h-1 bg-white mb-2"></div>

                                    {/* Main heading */}
                                    <div className="text-3xl font-medium text-center mb-4">
                                        SCHNUPPERLEHRE BEI AutoCenter Niederbipp AG
                                    </div>

                                    {/* Image section */}
                                    <div className="relative w-full lg:w-1/2 mb-6 lg:mb-0">
                                        <img src="AcnAG/Karriere/Home/Arbeit2.jpeg" alt="Career Theme" className="w-full h-full object-cover" />
                                        <div className="bg-[#202020] absolute h-20 w-10 top-0 right-0"></div>
                                        <div className="bg-[#202020] absolute w-20 h-10 bottom-0 left-0"></div>
                                    </div>

                                    {/* Description paragraph */}
                                    <p className="text-sm mb-2">
                                        Hast du Lust in einem spannenden Umfeld erste Erfahrungen zu schnuppern? Bei uns erhältst du Einblick in die Welt verschiedener Berufe.
                                    </p>

                                    {/* List of professions */}
                                    <ul className="text-sm ml-8 list-disc">
                                        <li>Carrosserielackierer/in EFZ – perfekt für dich, wenn du es liebst, Fahrzeuge mit glänzenden Farben zu versehen</li>
                                        <li>Kaufmann/frau EFZ – wenn das 10-Finger-System für dich keine Hürde ist und du dich für Zahlen begeisterst</li>
                                    </ul>

                                    {/* Additional description */}
                                    <p className="text-sm mt-2 mb-2">
                                        Während deiner Schnupperlehre lernen wir uns gegenseitig kennen und du kannst dir ein Bild deiner möglichen Lehrstelle machen.
                                    </p>

                                    {/* Button */}
                                    <button className="bg-brGold hover:bg-brGold text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Hier geht's zur Anmeldung
                                    </button>
                                </div>
                            </div>
                        </div>




                    </div>
                </>)}

            {!career && (<JOB TrueData={TrueData} />)}
        </div>
    )
}

export default Magzin



const Qualities = ({ icon, dis }) => {
    return (
        <div className='flex w-[25vw] gap-2 items-center'>
            <img src={icon} className='object-cover w-16 h-16' />
            <div className='font-[500] md:text-xl text-sm text-center'>{dis}</div>
        </div>
    )
}

const InfoCard = ({ dis, location, onClick }) => {
    return (
        <div className="w-full flex flex-col items-center cursor-pointer" onClick={onClick}>
            <div className="w-full flex flex-col">
                <div className="text-brGold font-semibold text-sm">{dis}</div>
                <div className="flex items-center text-white gap-2 text-sm font-light">
                    <FontAwesomeIcon icon={faLocation} />
                    {location}
                </div>
            </div>
            <div className="w-full h-[0.3px] bg-[gray] mt-2 mb-1"></div>
        </div>
    );
};


const jobs = [
    {
        "Title": "Carrosserielackierer/in EFZ (m/w/d) 100% - Niederbipp",
        "Location": "4704 Niederbipp",
        "City": "Niederbipp",
        "type": "Carrosserie",
        "Job Description": "Als Carrosserielackierer/in EFZ bei der Autocenter Niederbipp AG sind Sie verantwortlich für die Lackierung von Personenwagen, Nutzfahrzeugen und Spezialfahrzeugen. Sie bearbeiten Unfallschäden sowie Beschädigungen durch Abnutzung, Witterung und Alterung. Ihre Hauptaufgaben umfassen die sorgfältige Vorbereitung der Oberflächen, das fachgerechte Ausgleichen von Unebenheiten und das präzise Lackieren in unserer hochmodernen Spritzkabine. Unterstützen Sie unser Team mit Ihrem handwerklichen Geschick und dem Einsatz modernster Verarbeitungstechnik, um erstklassige Ergebnisse für unsere Kunden zu erzielen.",
        "Expectations": "Hohe Diskretion.\nAusgezeichnete organisatorische Fähigkeiten.\nProaktivität.\nFlexibilität.",
        "Requirements": "Abgeschlossene kaufmännische Ausbildung.\nMehrjährige Berufserfahrung in einer vergleichbaren Position.\nSehr gute MS Office Kenntnisse.\nHervorragende Deutsch- und Englischkenntnisse."
    },

];



