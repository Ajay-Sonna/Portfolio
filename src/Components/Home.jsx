import React from "react";
import profileImg from '../assets/profileIcon.png'
import { ArrowDownToLine } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import resume from '../assets/Ajay_Sonna_Resume.pdf';
import TextReveal from "./TextReveal";

const Home = () => {

  const success =()=> toast.success("Resume Dowloaded" ,{
    position: "top-center"
  })

  return (
    <div className="text-white md:flex justify-around  items-start p-10 md:p-10">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-white text-3xl mb-2 md:text-5xl font-bond flex leading-normal tracking-tighter">
          <TextReveal/>
        </h1>
        <p className="text-white">
          I am a versatile Full-stack developer with extensive experience in
          building robust applications across various platforms
        </p>
        <div className="flex justify-center bg-yellow-400 md:w-1/3 rounded-md mt-5">
          <a href={resume} download="Ajay_Sonna_Resume.pdf">
            <button className="p-2 text-black" onClick={success}>Download Resume</button>
          </a>
          <span className="p-2 text-black">
            <ArrowDownToLine></ArrowDownToLine>
          </span>
        </div>
      </div>
      <img
        className="mt-3 md:mt-0 md:w-96 md:h-96 "
        src={profileImg}
        alt="image-logo"
      ></img>
      <ToastContainer/>
    </div>
  );
};

export default Home;
