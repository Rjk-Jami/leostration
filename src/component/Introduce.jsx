import React from 'react';
import { LuHome } from 'react-icons/lu';
import Badge from './Badge';

const Introduce = () => {
    return (
        <div id="" className=" xl:h-screen ">
              <div className="hidden xl:block">
                <Badge title={'INTRODUCE'}>
                  <LuHome />
                </Badge>
              </div>
              <div className=" xl:mt-[140px] space-y-3">
                <p className="text-[10px]  xl:text-left text-center xl:text-[16px]">Since 2019</p>
                <h1 className= " text-4xl xl:text-left text-center  xl:text-8xl font-semibold ">Hey! Nice to<br />See You.</h1>
                <p className="xl:text-xl xl:text-left text-center  text-[8px]">I'm Leon Sarker, a passionate <span>GRAPHICS DESIGNER</span> from<br></br>Rajshahi, Bangladesh.</p>
                <div className="hidden xl:flex gap-[160px] ">
                  <div className=" flex flex-col gap-[33px]">
                    <h1 className="text-6xl text-[#9747FF]">04+</h1>
                    <p>Years of<br />Experience</p>
                  </div>
                  <div className=" flex flex-col gap-[33px]">
                    <h1 className="text-6xl text-[#9747FF]">52+</h1>
                    <p>Project<br />Completed</p>
                  </div>
                </div>
              </div>
              <div className="xl:hidden">
                <p className=' text-[6px] mt-11 text-center'>© 2023 Leon S. All Rights Reserved</p>
              </div>
            </div>
    );
};

export default Introduce;