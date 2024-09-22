"use client"; // Dies muss am Anfang der Datei stehen

import { useScroll, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import AnimatedText from "../accets/common/AnimatedText";

// Sample questions and answers data
const data = [
  {
    type: "Impressum",
    questions: [
      {
        question: "Firmenname:",
        answer: "Autocenter Niederbipp AG - Das führende Autocenter in der Schweiz.",
      },
      { question: "Firmenadresse:", answer: "Leenrütimattweg 3, 4704 Niederbipp" },
      { question: "Handelsregistereintrag:", answer: "CHE-199.619.522" },
      {
        question: "Vertretungsberechtigte Person:",
        answer: "Rijard Sadriu (Geschäftsleitung)",
      },
      { question: "Kontakt:", answer: "Telefon: 032 633 00 63, Email: info@acnag.ch" },
      {
        question: "Verantwortlich für den Inhalt dieser Webseite:",
        answer: "Autocenter Niederbipp AG - Ihre erste Wahl für hochwertige Autodienstleistungen in der Schweiz.",
      },
      { question: "Webseiten-Entwicklung:", answer: "Die Webseite wurde von Smatik GmbH entwickelt." },
      {
        question: "Haftungsausschluss:",
        answer: "Die Inhalte dieser Webseite, erstellt von Autocenter Niederbipp AG und entwickelt von Smatik GmbH, wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Autocenter Niederbipp AG und Smatik GmbH haften nicht für Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
      },
      {
        question: "Urheberrecht:",
        answer: "Die Inhalte und Werke auf dieser Webseite, erstellt von Autocenter Niederbipp AG in Zusammenarbeit mit Smatik GmbH, unterliegen dem schweizerischen Urheberrecht. Eine Vervielfältigung, Bearbeitung oder Verbreitung bedarf der ausdrücklichen schriftlichen Genehmigung von Autocenter Niederbipp AG und Smatik GmbH.",
      },
      {
        question: "Datenschutz:",
        answer: "Der Schutz Ihrer Daten ist uns, der Autocenter Niederbipp AG und Smatik GmbH, ein besonderes Anliegen. Unsere Webseite kann in der Regel ohne Angabe personenbezogener Daten genutzt werden. Sollte es zur Erhebung personenbezogener Daten kommen, geschieht dies stets auf freiwilliger Basis und nur mit Ihrer ausdrücklichen Zustimmung. Wir verwenden modernste Sicherheitstechnologien, um Ihre Daten vor unbefugtem Zugriff zu schützen.",
      },
    ],
  },
  {
    type: "Allgemeine Geschäftsbedingungen (AGB):",
    questions: [
      {
        question: "Anwendungsbereich:",
        answer: "Diese AGB gelten für alle Verträge, Lieferungen und sonstigen Leistungen der Autocenter Niederbipp AG, dem führenden Anbieter von Autodienstleistungen in der Schweiz.",
      },
      {
        question: "Vertragsabschluss:",
        answer: "Ein Vertrag kommt erst mit der schriftlichen Auftragsbestätigung durch die Autocenter Niederbipp AG zustande.",
      },
      {
        question: "Preise und Zahlungsbedingungen:",
        answer: "Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Die Zahlung ist spätestens innerhalb von 14 Tagen nach Rechnungsstellung zu leisten.",
      },
      {
        question: "Lieferung und Lieferfristen:",
        answer: "Die Autocenter Niederbipp AG ist stets bemüht, die vereinbarten Lieferfristen einzuhalten. Verzug tritt jedoch erst nach schriftlicher Mahnung ein.",
      },
      {
        question: "Haftung:",
        answer: "Für Schäden, die durch einfache Fahrlässigkeit verursacht werden, haftet die Autocenter Niederbipp AG nur bei Verletzung wesentlicher Vertragspflichten.",
      },
      {
        question: "Gewährleistung:",
        answer: "Die Gewährleistungsrechte des Kunden richten sich nach den gesetzlichen Bestimmungen. Die Gewährleistungsfrist beträgt zwei Jahre ab Lieferung.",
      },
      {
        question: "Schlussbestimmungen:",
        answer: "Erfüllungsort und Gerichtsstand ist der Sitz der Autocenter Niederbipp AG.",
      },
    ],
  },
  {
    type: "Webseiten-Entwicklung und Schutz des Entwicklers:",
    questions: [
      {
        question: "Entwicklung:",
        answer: "Die von Smatik GmbH entwickelte Webseite für Autocenter Niederbipp AG ist urheberrechtlich geschützt. Smatik GmbH übernimmt keine Haftung für direkte oder indirekte Schäden, die durch die Nutzung dieser Webseite entstehen. Der Quellcode und alle erstellten Inhalte sind Eigentum von Smatik GmbH. Eine Nutzung der Inhalte ohne ausdrückliche Genehmigung ist untersagt. Bei Fragen zur Webseite oder deren Inhalten wenden Sie sich bitte direkt an Smatik GmbH, Ihren Experten für Webentwicklung und SEO in der Schweiz.",
      },
    ],
  },
];

function Theam() {
  const [screen, setScreen] = useState(0);
  const [translation, setTranslation] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const scroll = useRef();
  const { scrollYProgress } = useScroll({
    target: scroll,
    offset: ["start start", "end end"],
  });
  const sections = useRef([]); // Refs for sections
  const [height, setHeight] = useState("h-[4vh]");

  const USESCROLL = (progressPercentage) => {
    if (progressPercentage > 80) {
      setScreen(1.95);
      setHeight("h-[12vh]");
    } else if (progressPercentage > 45) {
      setScreen(0.63); // Second section
      setHeight("h-[12vh]");
    } else if (progressPercentage > 15) {
      setScreen(0); // First section
      setHeight("h-[4vh]");
    }
  };

  useEffect(() => {
    setTranslation(10 * screen);
  }, [screen]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      const progressPercentage = value * 100;
      setScrollValue(progressPercentage);
      USESCROLL(progressPercentage);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleQuestionClick = (qIndex) => {
    setActiveQuestion(activeQuestion === qIndex ? null : qIndex);
  };

  return (
    <div className="flex flex-col w-full h-auto text-white bg-[#202020] relative top-0">
      {/* Top Section with Background Image */}
      <div className="w-full relative z-10">
        <div className="hidden md:block w-full h-screen">
          <img
            src="AcnAG/Impressum/Header/Banner.jpeg"
            loading="lazy"
            alt="loading"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:hidden block w-full h-screen">
          <img
            src="/Contact/contacts-mob.avif"
            loading="lazy"
            alt="loading"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute md:w-[30%] w-[50%] flex flex-col gap-3 top-[50%] translate-y-[-50%] left-[10%] text-white">
          <div
            className="md:text-2xl text-xl font-bold"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Hauptsitze
          </div>
          <div className="flex flex-col w-full">
          <AnimatedText>

            <div
              className="font-extrabold text-2xl md:text-5xl w-full"
            >
              Autocenter Niederbipp AG
            </div>
            </AnimatedText>

          </div>
          <div className="flex flex-col gap-1">
          <AnimatedText>
            
            <div
              className="md:text-xl text-sm font-medium text-brGold"
            >
              Leenrütimattweg 3, 4704 Niederbipp
            </div>
            </AnimatedText>

            <AnimatedText>
            <div
              className="md:text-xl text-sm font-medium text-brGold"
            >
              +41 32-6330063
            </div>
            </AnimatedText>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="w-screen justify-center h-auto mt-4 md:mt-0 flex text-white relative">
        <div className="absolute w-full h-auto translate-y-[-10%] z-0">
          <img
            src="/background/Rectangle 156.svg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-[70%] w-[90%] flex">
          {/* Left Sidebar with Sticky Heading and Indicator */}
          <div className="md:flex hidden left h-screen w-1/3 sticky top-0  z-50">
            <div className="md:flex hidden w-full justify-end md:pr-20 md:py-[76px] relative gap-1">
              <div className="flex w-1/2 justify-end">
                <div
                  className={`w-[4px] ${height}  rounded-lg bg-brGold transition-transform duration-[0.3s] indicator`}
                  style={{ transform: `translateY(${translation}vh)` }}
                ></div>
              </div>
              <div className="flex flex-col gap-3 font-semibold font-xl">
                {data.map((item, index) => (
                  <div key={index} className="text-medium font-medium">
                    {item.type}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Questions and Answers */}
          <motion.div
            className="right h-auto w-full xl:w-2/3 z-50"
            ref={scroll}
          >
            {data.map((item, sectionIndex) => (
              <div
                key={sectionIndex}
                ref={(el) => (sections.current[sectionIndex] = el)}
                className="h-auto py-10 "
              >
                <h2 className="text-xl font-bold mb-3 w-[80%]">{item.type}</h2>
                {item.questions.map((qItem, qIndex) => (
                  <div key={qIndex} className="mb-2">
                    <div
                      className="flex text-medium font-medium cursor-pointer"
                      onClick={() =>
                        handleQuestionClick(`${sectionIndex}-${qIndex}`)
                      }
                    >
                      {qItem.question}
                      <div className={`flex flex-grow justify-end`}>
                        <img
                          src="/icon/add.svg"
                          className={`w-5 h-5 object-cover transform transition-transform duration-300  ${
                            activeQuestion === `${sectionIndex}-${qIndex}`
                              ? "rotate-45"
                              : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>
                    {activeQuestion === `${sectionIndex}-${qIndex}` && (
                      <p className="text-sm font-medium text-gray-200 mt-2">
                        {qItem.answer}
                      </p>
                    )}
                    <div className="w-full h-[0.3px] bg-brGold mt-2"></div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Theam;
