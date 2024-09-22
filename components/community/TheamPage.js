"use client";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { createRoot } from "react-dom/client";
import { Button } from "@nextui-org/react";

export default function TheamPage() {
  const [showMore, setShowMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedArea, setSelectedArea] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null); // State for selected job

  const jobData = [
    {
      title: "Credit Specialist (Englewood Cliffs, USA)",
      location: "Englewood Cliffs, New Jersey, US",
      date: "Jul 9, 2024",
      department: "Finance & Financial Services",
      data: [{
        level: "Middel Level",
        duties: [
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" }
        ],
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id sed. Aperiam magni, laboriosam labore adipisci explicabo, in a provident maiores doloremque illum at consectetur inventore, deleniti iusto velit ea!",
        exprianc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate."
      }]
    },
    {
      title: "Events Manager (Englewood Cliffs, NJ)",
      location: "Englewood Cliffs, New Jersey, US",
      date: "Jul 6, 2024",
      department: "Marketing & Commercial",
      data: [{
        level: "Middel Level",
        duties: [
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" }
        ],
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id sed. Aperiam magni, laboriosam labore adipisci explicabo, in a provident maiores doloremque illum at consectetur inventore, deleniti iusto velit ea!",
        exprianc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate."
      }]
    },
    {
      title: "Buyer (Englewood Cliffs, USA)",
      location: "Englewood Cliffs, New Jersey, US",
      date: "Jul 4, 2024",
      department: "Marketing & Commercial",
      data: [{
        level: "Middel Level",
        duties: [
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" }
        ],
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id sed. Aperiam magni, laboriosam labore adipisci explicabo, in a provident maiores doloremque illum at consectetur inventore, deleniti iusto velit ea!",
        exprianc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate."
      }]
      
    },


      {
        title: "Buyer (Englewood Cliffs, USA)",
        location: "Englewood Cliffs, New Jersey, US",
        date: "Jul 4, 2024",
        departmen: "Marketing & Commercial",
        data: [{
        level: "Middel Level",
        duties: [
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" }
        ],
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id sed. Aperiam magni, laboriosam labore adipisci explicabo, in a provident maiores doloremque illum at consectetur inventore, deleniti iusto velit ea!",
        exprianc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate."
      }]
      },
      {
        title: "Marketing Coordinator (New York, USA)",
        location: "New York, New York, US",
        date: "Jun 20, 2024",
        department: "Marketing & Commercial",
        data: [{
        level: "Middel Level",
        duties: [
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" }
        ],
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id sed. Aperiam magni, laboriosam labore adipisci explicabo, in a provident maiores doloremque illum at consectetur inventore, deleniti iusto velit ea!",
        exprianc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate."
      }]
      },
      {
        title: "Purchasing Agent (Chicago, USA)",
        location: "Chicago, Illinois, US",
        date: "May 15, 2024",
        department: "Procurement",
        data: [{
        level: "Middel Level",
        duties: [
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" }
        ],
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id sed. Aperiam magni, laboriosam labore adipisci explicabo, in a provident maiores doloremque illum at consectetur inventore, deleniti iusto velit ea!",
        exprianc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate."
      }]
      },
      {
        title: "Senior Buyer (Los Angeles, USA)",
        location: "Los Angeles, California, US",
        date: "Apr 10, 2024",
        department: "Procurement",
        data: [{
        level: "Middel Level",
        duties: [
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" }
        ],
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id sed. Aperiam magni, laboriosam labore adipisci explicabo, in a provident maiores doloremque illum at consectetur inventore, deleniti iusto velit ea!",
        exprianc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate."
      }]
      },
      {
        title: "Marketing Associate (Houston, USA)",
        location: "Houston, Texas, US",
        date: "Mar 25, 2024",
        department: "Marketing & Commercial",
        data: [{
        level: "Middel Level",
        duties: [
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" }
        ],
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id sed. Aperiam magni, laboriosam labore adipisci explicabo, in a provident maiores doloremque illum at consectetur inventore, deleniti iusto velit ea!",
        exprianc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate."
      }]
      },
      {
        title: "Brand Manager (Seattle, USA)",
        location: "Seattle, Washington, US",
        date: "Feb 20, 2024",
        department: "Marketing & Commercial",
        data: [{
        level: "Middel Level",
        duties: [
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" }
        ],
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id sed. Aperiam magni, laboriosam labore adipisci explicabo, in a provident maiores doloremque illum at consectetur inventore, deleniti iusto velit ea!",
        exprianc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate."
      }]
      },
      {
        title: "Junior Buyer (Miami, USA)",
        location: "Miami, Florida, US",
        date: "Jan 15, 2024",
        department: "Procurement",
        data: [{
        level: "Middel Level",
        duties: [
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" }
        ],
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id sed. Aperiam magni, laboriosam labore adipisci explicabo, in a provident maiores doloremque illum at consectetur inventore, deleniti iusto velit ea!",
        exprianc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate."
      }]
      },
      {
        title: "Category Manager (Dallas, USA)",
        location: "Dallas, Texas, US",
        date: "Dec 10, 2023",
        department: "Procurement",
        data: [{
        level: "Middel Level",
        duties: [
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" }
        ],
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id sed. Aperiam magni, laboriosam labore adipisci explicabo, in a provident maiores doloremque illum at consectetur inventore, deleniti iusto velit ea!",
        exprianc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate."
      }]
      },
      {
        title: "Contract Manager (San Francisco, USA)",
        location: "San Francisco, California, US",
        date: "Nov 25, 2023",
        department: "Procurement",
        data: [{
        level: "Middel Level",
        duties: [
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" },
          { dut: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam pariatur eaque, ullam voluptate sint id sapiente unde aperiam nostrum" }
        ],
        dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id sed. Aperiam magni, laboriosam labore adipisci explicabo, in a provident maiores doloremque illum at consectetur inventore, deleniti iusto velit ea!",
        exprianc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate."
      }]
      },
      {
        title: "Sourcing Specialist (Boston, USA)",
        location: "Boston, Massachusetts, US",
        date: "Oct 20, 2023",
        department: "Procurement",
      }
    
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 1) {
      const filteredSuggestions = jobData.filter((job) =>
        job.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    filterJobs(e.target.value, selectedArea, searchTerm);
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
    filterJobs(selectedCountry, e.target.value, searchTerm);
  };

  const filterJobs = (country, area, term) => {
    const filtered = jobData.filter((job) => {
      const locationMatch = country === "All" || job.location.includes(country);
      const departmentMatch = area === "All" || job.department.includes(area);
      const termMatch = term === "" || job.title.toLowerCase().includes(term.toLowerCase());
      return locationMatch && departmentMatch && termMatch;
    });
    setFilteredJobs(filtered);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };




// to control job detatils
  function JobDetails({ job }) {
    return (
      <div className="md:p-4 p-3 border rounded-lg flex flex-col gap-2">
        <div className="md:text-2xl text-base font-bold flex">{job.title} <div className="flex flex-grow justify-end md:pr-5"><Button className="text-white bg-red-600 rounded-xl md:text-lg text-sm" onClick={()=>setSelectedJob(false)}>Back</Button></div></div>
        <p className="text-gray-400 md:text-xl text-sm">{job.location}</p>
        <p className="text-gray-400 md:text-xl text-sm">{job.department}</p>
        <p className="text-gray-400 md:text-xl text-sm">{job.date}</p>
        {job.data && (
          <div>
        <p className="md:text-lg text-base font-bold mt-2 mb-1 ">Description:</p>
            <p className="text-white mb-2 text-xs">{job.data[0].dis}</p>
            <p className="md:text-lg text-base font-bold mt-2 mb-1">Duties:</p>
            <ul className="list-disc pl-5 flex flex-col md:gap-2 gap-1 md:mb-2  md:text-sm text-xs">
              {job.data[0].duties.map((duty, index) => (
                <li key={index} className="text-white md:text-sm text-xs">{duty.dut}</li>
              ))}
            </ul>
            <div className="md:my-5 my-4 md:text-base text-xs">In order to succeed in this challenging role, you will ideally have achieved a Bachelor's degree or relevant work experience</div>
            <p className="md:text-lg text-base font-bold md:mt-2  mt-1 mb-1">Experience:</p>
            <p className="text-white mb-2 md:text-sm text-xs">{job.data[0].exprianc}</p>
            <div className="md:my-5 my-2 text-xs md:text-lg">We are an Equal Opportunity Employer. Reasonable accommodations may be made to enable individuals with disabilities to perform the essential job duties of this position</div>
            <p className="md:text-lg font-bold text-xs">Seniority: {job.data[0].level}</p>
          </div>
        )}
        <div className="w-full p-3 flex justify-end"><Button className="rounded-xl bg-red-600 text-white text-xl">APPLY</Button></div>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Join Our Talent Community</title>
      </Head>
      <div className="w-auto h-auto custom-career-page-gradient text-white flex flex-col items-center">
        <header className="relative w-full h-auto">
          <div className="w-screen h-[100vh]">
            <Image
              src="/community-page/1.jpeg"
              alt="Banner Image"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center md:block flex flex-col gap-2 px-3">
              <p className="text-sm text-white mb-2">JOIN OUR TALENT COMMUNITY</p>
              <h1 className="md:text-6xl text-3xl text-white font-bold">
                WE ARE LOOKING FOR EXCELLENCE
              </h1>
              <p className="md:text-3xl text-lg text-white">
                We are always looking for ambitious people who share our passion
                for Ferrari, and for excellence.
              </p>
            </div>
          </div>
        </header>
        <main className="md:w-[75%] w-full p-4 mt-3">
          <section className="my-4 flex flex-col gap-2 text-center">
            <div className="md:flex-row flex flex-col items-center justify-center md:gap-3 gap-1 mb-4 relative">
              <input
                type="text"
                placeholder="Search by Keyword"
                value={searchTerm}
                onChange={(e) => {
                  handleSearchChange(e);
                  filterJobs(selectedCountry, selectedArea, e.target.value);
                }}
                className="p-2 border rounded-lg md:w-[80%] w-full text-black"
              />
              {suggestions.length > 0 && (
                <ul className="absolute top-full left-[10%] w-[80%] border rounded-lg z-10 bg-white">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="p-2 cursor-pointer text-black hover:bg-gray-200"
                      onClick={() => {
                        setSearchTerm(suggestion.title);
                        setSuggestions([]);
                        filterJobs(selectedCountry, selectedArea, suggestion.title);
                      }}
                    >
                      {suggestion.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              className="text-red-600"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Fewer Options" : "Show More Options"}
            </button>
          </section>
          {showMore && (
            <section className="md:flex-row flex flex-col justify-center gap-4 my-4">
              <div className="md:w-1/2 w-full">
                <label htmlFor="country" className="block text-left">
                  Country/Region
                </label>
                <select
                  id="country"
                  className="p-2 border rounded-lg w-full text-black"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="All">All</option>
                  <option value="US">United States</option>
                  <option value="Italy">Italy</option>
                  <option value="Germany">Germany</option>
                  <option value="Japan">Japan</option>
                </select>
              </div>
              <div className="md:w-auto w-full">
                <label htmlFor="professionalArea" className="block text-left">
                  Professional Area
                </label>
                <select
                  id="professionalArea"
                  className="p-2 border rounded-lg w-full text-black"
                  value={selectedArea}
                  onChange={handleAreaChange}
                >
                  <option value="All">All</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
            </section>
          )}
          {selectedJob ? (
            <JobDetails job={selectedJob} />
          ) : (
            <>
              <section className="my-8">
                <div className="w-full ">
                  <p className="text-lg font-bold mb-2">Available Jobs</p>
                  {searchTerm === "" && filteredJobs.length === 0 ? (
                    <p className="text-white">No jobs available. Please use the search bar to find jobs.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:gap-4 gap-3">
                      {filteredJobs.map((job, index) => (
                        <div
                          key={index}
                          className=" w-full md:h-auto h-[25vh] md:p-4 p-3 border rounded-lg cursor-pointer"
                          onClick={() => handleJobClick(job)}
                        >
                          <p className="text-xl font-semibold">{job.title}</p>
                          <p className="text-gray-400">{job.location}</p>
                          <p className="text-gray-400">{job.department}</p>
                          <p className="text-gray-400">{job.date}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
              <section className="my-8">
                <GoogleMap/>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
}






const locations = [
  { key: 'berlin', location: { lat: 52.52, lng: 13.405 }, jobs: ['Software Engineer', 'Data Scientist', 'UX Designer'] },
  { key: 'munich', location: { lat: 48.1351, lng: 11.5820 }, jobs: ['Product Manager', 'Marketing Specialist'] },
  { key: 'frankfurt', location: { lat: 50.1109, lng: 8.6821 }, jobs: ['Business Analyst', 'Financial Advisor', 'Sales Manager', 'HR Specialist', 'Operations Manager'] },
  { key: 'hamburg', location: { lat: 53.5511, lng: 9.9937 }, jobs: ['Graphic Designer', 'Web Developer'] },
  { key: 'dresden', location: { lat: 51.0504, lng: 13.7373 }, jobs: ['Customer Support', 'IT Consultant'] },
];

const GoogleMap = () => {
  const mapRef = useRef(null);
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    const loadMapScript = () => {
      console.log('Loading Google Maps script');
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCWK1_Ee65T__NGGbCyj8Y26ih3nc68foM`;
      script.async = true;
      script.onload = () => {
        console.log('Google Maps script loaded');
        initMap();
      };
      script.onerror = () => {
        console.error('Error loading Google Maps script');
      };
      document.head.appendChild(script);
    };

    const initMap = () => {
      console.log('Initializing map');
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 5,
        center: { lat: 51.1657, lng: 10.4515 },
        mapId: '1301cdd8e6cc53bb'
      });
      const infowindow = new window.google.maps.InfoWindow();
      setInfoWindow(infowindow);

      locations.forEach((loc) => {
        const marker = new window.google.maps.Marker({
          position: loc.location,
          map: map,
          title: `${loc.key.charAt(0).toUpperCase() + loc.key.slice(1)} (${loc.jobs.length} jobs)`,
          label: {
            text: `${loc.jobs.length} jobs`,
            color: 'black',
            fontSize: '14px',
            fontWeight: 'bold',
            background: 'red',
            padding: '2px',
            border: '1px solid black',
            borderRadius: '4px',
          },
        });

        marker.addListener('click', () => {
          const contentString = `
            <div class="text-black">
              <h3>${loc.key.charAt(0).toUpperCase() + loc.key.slice(1)}</h3>
              <ul>
                ${loc.jobs.map(job => `<li>${job}</li>`).join('')}
              </ul>
            </div>
          `;
          infowindow.setContent(contentString);
          infowindow.open(map, marker);
        });
      });
    };

    loadMapScript();
  }, []);

  return <div ref={mapRef} className="h-full w-full"></div>;
};
