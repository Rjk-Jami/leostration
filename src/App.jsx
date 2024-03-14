import { LuHome } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { TbAward } from "react-icons/tb";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import profile from "../src/assets/profile.png"
import { IoMdFlame } from "react-icons/io";

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";

import Introduce from "./component/Introduce";
import About from "./component/About";
import Experience from "./component/Experience";
import { CssContext } from "./provider/CssProvider";
import Education from "./component/Education";
import Contact from "./component/Contact";
import { CgMenuMotion } from "react-icons/cg";
import { NavLink } from "react-router-dom";


function App() {
  const [active, setActive] = useState("");
  const { primaryColor } = useContext(CssContext)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "introduce",
        "about",
        "experience",
        "Education",
        "Education2",
        "Contact"
      ];

      const currentPosition = window.pageYOffset;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (!section) continue; // Skip if section not found

        const sectionOffset = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionOffset + sectionHeight;

        if (
          currentPosition >= sectionOffset &&
          currentPosition < sectionBottom
        ) {
          setActive(sections[i]);
          break; // Exit loop once active section is found
        }
      }
    };

    handleScroll(); // Call to set active section on initial render

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActive]);

  return (
    <>
  
      <div className=" w-full overflow-hidden bg-black relative">
      
        {/* pc effect */}
        <div className="ms-6 xl:ms-12   ">
          <div className="">
            <img src="https://i.ibb.co/8b9CzCg/image.png" className="absolute xl:fixed z-10 w-[50px] h-[50px] xl:w-[100px] xl:h-[100px] top-10 xl:top-11" alt="" />



          </div>



          <div className="">
            <CgMenuMotion className={`absolute xl:fixed text-3xl text-white xl:right-[107px] right-[40px] z-30 top-[50px]  xl:top-[80px] hover:text-[${primaryColor}]`} />
          </div>
          <div className="absolute hidden xl:block left-[1148px] -top-[747px] w-[1516px] h-[1516px] bg-[#9747FF] blur-[500px] md:blur-[1250px] rounded-full"></div>
          <div className="absolute hidden xl:block left-[1544px] top-[1471px] w-[1647px] h-[1516px] bg-[#9747FF] blur-[500px] md:blur-[1250px] rounded-full"></div>
          <div className="absolute hidden xl:block left-[1504px] top-[3921px] w-[1616px] h-[1516px] bg-[#9747FF] blur-[500px] md:blur-[1250px] rounded-full"></div>
          <div className="absolute hidden xl:block left-[1502px] top-[6150px] w-[1516px] h-[1516px] bg-[#9747FF] blur-[500px] md:blur-[1250px] rounded-full"></div>
          {/* tab effect */}
          <div className="absolute hidden md:block xl:hidden left-[448px] -top-[1085px] w-[1516px] h-[1516px] bg-[#9747FF] blur-[750px]  rounded-full"></div>
          <div className="absolute hidden md:block xl:hidden left-[544px] top-[1271px] w-[1647px] h-[1016px] bg-[#9747FF] blur-[1750px]  rounded-full"></div>
          <div className="absolute hidden md:block xl:hidden left-[604px] top-[3021px] w-[1616px] h-[1516px] bg-[#9747FF] blur-[1750px]  rounded-full"></div>
        </div>
        {/* mobile effect */}
        <div className=" absolute block md:hidden left-24 -top-[1258px] w-[1140px] h-[1516px] bg-[#9747FF] blur-[220px]  rounded-full "></div>
        <div className=" absolute block md:hidden left-60 top-[1180px] w-[342px] h-[402px] bg-[#9747FF]  blur-[220px]   rounded-full "></div>
        <div className=" absolute block md:hidden -left-64 top-[1950px] w-[342px] h-[402px] bg-[#9747FF] blur-[220px]   rounded-full "></div>
        <div className=" absolute block md:hidden left-60 top-[2980px] w-[342px] h-[402px] bg-[#9747FF] blur-[220px]   rounded-full "></div>

        <div className="fixed hidden   xl:flex xl:items-center right-0 xl:mt-[215px] 2xl:mt-[281px] me-[92px] gap-[41px]  py-[40px] z-50 text-white pt-[40px] w-[57px]   border rounded-[36px] border-[#E3F2FD] flex-col">
          <Link
            to="introduce"
            spy={true}
            smooth={true}
            duration={500}
            className={active === "introduce" ? `text-[${primaryColor}]` : ""}
            onClick={() => setActive("introduce")}
          >
            <LuHome className={`w-[18px] h-[20.02px] hover:text-[${primaryColor}]`} />
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className={active === "about" ? `text-[${primaryColor}]` : ""}
            onClick={() => setActive("about")}
          >
            <LuUser2 className="w-[18px] h-[20.02px] hover:text-[#9747FF]" />
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className={active === "experience" ? `text-[${primaryColor}]` : ""}
            onClick={() => setActive("experience")}
          >
            <PiSuitcaseSimpleBold className="w-[18px] h-[20.02px] hover:text-[#9747FF]" />
          </Link>
          <Link
            to="Education"
            spy={true}
            smooth={true}
            duration={500}
            className={active === "Education" ? `text-[${primaryColor}]` : ""}
            onClick={() => setActive("Education")}
          >
            <LuGraduationCap className="w-[18px] h-[20.02px] hover:text-[#9747FF]" />
          </Link>
          <Link
            to="Education2"
            spy={true}
            smooth={true}
            duration={500}
            className={active === "Education2" ? `text-[${primaryColor}]` : ""}
            onClick={() => setActive("Education2")}
          >
            <TbAward className="w-[18px] h-[20.02px] hover:text-[#9747FF]" />
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            className={active === "Contact" ? `text-[${primaryColor}]` : ""}
            onClick={() => setActive("Contact")}
          >
            <FaRegEnvelope className="w-[18px] h-[20.02px] hover:text-[#9747FF]" />
          </Link>
        </div>




        {/* main content */}
        <div className="flex flex-col xl:flex-row  xl:gap-16 relative md:max-w-full mx-auto " >
          {/* fixed content */}
          <div className="xl:w-4/12 2xl:w-4/12 mb-7 xl:mb-0 xl:h-screen">
            {/* card round */}
        

            <div className="overflow-hidden mx-auto xl:ms-[120px] 2xl:ms-[189px] mt-[120px] xl:mt-[180px] 2xl:mt-[200px] xl:fixed w-[280px] h-[470px] 2xl:w-[328px] 2xl:h-[580px]  rounded-[36px] border border-opacity-40 border-[#9747FF] ">

              <div className="flex justify-between   mt-5 2xl:mt-8">
                <p className=" ms-[22px] 2xl:ms-8 text-[28px] 2xl:text-[30px] font-bold text-white">Leon S<span className={`text-[${primaryColor}]`}>.</span></p>
                <p className="me-[22px]  mt-4 2xl:mt-3 text-white text-[12px] 2xl:text-[16px]">Founder, Leostration</p>

              </div>
              {/*  fixed card */}
              <div className=" w-52 2xl:w-64 h-52 2xl:h-64 mx-auto mt-6 2xl:mt-6   relative">
                <div className="w-[120px] lg:w-[110px] top-1.5 h-[120px] lg:h-[110px] 2xl:w-40 2xl:h-40 right-[41px] lg:right-[44px] 2xl:right-[50px] bg-[#9747FF] rounded-full absolute z-10 2xl:-z-10   blur-xl 2xl:blur-2xl"></div>
                <div className="w-48 h-48  2xl:w-full 2xl:h-full  mt-1 ms-2 2xl:ms-0">
                  <img className=" w-full  absolute z-50" src={profile} />
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4 2xl:gap-6">
                <div className="text-white text-xl 2xl:text-xl text-center">
                  <p>@leonsarker743</p>
                  <p>Rajshahi, Bangladesh</p>
                </div>
                {/* icon */}
                <div className=" flex text-md 2xl:text-xl gap-7 2xl:gap-6 justify-center text-white">
                  <NavLink to={'https://www.facebook.com/leonsarker743'} target="_blank">< FaFacebookF className="hover:text-[#9747FF]"></FaFacebookF></NavLink>
                  <NavLink to={'https://dribbble.com/leonsarker743'} target="_blank">< FiDribbble className="hover:text-[#9747FF]" /></NavLink>
                  <NavLink to={'https://www.behance.net/leonsarker743'} target="_blank">< FaBehance className="hover:text-[#9747FF]" /></NavLink>
                  <NavLink to={'https://flames.design/leonsarker743'} target="_blank">< IoMdFlame className="hover:text-[#9747FF]" /></NavLink>

                </div>
              </div>
              <div className="flex mt-6 2xl:mt-3">
                <NavLink target="_blank" to="https://wa.me/message/7HIGH5ELLWBJI1" className={` w-fit mx-auto uppercase py-2 2xl:py-[18px] border hover:border-none 2xl:my-5 px-14 2xl:px-24 rounded-full text-[10px] 2xl:text-[17px]  border-[${primaryColor}] text-white font-medium hover:bg-gradient-to-r  from-[#4600A0] to-[#9747FF]`}>Hire me!</NavLink>

              </div>

              <div className="hidden xl:block fixed z-50 xl:left-[71px] 2xl:left-[80px]">
        <p className='text-white text-[10px] mt-16 '>© 2024 Leon S. All Rights Reserved</p>
      </div>
             
            </div>
            
          </div>





          {/* blog content */}
          <div className="z-40 text-white w-full mx-auto xl:mx-0 lg:w-6/12 2xl:w-5/12 scrollbar">
            {/* 1 */}

            <div id="introduce" className=" pt-[0px] xl:pt-[79px]">

              <Introduce></Introduce>
            </div>
            {/* 2 */}
            <div id="about" className="  pt-[115px] xl:pt-[79px]">
              <About></About>
            </div>
            {/* 3 */}
            <div id="experience" className="pt-[91px]  xl:pt-[79px]">
              <Experience></Experience>
            </div>
            <div id="Education" className="xl:pt-[72px]  xl:mt-[119px] 2xl:mt-[0px] 2xl:pt-[79px] pt-[103px]">
              <Education></Education>
            </div>
            <div id="Education2" className="hidden xl:block xl:pt-[72px] 2xl:pt-[79px]">
              <Education></Education>
            </div>
            <div id="Contact" className=" pt-[200px] xl:pt-[70px]   xl:pb-[0] 2xl:pb-[0px] ">
              <Contact></Contact>
            </div>


          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
