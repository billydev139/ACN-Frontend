"use client";
// evry thing is update nowpnpm install --no-frozen-lockfile
import React, { Suspense } from "react";

import { NextUIProvider } from "@nextui-org/react";
import { StickyScroll } from "./Home/sticky-scroll-reveal";

import { HeroParallax } from "./Home/hero-parallex";

import ImagePreenter from "@/components/Home/ImagePreenter";
import MainButton from "@/components/accets/MainButton";
import Partners from "./accets/Partners";
import AnimatedText from "./accets/common/AnimatedText";
import Loading from "@/app/loading";


const Landing = () => {
  const content = [
    {
      title: "Schaden melden",
      description:
        "Melden Sie Schäden schnell und einfach online. Unser System ermöglicht es Ihnen, den Schaden detailliert zu beschreiben und Bilder hochzuladen, sodass wir sofort mit der Bearbeitung beginnen können. Verfolgen Sie den Fortschritt Ihrer Meldung in Echtzeit und bleiben Sie stets informiert.",
    },
    {
      title: "Termin vereinbaren",
      description:
        "Planen Sie Ihren Werkstattbesuch unkompliziert online. Wählen Sie einen passenden Termin aus und erhalten Sie eine Bestätigung in Echtzeit. Unsere Plattform sorgt dafür, dass Sie stets den Überblick behalten und Ihren Termin jederzeit verwalten können.",
    },
    {
      title: "Reparaturstatus abfragen",
      description:
        "Erfahren Sie jederzeit den aktuellen Status Ihrer Reparatur. Unser System hält Sie über jeden Schritt des Reparaturprozesses auf dem Laufenden, sodass Sie immer wissen, wann Ihr Fahrzeug fertig ist. Kein Stress mehr, immer bestens informiert!",
    },
    {
      title: "Auto abholen",
      description:
        "Holen Sie Ihr repariertes Auto schnell und problemlos ab. Unser Echtzeit-Update-System benachrichtigt Sie sofort, wenn Ihr Fahrzeug abholbereit ist. Sparen Sie Zeit und genießen Sie die nahtlose Abwicklung ohne unnötige Wartezeiten.",
    },
  ];
  const images = [
    "/AcnAG/Home/Karusel/eigeneKreation1.avif",
    "/AcnAG/Home/Karusel/eigeneKreation2.avif",
    "/AcnAG/Home/Karusel/eigeneKreation3.avif",
    "/AcnAG/Home/Karusel/eigeneKreation4.avif",
    "/AcnAG/Home/Karusel/eigeneKreation5.avif",
    "/AcnAG/Home/Karusel/eigeneKreation6.avif",
    "/AcnAG/Home/Karusel/eigeneKreation7.avif",
    "/AcnAG/Home/Karusel/eigeneKreation8.avif",
    "/AcnAG/Home/Karusel/eigeneKreation9.avif",
    "/AcnAG/Home/Karusel/eigeneKreation10.avif",
  ];
  const products = [
    {
      title: "Autocenter Niederbipp AG - Carrosserie Meisterwerk",
      link: "https://autocenterniederbipp.ch/carrosserie",
      thumbnail: images[0],
      description:
        "Bei der Carrosserie von Autocenter Niederbipp AG steht Qualität an erster Stelle. Wir bieten erstklassige Carrosserie-Arbeiten, die Ihr Fahrzeug wieder wie neu aussehen lassen. Vertrauen Sie auf unsere Expertise für eine makellose Reparatur und Wiederherstellung Ihres Fahrzeugs.",
    },
    {
      title: "Autocenter Niederbipp AG - Perfektes Spritzwerk",
      link: "https://autocenterniederbipp.ch/spritzwerk",
      thumbnail: images[1],
      description:
        "Unser Spritzwerk bei Autocenter Niederbipp AG sorgt für ein perfektes Finish Ihres Fahrzeugs. Mit modernster Technik und hochwertigen Lacken stellen wir sicher, dass Ihr Auto wieder in seinem ursprünglichen Glanz erstrahlt. Lassen Sie sich von unserer Präzision überzeugen.",
    },
    {
      title: "Autocenter Niederbipp AG - An- und Verkauf von Fahrzeugen",
      link: "https://autocenterniederbipp.ch/an-und-verkauf",
      thumbnail: images[2],
      description:
        "Entdecken Sie unser vielfältiges Angebot an Fahrzeugen im An- und Verkauf bei Autocenter Niederbipp AG. Ob Sie Ihr Auto verkaufen oder ein neues erwerben möchten – wir bieten faire Preise und eine große Auswahl an geprüften Fahrzeugen.",
    },
    {
      title: "Autocenter Niederbipp AG - Reparaturen & Service",
      link: "https://autocenterniederbipp.ch/reparaturen-service",
      thumbnail: images[3],
      description:
        "Das Autocenter Niederbipp AG bietet umfassende Reparatur- und Serviceleistungen für alle Fahrzeugtypen. Unser erfahrenes Team sorgt dafür, dass Ihr Auto schnell und zuverlässig wieder einsatzbereit ist. Vertrauen Sie auf unsere langjährige Erfahrung und unseren erstklassigen Service.",
    },
    {
      title: "Autocenter Niederbipp AG - Fahrzeugaufbereitung",
      link: "https://autocenterniederbipp.ch/fahrzeugaufbereitung",
      thumbnail: images[4],
      description:
        "Unsere Fahrzeugaufbereitung verleiht Ihrem Auto neuen Glanz. Ob Innen- oder Außenreinigung, wir sorgen dafür, dass Ihr Fahrzeug wieder in bestem Zustand ist. Die Experten von Autocenter Niederbipp AG garantieren eine gründliche und professionelle Aufbereitung.",
    },
    {
      title: "Autocenter Niederbipp AG - Unfallreparaturen",
      link: "https://autocenterniederbipp.ch/unfallreparaturen",
      thumbnail: images[5],
      description:
        "Nach einem Unfall kümmert sich das Autocenter Niederbipp AG um die fachgerechte Reparatur Ihres Fahrzeugs. Wir bieten schnelle und zuverlässige Unfallreparaturen, damit Ihr Auto so schnell wie möglich wieder auf die Straße kann.",
    },
    {
      title: "Autocenter Niederbipp AG - Klimaservice",
      link: "https://autocenterniederbipp.ch/klimaservice",
      thumbnail: images[6],
      description:
        "Ein gut funktionierendes Klimasystem ist entscheidend für den Komfort in Ihrem Fahrzeug. Der Klimaservice von Autocenter Niederbipp AG sorgt dafür, dass Ihre Klimaanlage immer optimal arbeitet – für ein angenehmes Fahrerlebnis bei jeder Witterung.",
    },
    {
      title: "Autocenter Niederbipp AG - Fahrzeugdiagnose",
      link: "https://autocenterniederbipp.ch/fahrzeugdiagnose",
      thumbnail: images[7],
      description:
        "Unsere präzise Fahrzeugdiagnose identifiziert schnell und zuverlässig Probleme an Ihrem Auto. Mit modernster Technik stellt das Autocenter Niederbipp AG sicher, dass Ihr Fahrzeug in einwandfreiem Zustand bleibt.",
    },
    {
      title: "Autocenter Niederbipp AG - Reifenservice",
      link: "https://autocenterniederbipp.ch/reifenservice",
      thumbnail: images[8],
      description:
        "Der Reifenservice von Autocenter Niederbipp AG bietet alles, was Ihr Fahrzeug für sicheren Halt auf der Straße benötigt. Ob Reifenwechsel, Auswuchten oder Lagerung – wir kümmern uns um alles rund um Ihre Reifen.",
    },
    {
      title: "Autocenter Niederbipp AG - Fahrzeugbewertung",
      link: "https://autocenterniederbipp.ch/fahrzeugbewertung",
      thumbnail: images[9],
      description:
        "Lassen Sie den Wert Ihres Fahrzeugs von den Experten bei Autocenter Niederbipp AG ermitteln. Unsere professionelle Fahrzeugbewertung hilft Ihnen, den fairen Marktpreis für Ihren Wagen zu kennen – sei es beim Kauf oder Verkauf.",
    },
    {
      title: "Autocenter Niederbipp AG - Pannendienst",
      link: "https://autocenterniederbipp.ch/pannendienst",
      thumbnail: images[10],
      description:
        "Im Falle einer Panne können Sie sich auf den schnellen und zuverlässigen Pannendienst von Autocenter Niederbipp AG verlassen. Wir helfen Ihnen, wieder sicher auf die Straße zu kommen – rund um die Uhr.",
    },
  ];

  return (
    <NextUIProvider>
      <section className="w-full overflow-x-hidden bg-[#202020]">
        <div className="w-screen h-screen relative overflow-hidden">
          <video
            src="/AcnAG/Video/Intro.mp4"
            className="w-full h-full object-cover  z-0 overflow-hidden"
            autoPlay
            muted
            loop
          />
          <div className="w-screen h-screen bg-black/45 absolute z-10 top-0 left-0"></div>
          <div className="flex flex-col items-center text-center md:w-[40%] w-[80%] gap-4 text-white h-[20rem] absolute z-10 bottom-10 left-[50%] translate-x-[-50%] justify-center ">
            <p
              className="text-lg"
            >
              Carrosserie & Verkauf/Ankauf
            </p>
            <p
              className="text-4xl text-brGold"
            >
              <AnimatedText>
              AutoCenter Niederbipp AG
              </AnimatedText>
            </p>
            <div
              className="flex text-xs items-center"
            >
              <p>ENTDECKEN SIE UNSER AUTOCENTER IN NIEDERBIPP</p>
              <MainButton />
            </div>
          </div>
        </div>
        <Suspense fallback={<Loading/>}>
        <StickyScroll content={content} />
        <HeroParallax products={products} />
        <ImagePreenter />
        <Partners />
        </Suspense>
      </section>
    </NextUIProvider>
  );
};

export default Landing;
