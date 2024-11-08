import React from "react";
import { projects } from "../Models";
import "./projects.css";
import { Loader } from "lucide-react";

function Projects() {
  return (
    <div
      id="Projects"
      className="bg-slate-300 md:p-24 md:mx-20 rounded-md bg-opacity-25 mb-10"
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold p-5">Projects</h1>
      <div className="py-12 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card p-2 md:p-6 flex flex-col w-full h-auto border bg-black border-white shadow-xl rounded-2xl"
          >
            <div className="w-40 h-44 mx-auto">
              <img className="rounded-md object-cover" src={project.img}></img>
            </div>
            <h3 className="px-4 mt-1 text-white text-xl md:text-2xl font-bold leading-normal">
              <p>{project.projectName}</p>
            </h3>
            <p className="px-4 text-sm  text-white md:text-md leading-tight">
              {project.projectStack}
            </p>
            <div className="flex before:md:p-1 gap-2 md:gap-4 mx-auto p-4 lg:p-2">
              <a
                href={project.projectGitLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="md:mt-5  bg-green-600 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-100 hover:scale-75 font-semibold rounded-3xl">
                  Code
                </button>
              </a>
              <a
                href={project.projectProdLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="md:mt-5 bg-red-500  text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-100 hover:scale-75 font-semibold rounded-3xl">
                  Visit
                </button>
              </a>
            </div>
          </div>
        ))}
        <div className="p-2 md:p-6 flex flex-col w-full h-auto border border-white bg-black shadow-xl rounded-2xl">
          {/* <Loader size={48} color="#ec1818" /> */}
          <div className="w-40 h-44 flex justify-center items-center bg-gray-400 border  rounded-md mx-auto">
             <Loader className="animate-spin" size={48} color="#ec1818" /> 
            </div>
          <h3 className="animate-fadeIn text-xl text-white md:text-2xl px-4 mt-1  leading-normal font-semibold">
            Farmasite
          </h3>
          <p className="px-4 text-sm text-white md:text-md leading-tight">
            Next.js , Tailwind & .Net
          </p>
          <div className="flex before:md:p-1 gap-2 md:gap-4 mx-auto p-4 lg:p-2">
            <a>
              <button className="bg-green-200 px-3 py-2 text-white opacity-50 cursor-not-allowed text-sm md:mt-5 md:text-lg  md:py-2 md:px-4 hover:opacity-85 duration-100 hover:scale-75 font-semibold rounded-3xl">
                Code
              </button>
            </a>
            <a>
              <button className="bg-red-200 px-3 py-2 text-white opacity-50 cursor-not-allowed text-sm md:mt-5 md:text-lg md:py-2  md:px-4  hover:opacity-85 duration-100 hover:scale-75 font-semibold rounded-3xl">
                Visit
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
