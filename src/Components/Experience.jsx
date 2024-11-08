import React from "react";
import informaticaLogo from "../assets/informatica_nobglogo.png";
import Innova from '../assets/Innova.jpg';


function Experience() {
  return (
    <div id="Experience" className="p-10 md:p-24 bg-slate-300 bg-opacity-25 mb-10 md:mx-20 mt-10 rounded-md">
      <h1 className="text-white text-2xl md:text-4xl  font-bold">Experience</h1>
      <div className="md:flex flex-wrap md:flex-row items-center justify-around">
        <div className=" grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4  w-full md:w-1/2 gap-8 md:p-12 py-10">
          <span className="p-3 flex items-center rounded-2xl">
            <i className="devicon-react-original-wordmark colored text-6xl"></i>
          </span>
          <span className="p-3 flex items-center rounded-2xl">
            <i class="devicon-bootstrap-plain-wordmark colored text-6xl"></i>
          </span>
          <span className="p-3 flex items-center rounded-2xl">
            <i class="devicon-dotnetcore-plain colored text-6xl"></i>
          </span>
          <span className="p-3 flex items-center rounded-2xl">
            <i class="devicon-tailwindcss-plain-wordmark colored text-6xl"></i>
          </span>
          <span className="p-3 flex items-center rounded-2xl">
            <i class="devicon-nextjs-original-wordmark text-6xl text-white"></i>
          </span>
          <span className="p-3 flex items-center rounded-2xl">
            <i class="devicon-html5-plain-wordmark colored text-6xl"></i>
          </span>
          <span className="p-3 flex items-center rounded-2xl">
            <i class="devicon-javascript-plain colored text-6xl"></i>
          </span>
          <span className="p-3 flex items-center rounded-2xl">
            <i class="devicon-angular-plain colored text-6xl"></i>
          </span>
          <span className="p-3 flex items-center rounded-2xl">
            <i class="devicon-reactbootstrap-original colored text-6xl"></i>
          </span>
          <span className="p-3 flex items-center rounded-2xl">
            
          <i class="devicon-azuresqldatabase-plain text-6xl text-white"></i>
          
          </span>
          <span className="p-3 flex items-center rounded-2xl">
            <i class="devicon-redux-original colored text-6xl"></i>
          </span>
          <span className="p-3 flex items-center rounded-2xl">
            <img src={informaticaLogo} className="w-16" alt="informatica"></img>
          </span>
        </div>
        
          <div className="flex gap-5 w-full md:w-1/2 bg-slate-400  mt-4 rounded-lg p-4 items-center overflow-hidden">
            <img className="w-10 h-5 md:w-18 md:h-8" src={Innova}></img>
            <span className="text-black">
              <h2>Junior Software Enginerr</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present ,
              </p>
              <ul className="text-sm p-2 ">
                <li className="font-semibold">Full Stack Developer</li>
                <li className="font-bold text-yellow-300">Excellence Quest</li>
                <ul className="list-disc">
                  <p className="font-medium">Front End Development</p>
                  <li>Designed and implemented user-friendly UI pages using React and tailwind, that enhance user experience and engagement</li>
                </ul>
                <ul className="list-disc">
                  <p className="font-medium">Backend End Development</p>
                  <li>Developed robust RESTful APIs using the .NET framework, facilitating seamless communication between the front-end and back-end components.</li>
                  <li>Managed data storage and retrieval using SQL Server Management Studio (SSMS), ensuring efficient database operations and integrity</li>
                </ul>
              </ul>
            </span>
          </div>
        
      </div>
    </div>
  );
}

export default Experience;
