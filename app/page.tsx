'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AchievementsList from "./achievementList";

import { 
  faInstagram, 
  faGithub, 
  faDiscord,
  faLinkedin,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import {
  faGlobe,
  faLaptop,
  faMicrochip,
  faChartBar,
  faVolumeHigh,
  faPen,
  faCode,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="tracking-[1px] pb-32">

      <div className="p-6">
        <h1 className="lg:text-[12vh] leading-[100%]  font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 [min-width:320px]:text-3xl max-[640px]:text-3xl">
          Hi I'm Aqilah,<br/><span className="italic font-[100]"> a software engineering</span><br />
          student at SMK Telkom Malang   
        </h1>
      </div>

      <div className="flex flex-row gap-x-8 mt-[200px]">
        <div className="w-[300px] h-[300px] rounded-full">
          <img src="/image/aqilah-profile.jpeg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>

        <div className="w-[45%] align-middle my-auto">
          <h3 className="text-5xl font-extrabold mb-4">Aqilah / Akira</h3>
          <p className="text-[#CECECE] text-base">Originally from Surabaya, but currently studying in Malang. Has a big interest in software engineering, data science, cyber security and business. Loves to travel and make friends! </p>
        </div>

        <div className="align-middle my-auto border border-gray-500 py-5 px-8 rounded-xl">
          <h3 className="text-3xl font-extrabold mb-4">Let's Connect</h3>
          <div className="text-white pt-100 text-4xl">
            <FontAwesomeIcon className="mr-3" icon={faInstagram} />
            <FontAwesomeIcon className="mr-3" icon={faLinkedin} />
            <FontAwesomeIcon className="mr-3" icon={faGithub} />
          </div>
        </div>
      </div>

      <div className="mt-[200px]">
        <div className="w-full align-middle my-auto">
          <h3 className="text-center text-5xl font-black">What I do?</h3>
          <p className="w-[65%] text-center text-[#CECECE] text-base justify-center mx-auto mt-10">Currently learning and building AI/ML innovations by tackling real-world issues based on Sustainable Development Goals</p>
        </div>

        <div className="flex flex-wrap gap-x-3 tracking-[-1px] justify-center mx-auto mt-10">
          <div className="bg-[#40E1A5] text-[#272727] px-4 py-2 font-bold border border-gray-500 rounded-full text-base flex items-center gap-2">
            <FontAwesomeIcon icon={faMicrochip} className="text-xl"/>
            AI & Machine Learning
          </div>

          <div className="bg-[#43D2BD] text-[#272727] px-4 py-2 font-bold border border-gray-500 rounded-full text-base flex items-center gap-2">
            <FontAwesomeIcon icon={faChartBar} className="text-xl"/>
            Data Analysis
          </div>

          <div className="bg-[#45C8CD] text-[#272727] px-4 py-2 font-bold border border-gray-500 rounded-full text-base flex items-center gap-2">
            <FontAwesomeIcon icon={faGlobe} className="text-xl"/>
            Web Development
          </div>

          <div className="bg-[#48BDDF] text-[#272727] px-4 py-2 font-bold border border-gray-500 rounded-full text-base flex items-center gap-2">
            <FontAwesomeIcon icon={faVolumeHigh} className="text-xl"/>
            Public Speaking
          </div>

          <div className="bg-[#49B5EB] text-[#272727] px-4 py-2 font-bold border border-gray-500 rounded-full text-base flex items-center gap-2">
            <FontAwesomeIcon icon={faPen} className="text-xl"/>
            Copywriting
          </div>
        </div>
      </div>

      <div className="mt-[100px] flex flex-wrap justify-center mx-auto">
        <div className="mx-5 w-16 h-16 flex items-center">
          <img src="/svg/python-original.svg" alt="python" />
        </div>
        <div className="mx-5 w-16 h-16 flex items-center">
          <img src="/svg/css3-original.svg" alt="css3" />
        </div>
        <div className="mx-5 w-16 h-16 flex items-center">
          <img src="/svg/html5-original.svg" alt="html5" />
        </div>
        <div className="mx-5 w-16 h-16 flex items-center">
          <img src="/svg/java-original.svg" alt="java" />
        </div>
        <div className="mx-5 w-16 h-16 flex items-center">
          <img src="/svg/javascript-plain.svg" alt="javascript" />
        </div>
        <div className="mx-5 w-16 h-16 flex items-center">
          <img src="/svg/pandas-original.svg" alt="pandas" />
        </div>
        <div className="w-20 h-20 mx-2">
          <img src="/svg/pytorch.svg" alt="pytorch" />
        </div>
        <div className="w-20 h-20 mx-2">
          <img src="/svg/seaborn.svg" alt="seaborn" />
        </div>
        <div className="mx-5 w-16 h-16 flex items-center">
          <img src="/svg/nodejs-plain-wordmark.svg" alt="nodejs" />
        </div>
        <div className="mx-5 w-16 h-16 flex items-center">
          <img src="/svg/tailwindcss-plain.svg" alt="tailwind" />
        </div>
      </div>

      <div className="mt-[200px]">
        <h3 className="text-center text-5xl font-black [min-width:320px]:text-xl max-[640px]:text-xl">Achievements</h3>
        <div className="flex lg:flex-wrap justify-center mx-auto mt-5 [min-width:320px]:flex-col max-[640px]:flex-col">
          {
            AchievementsList.map((data, index) => 
              <div key={data.id} className="lg:w-[30%] mx-3 my-3 rounded-lg border border-gray-300">
                <div className="w-full h-[35vh] rounded-t-lg overflow-hidden">
                  <img className="rounded-t-lg w-full h-full object-cover" src={data.image} alt={data.label} />
                </div>
                <div className="p-3">
                  <div className="inline-block w-fit p-1 px-3 bg-[#323443] rounded-full text-sm">
                    <p>{data.level}</p>
                  </div>
                  <h3 className="text-2xl font-bold mt-2 tracking-tight">{data.title}</h3>
                  <p className="text-sm mt-2 tracking-[-0.2px]">{data.description}</p>
                </div>
              </div>
            )
          }
        </div>
      </div>

      <div className="mt-[200px]">
        <h3 className="text-center text-5xl font-black">Projects</h3>
        <div className="">
          <p className="text-center mt-10 p-10 border border-gray-300 rounded-lg">Coming Soon !</p>
        </div>
      </div>

      <div className="mt-[200px]">
        <h3 className="text-center text-5xl font-black">Let's Collaborate!</h3>
        <div className="text-4xl flex flex-wrap justify-center mx-auto mt-8">
          <div className="mx-5 w-16 h-16 flex items-center">
            <a href='https://www.instagram.com/aqilahhhxx___/' target="_blank" rel="noopener noreferrer">
              <img src="/svg/connect/instagram.svg" alt="seaborn" />
            </a>
          </div>
          <div className="mx-5 w-16 h-16 flex items-center">
            <a href="https://github.com/akiraverse" target="_blank" rel="noopener noreferrer">
              <img src="/svg/connect/github.svg" alt="nodejs" />
            </a>
          </div>
          <div className="mx-5 w-16 h-16 flex items-center">
            <a href="https://www.linkedin.com/in/fathimah-aqilah/" target="_blank" rel="noopener noreferrer">
              <img src="/svg/connect/linkedin.svg" alt="tailwind" />
            </a>
          </div>
          <div className="mx-5 w-16 h-16 flex items-center">
            <img src="/svg/connect/tiktok.svg" alt="tailwind" />
          </div>
          <div className="mx-5 w-16 h-16 flex items-center">
            <img src="/svg/connect/youtube.svg" alt="tailwind" />
          </div>
        </div>
      </div>
    </div>
  );
}
