"use client"
import MainButton from '@/components/accets/MainButton'
import { useRouter } from 'next/navigation'
import React from 'react'
import Head from 'next/head'

function page() {
  const router = useRouter();
  return (
    <>
      {/* SEO-Optimierung */}
      <Head>
        <title>Vielen Dank - Auto Center Niederbipp | Ihr vertrauenswürdiger Auto-Partner</title>
        <meta name="description" content="Vielen Dank für das Ausfüllen des Formulars beim Auto Center Niederbipp. Entdecken Sie unsere breite Palette an Fahrzeugen und Dienstleistungen, die auf Ihre Bedürfnisse zugeschnitten sind." />
        <meta name="keywords" content="Auto Center Niederbipp, Autohändler, Autoverkauf, Fahrzeugservice, Autowartung, Auto kaufen, Autoangebote, Formular erfolgreich ausgefüllt" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Vielen Dank - Auto Center Niederbipp" />
        <meta property="og:description" content="Vielen Dank für das Ausfüllen des Formulars beim Auto Center Niederbipp. Entdecken Sie unsere außergewöhnlichen Autoservices." />
        <meta property="og:image" content="/taskComplete.avif" />
        <meta property="og:url" content="https://www.autocenterniederbipp.ch/dankeseite" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vielen Dank - Auto Center Niederbipp" />
        <meta name="twitter:description" content="Vielen Dank für das Ausfüllen des Formulars beim Auto Center Niederbipp. Entdecken Sie unsere außergewöhnlichen Autoservices." />
        <meta name="twitter:image" content="/taskComplete.avif" />
      </Head>
      
      <div className='w-screen h-screen relative'>
        <img src="/taskComplete.avif" alt="Aufgabe abgeschlossen - Auto Center Niederbipp" className='w-full h-full object-cover'/>
        <div className='absolute w-full h-full bottom-0 bg-gradient-to-t from-black/35 to-black/5'></div>
        <div className='w-[70%] gap-2 flex flex-col absolute md:top-[70%] text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h1 className='w-full flex justify-center text-3xl font-bold'>Danke für Ihre Anfrage!</h1>
          <p className='text-center'>Wir vom Autocenter Niederbipp AG bedanken uns herzlich für Ihre Anfrage. Als führendes Carrosserie- und Ankaufs-/Verkaufs-Autocenter sind wir stolz darauf, Ihnen erstklassigen Service und eine breite Palette an Fahrzeugen anbieten zu können. Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.</p>
          <div className='flex w-full gap-1 justify-center items-center font-bold text-2xl cursor-pointer' onClick={() => router.push('/home/')}>Zurück zur Startseite<MainButton/></div>
        </div>
      </div>
    </>
  )
}

export default page;
