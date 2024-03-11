import React, { useContext } from 'react';
import Badge from './Badge';
import { LuHome } from 'react-icons/lu';
import { LuUser2 } from "react-icons/lu";


import { CssContext } from '../provider/CssProvider';
const About = () => {
  const { primaryColor} = useContext(CssContext)

    return (
        <div id="" className=" xl:h-screen flex flex-col items-center xl:items-start ">
              <div className="">
                <Badge title={'about'}>
                  <LuUser2 />
                </Badge>
              </div>
              <div className="pt-[36px] xl:pt-[142px] ">
                
                <h1 className="text-[24px] xl:text-left text-center xl:text-[64px] font-light  leading-none ">The Creative Journey of<br></br></h1>
                <p className={`text-[24px] xl:text-[64px] font-normal 
                text-[${primaryColor}] xl:text-left text-center   `}>Leon Sarker</p>
                <div className="pt-[36px] xl:pt-[85px] space-y-3 font-extralight xl:text-[14px] text-[10px]  xl:text-left text-center text-gray-300 px-[36px] xl:px-[0px]" >
                
                <p>Leon Sarker is the founder of Leostration, a graphic design and illustration studio based in Rajshahi, <br className='hidden xl:block' ></br>Bangladesh.</p>
                  <p>He is a self-taught graphic designer and illustrator known for his creative and bold designs.</p>
                  <p>Since founding Leostration in 2019, Leon has been instrumental in creating high-quality, custom designs for<br></br>a diverse range of clients, including businesses, individuals, and non-profit organizations.</p>
                  <br className='hidden xl:block'></br>
                  <br className='hidden xl:block'></br>
                  <br className='hidden xl:block'></br>
                  <br className='hidden xl:block'></br>
                  
                  <p className=''>His work is characterized by the use of bold colors, geometric shapes, and typography, and it often reflects<br className='hidden xl:block'></br>the unique needs of <br className='xl:hidden block'></br>each client.</p>
                </div>
              </div>
            </div>
    );
};

export default About;