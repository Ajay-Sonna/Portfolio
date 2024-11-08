import React from "react";
import { ArrowBigRight } from "lucide-react";
import aboutImg from '../assets/AboutImage.jpg'

const About = () => {
  return (
    <div id="About" className="p-12 text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center shadow-xl mx-0 bg-slate-300 md:mx-20 bg-opacity-25 rounded-lg">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          
              
          <img src={aboutImg} className='md:h-80 m-5' alt="about-img"></img>
          
          <ul>
            <div className="flex gap-3 py-4">
              <p>
                <ArrowBigRight />{" "}
              </p>
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Front End Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I specialize in creating intuitive user interfaces using 
                languages such as HTML, CSS, and JavaScript, React, React-redux
                along with modern frameworks like Next.js and Angular. 
                My focus is on ensuring responsiveness and seamless interactions across devices.
                </p>
              </span>
            </div>
            
            <div className="flex gap-3 py-4">
              <p>
                <ArrowBigRight />{" "}
              </p>
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Back End Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I have a solid foundation in server-side programming with
                 languages such as Node.js, and C# within the .NET framework. 
                 I am skilled in designing and integrating RESTful APIs and managing database technologies like MySQL and MongoDB.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
