import React, { useContext } from 'react';
import Badge from './Badge';
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { CssContext } from '../provider/CssProvider';

const Experience = () => {
  const { primaryColor } = useContext(CssContext)

  return (
    <div id="experience" className=" xl:h-svh flex flex-col items-center xl:items-start">
      <div className="">
        <Badge title={'experience'}>
          <PiSuitcaseSimpleBold />
        </Badge>
      </div>
      <div className="mt-[54px] xl:mt-[100px] ">
        <h1 className="xl:text-[40px] text-[24px] xl:text-left text-center  font-light  leading-none">The Design Experience of <br></br></h1>
        <p className={`text-[24px] xl:text-[40px] font-normal 
                text-[${primaryColor}] xl:text-left text-center   `}>Leon Sarker</p>
        <div className=" pt-[67px] xl:pt-[79px] relative">
          <div className="absolute left-1 w-0.5 mt-1 xl:h-[535px] h-[439px] bg-white"></div>
          <div className={`absolute  w-3 h-3 rounded-full bg-[${primaryColor}]`}></div>
          <div className={`absolute top-[259px] xl:top-[277px] w-3 h-3 rounded-full bg-[${primaryColor}]`}></div>
          <div className="ps-[84px]">
            <p className='text-[12px] text-[#636363]'>2021-2023</p>
            <div className="pt-[27px] flex flex-col gap-[23px]">
              <div className="">
                <p className='text-md xl:text-xl'>Brand Designer</p>
                <p className={`text-[10px] xl:text-[12px] text-[${primaryColor}]`}>Youth Mind</p>
              </div>
              <div className="">
                <p className='text-md xl:text-xl'>Lead Designer</p>
                <p className={`text-[10px] xl:text-[12px] text-[${primaryColor}]`}>Chorcha.net</p>
              </div>

            </div>


          </div>
          <div className="ps-[84px] pt-[42px] ">
            <p className='text-[12px] text-[#636363]'>2019-2021</p>
            <div className="pt-[27px] flex flex-col gap-[23px]">
              <div className="">
                <p className='text-md xl:text-xl'>Dept. Head, Creatives</p>
                <p className={`text-[10px] xl:text-[12px] text-[${primaryColor}]`}>Find to Learn</p>
              </div>
              <div className="">
                <p className='text-md xl:text-xl'>Creative Executive</p>
                <p className={`text-[10px] xl:text-[12px] text-[${primaryColor}]`}>Seed to BIG</p>
              </div>
              <div className="">
                <p className='text-md xl:text-xl'>Creative Visualizer</p>
                <p className={`text-[10px] xl:text-[12px] text-[${primaryColor}]`}>Bangladesh Art Nation</p>
              </div>
              <div className="">
                <p className='text-md xl:text-xl'>Creative Designer</p>
                <p className={`text-[10px] xl:text-[12px] text-[${primaryColor}]`}>Mind Splash Magazine</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;