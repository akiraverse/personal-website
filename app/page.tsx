'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "@/components/Navbar";
import WhatIDo from "@/components/WhatIDo";
import TechStack from "@/components/TechStack";
import Certificates from "@/components/Certificates";
import TypingLoop from "@/components/TypingLoop";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Collaborate from "@/components/Collaborate";

import React, { useEffect, useState } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { IBlog, ICertificate, IProject } from "./types";
import { Github, Linkedin, Mail} from 'lucide-react';
import Link from "next/link";

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

export default function HomePage() {
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || ""; // optional but recommended
  const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const [projects, setProjects] = useState<IProject[] | null>([]);
  const [blogs, setBlogs] = useState<IBlog[] | null>([]);
  const [certificates, setCertificates] = useState<ICertificate[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        const [projectsResult, blogsResult, certificatesResult] = await Promise.all([
          supabase.from('projects').select("*"),
          supabase.from('blogs').select("*"),
          supabase.from('certificates').select("*")
        ]);

        if (projectsResult.error) throw projectsResult.error;
        if (blogsResult.error) throw blogsResult.error;
        if (certificatesResult.error) throw certificatesResult.error;

        setProjects(projectsResult.data || []);
        setBlogs(blogsResult.data || []);
        setCertificates(certificatesResult.data || []);
        
      } catch (err: any) {
        setError(err?.message ?? String(err));
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  console.log(projects, blogs)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    const offset = 150; // height of your navbar or desired offset

    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <Navbar scrolled={true}/>

      <section className="w-[95%] text-xl tracking-[-2px] justify-center mx-auto mt-[30vh]">
        <div className="tracking-[-2px] pb-32">

        <div id={"about-me"} className="flex flex-col text-center ">
          <div className="w-auto justify-center mx-auto">
            <TypingLoop/>
          </div>
          <p className="text-[#CECECE] tracking-wide lg:text-2xl md:text-xl sm:text-lg font-normal w-[80%] justify-center mx-auto mt-[2vh]">
            I'm Aqilah and I've been in the tech world for <span className="italic">2+ years</span>. I have a big interest and have done capstone projects related to <span className="font-bold">AI/ML, research, and web development</span> 
          </p>
        </div>


        <div className="flex lg:flex-row md:flex-row flex-col md:w-auto w-[80%] gap-4 justify-center mx-auto mt-[7vh]">
          <button  
            onClick={() => handleScroll("projects")}
            className="text-center bg-gradient-to-r from-emerald-400 md:w-auto w-full to-blue-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-500 transition-all"
          >
              View Portfolio →
          </button>
          <button onClick={() => handleScroll("connect")} 
          className="text-center md:w-auto w-full border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400/10 transition-all">
            Get in Touch
          </button>
        </div>

        <div className="flex gap-4 justify-center mt-[7vh]">
          {[
            { Icon: Github, href: "https://github.com/akiraverse" },
            { Icon: Linkedin, href: "https://linkedin.com/in/fathimah-aqilah" },
            { Icon: Mail, href: "mailto:faqilahz53@gmail.com" }
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              <button className="w-16 h-16 border border-gray-700 rounded-lg flex items-center justify-center hover:border-emerald-400 hover:text-emerald-400 transition-all">
          <Icon size={30} />
              </button>
            </a>
          ))}
        </div>

        <div className="mt-[30vh]">
          <WhatIDo id={"what-i-do"}/>
        </div>

        <div className="mt-[30vh]">
          <TechStack id={"tech-stack"}/>
        </div>

        <div className="mt-[30vh]">
          <Certificates certificates={certificates ?? []} id={"certificates"}/>
        </div>

        <div className="mt-[30vh]">
          <Projects projects={projects ?? []} id={"projects"}/>
        </div>

        <div className="mt-[30vh]">
          <Blogs blogs={blogs ?? []} id={"blogs"}/>
        </div>

        <div className="mt-[30vh]">
          <Collaborate id={'connect'}/>
        </div>


      </div>
      </section>
      
    </main>
    
  );
}
