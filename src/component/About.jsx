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
                <div className="pt-[36px] xl:pt-[85px] space-y-5  font-extralight xl:text-[14px] text-[10px]  xl:text-left text-center text-gray-300 px-[81px] xl:px-[0px]" >
                
                <p>Leon Sarker is the founder of Leostration, a <br className='xl:hidden block' ></br>graphic design and illustration studio based in <br className='block' ></br>Rajshahi, Bangladesh.</p>
                  <p>He is a self-taught graphic designer and <br className='xl:hidden block' ></br>illustrator known for his creative and <br className='xl:hidden block' ></br>bold designs.</p>
                  <p>Since founding Leostration in 2019, Leon has <br className='xl:hidden block' ></br>been instrumental in creating high-quality, <br className='xl:hidden block' ></br>custom designs for<br className='hidden xl:block'></br>a diverse range of clients, <br className='xl:hidden block' ></br>including businesses, individuals, and <br className='xl:hidden block' ></br>non-profit organizations.</p>
                  <br className='hidden xl:block'></br>
                  <br className='hidden xl:block'></br>
                  <br className='hidden xl:block'></br>
                  <br className='hidden xl:block'></br>
                  
                  <p className=''>His work is characterized by the use of bold <br className='xl:hidden block' ></br>colors, geometric shapes, and typography, and <br className='xl:hidden block' ></br>it often reflects<br className='hidden xl:block'></br>the unique needs of <br className='xl:hidden block'></br>each client.</p>
                </div>
              </div>
            </div>
    );
};

export default About;