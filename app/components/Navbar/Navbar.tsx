"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 bg-myColor ${scrolled? 'md:bg-myColor_dark' : 'md:bg-transparent'}  py-4`}>
      <div className="max-w-[1800px] px-12 sm:px-8 md:px-16 lg:px-32 xl:px-72 mx-auto flex justify-between items-center">
        <h1 className="text-3xl text-second_color font-bold">Berihun.</h1>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer transition" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>

        {/* Desktop Links */}
        <div className={`md:flex space-x-8 ${isOpen ? 'hidden' : 'hidden'} md:block`}>
          <Link href="/" className="border-b-2 border-transparent hover:border-second_color transition-colors">HOME</Link>
          <Link href="#About" className="border-b-2 border-transparent hover:border-second_color transition-colors">ABOUT</Link>
          <Link href="#myskills" className="border-b-2 border-transparent hover:border-second_color transition-colors">SKILLS</Link>
          <Link href="#services" className="border-b-2 border-transparent hover:border-second_color transition-colors">SERVICES</Link>
          <Link href="#Myprojects" className="border-b-2 border-transparent hover:border-second_color transition-colors">PROJECTS</Link>
          <Link href="#contact" className="border-b-2 border-transparent hover:border-second_color transition-colors">CONTACT</Link>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden px-8 flex flex-col bg-myColor border-b border-gray-300 shadow-xl py-4 space-y-4">
          <Link href="/" className="border-b-2 w-[20%] border-transparent hover:border-gray-500 transition-colors">HOME</Link>
          <Link href="#About" className="border-b-2 w-[20%] border-transparent hover:border-gray-500 transition-colors">ABOUT</Link>
          <Link href="#myskills" className="border-b-2 w-[20%] border-transparent hover:border-gray-500 transition-colors">SKILLS</Link>
          <Link href="#services" className="border-b-2 w-[20%] border-transparent hover:border-gray-500 transition-colors">SERVICES</Link>
          <Link href="#Myprojects" className="border-b-2 w-[20%] border-transparent hover:border-gray-500 transition-colors">PROJECTS</Link>
          <Link href="#contact" className="border-b-2 w-[20%] border-transparent hover:border-gray-500 transition-colors">CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
