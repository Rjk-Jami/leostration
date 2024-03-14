import React, { useState } from 'react';
import { LuHome } from 'react-icons/lu';
import Badge from './Badge';
import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";

const Introduce = () => {
  const [number, setNumber] = useState(4);
  const [size, setSize] = useState(60);
  const [duration, setDuration] = useState(400);
  return (
    <div id="" className=" xl:h-screen ">
      <div className="hidden xl:block">
        <Badge title={'INTRODUCE'}>
          <LuHome />
        </Badge>
      </div>
      <div className=" 2xl:mt-[130px] xl:mt-[100px] space-y-4  xl:space-y-3">
        <p className="text-[14px]  xl:text-left text-center xl:text-[16px] xl:ms-1 ">Since 2019</p>
        <h1 className=" text-5xl xl:text-left text-center xl:text-7xl 2xl:text-8xl font-semibold ">Hey! Nice to</h1>
        <h1 className='2xl:pt-1 text-5xl xl:text-left text-center  xl:text-7xl 2xl:text-8xl font-semibold '>See You.</h1>
        <p className="xl:text-xl xl:text-left text-center  text-xs">I'm Leon Sarker, a passionate <span>GRAPHICS DESIGNER</span> from<br></br>Rajshahi, Bangladesh.</p>
        <div className="hidden xl:flex gap-[160px] 2xl:pt-4 xl:pt-1">
          <div className=" flex flex-col 2xl:gap-[33px] xl:gap-[25px]">
            
            <h1 className="text-6xl text-[#9747FF]">0<AnimatedNumber
              value={number}
              
              size={size}
              duration={duration}
              className=' text-[#9747FF]'
            />+</h1>
            <p>Years of<br />Experience</p>
          </div>
          <div className=" flex flex-col 2xl:gap-[33px] xl:gap-[25px]">
            <h1 className="text-6xl text-[#9747FF]"><AnimatedNumber
              value={52}
              
              size={size}
              duration={duration}
              className=' text-[#9747FF]'
            />+</h1>
            <p>Project<br />Completed</p>
          </div>
        </div>
      </div>
      <div className="xl:hidden">
        <p className=' text-[8px] mt-6 text-center'>© 2024 Leon S. All Rights Reserved</p>
      </div>
      
    </div>
  );
};

export default Introduce;