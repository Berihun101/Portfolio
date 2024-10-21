
"use client";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";
import { useState } from "react";
import MySkills from "./components/MySkills";
import Services from "./components/Services";
import MyProjects from "./components/MyProjects";
import ContactMeCard from "./components/ContactMeCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative">
      <div className="md:p-4 h-[700px] w-full md:bg-cover md:bg-top md:bg-no-repeat bg-right bg-cover relative mx-auto" style={{ backgroundImage: `url('/myImage3.png')` }}>
        
        {/* Navbar */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Content */}
        <div className="bg-transparent p-6 rounded-xl justify-center items-center absolute md:top-60 lg:left-32 md:left-12 xl:left-96 left-2 top-60 md:w-[600px] w-[475px]">
          <p className="text-myColor text-sm">HELLO! THIS IS BERIHUN</p>
          <h1 className="md:text-6xl text-5xl font-bold">
            <span className="text-myColor">Frontend</span> & <span className="text-myColor">Backend</span> Developer
          </h1>
          <div className="flex space-x-2 mt-3">
            <button className="bg-myColor text-white px-4 py-2 rounded-lg">Hire me</button>
            <Link href='/CV.pdf' download='Berihun_CV.pdf'>
            <button className="bg-transparent text-myColor px-4 py-2 border-2 border-myColor hover:bg-myColor hover:text-white transition rounded-lg">
              Download CV
            </button>
            </Link>
          </div>
        </div>

      </div>

      {/* About Section */}
      <About id="About" />
      <MySkills id="myskills" />
      <Services id="services" />
      <ContactMeCard  />
      <MyProjects id="Myprojects" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
}
