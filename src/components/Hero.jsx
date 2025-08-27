import { PiShootingStar } from "react-icons/pi";
import heroimage from "../../public/assets/hero.svg";
import { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { FaBook, FaUser } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import { CiPen } from "react-icons/ci";
import { IoCall } from "react-icons/io5";

const Hero = () => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY > 0;

      sections.forEach((section) => {
        const { top, bottom } = section.getBoundingClientRect();

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="bg-primary overflow-hidden w-full h-[130vh]">
      <div className="bg-main relative  w-full h-[120vh]">
        <div className="pt-10 fixed z-[999999] md:top-0 bottom-10 flex md:pr-4 pr-0 h-fit justify-center w-full">
          <nav className="bg-white/30 hidden text-sm md:text-md text-white md:flex justify-center items-center backdrop-blur-sm border-2 border-whie rounded-xl w-fit px-4 h-14">
            <ul className="flex gap-2 md:gap-8 items-center">
              <li>
                <a
                  href="#hero"
                  className={`font-bold ${
                    activeLink === "hero" ? "bg-white/20" : ""
                  } py-2 px-4 rounded-xl`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`font-bold ${
                    activeLink === "about" ? "bg-white/20" : ""
                  } py-2 px-4 rounded-xl`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className={`font-bold ${
                    activeLink === "education" ? "bg-white/20" : ""
                  } py-2 px-4 rounded-xl`}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`font-bold ${
                    activeLink === "skills" ? "bg-white/20" : ""
                  } py-2 px-4 rounded-xl`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className={`font-bold ${
                    activeLink === "portfolio" ? "bg-white/20" : ""
                  } py-2 px-4 rounded-xl`}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`font-bold ${
                    activeLink === "contact" ? "bg-white/20" : ""
                  } py-2 px-4 rounded-xl`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <nav className="bg-slate-300/30 flex text-xl text-white md:hidden justify-center items-center backdrop-blur-sm border-2 border-white rounded-xl w-fit px-4 h-14">
            <ul className="flex gap-6 items-center">
              <li>
                <a
                  href="#hero"
                  className={`font-bold ${
                    activeLink === "hero"
                      ? "text-blue-300 p-2 rounded-xl text-4xl"
                      : ""
                  }`}
                >
                  <IoMdHome />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`font-bold ${
                    activeLink === "about"
                      ? "text-blue-300 p-2 rounded-xl text-4xl"
                      : ""
                  }`}
                >
                  <FaUser />
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className={`font-bold ${
                    activeLink === "education"
                      ? "text-blue-300 p-2 rounded-xl text-4xl"
                      : ""
                  }`}
                >
                  <FaBook />
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`font-bold ${
                    activeLink === "skills"
                      ? "text-blue-300 p-2 rounded-xl text-4xl"
                      : ""
                  }`}
                >
                  <SiHyperskill />
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className={`font-bold ${
                    activeLink === "portfolio"
                      ? "text-blue-300 p-2 rounded-xl text-4xl"
                      : ""
                  }`}
                >
                  <CiPen />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`font-bold ${
                    activeLink === "contact"
                      ? "text-blue-300 p-2 rounded-xl text-4xl"
                      : ""
                  } p-2 rounded-xl text-2xl`}
                >
                  <IoCall />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="pt-20 relative z-[999] md:pt-60 text-white  wrapper">
          <div className="flex justify-between">
            <div
              className="flex flex-col gap-10"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <div className="border-t-2 border-l-2 p-2 rounded-full w-fit h-fit border-r-2 flex gap-2 items-center">
                <PiShootingStar className="text-xl" />
                <h1>Software Developer</h1>
              </div>
              <h1 className="text-7xl">
                Rafael <b>Billy</b>
              </h1>
              <p className="md:w-[40%]">
                Fresh graduate in Informatics with a strong enthusiasm for Web
                Development. I'm eager to keep learning and exploring the latest
                technologies, while continuously improving my skills through
                real-world experiences.
              </p>

              <a
                href="https://drive.google.com/file/d/1F3lzFlRL6fLvuQ_DLzFZznwIm7PvB-IW/view?usp=sharing"
                className="text-lg relative z-[999] px-6 py-2 rounded-md bg-second border-t-2 border-l-2 shadow-xl shadow-[#D011CC]/10 border-white w-fit"
              >
                See My Resume
              </a>
            </div>
          </div>
          <img
            src={heroimage}
            alt="Hero"
            className="absolute md:w-[55%] z-10 -bottom-[30rem] md:top-32  md:-right-32"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        </div>
        <div
          id="overlay"
          className="bg-gradient-to-b absolute bottom-0 from-primary/20 to-primary w-full h-80"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
