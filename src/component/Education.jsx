import React, { useContext } from 'react';
import { LuGraduationCap } from "react-icons/lu";
import Badge from './Badge';
import { CssContext } from '../provider/CssProvider';

const Education = () => {
    const { primaryColor } = useContext(CssContext)

    return (
        <div className="xl:h-screen flex flex-col items-center xl:items-start ">
            <div className="">
                <Badge title={'Education'}>
                    <LuGraduationCap />
                </Badge>
            </div>
            <div className="mt-[142px] ">
              <div className="flex flex-col xl:flex-row items-center xl:gap-4">
              <h1 className="text-[24px] xl:text-left text-center xl:text-[60px] font-light  leading-none">Educational<br className='xl:hidden block'></br> </h1>
                <p className={`text-[${primaryColor}] xl:text-white xl:text-[60px] text-[32px] font-medium xl:font-light `}>Qualification</p>
              </div>




                <div className="pt-[79px] relative">
                    <div className="absolute left-1 w-0.5 mt-1 h-[404px] bg-white"></div>


                    <div className={`absolute  w-3 h-3 rounded-full bg-[${primaryColor}]`}></div>
                    <div className={`absolute top-[192px] xl:top-[175px] w-3 h-3 rounded-full bg-[${primaryColor}]`}></div>
                    <div className={`absolute top-[302px] xl:top-[266px] w-3 h-3 rounded-full bg-[${primaryColor}]`}></div>
                    <div className={`absolute top-[413px] xl:top-[357px] w-3 h-3 rounded-full bg-[${primaryColor}]`}></div>


                    <div className="ps-[70px] xl:ps-[84px]">
                        
                        <div className="flex flex-col gap-[23px]">
                        
                            <div className="">
                            <p className='text-[12px] text-[#636363] mb-[6px]'>2019-2021</p>
                                <p className='text-md xl:text-xl'>Higher Secondery Certificate (H.S.C)</p>
                                <p className={`text-[10px] xl:text-[12px] text-[${primaryColor}]`}>Baneshwar Govt. College, Rajshahi</p>
                            </div>
                            <div className="">
                            <p className='text-[12px] text-[#636363] mb-[6px]'>2017-2019</p>
                                <p className='text-md xl:text-xl'>Higher School Certificate (S.S.C)</p>
                                <p className={`text-[10px] xl:text-[12px] text-[${primaryColor}]`}>Puthia P,N Govt. High School, Puthia</p>
                            </div>
                            <div className="">
                            <p className='text-[12px] text-[#636363] mb-[6px]'>2014-2017</p>
                                <p className='text-md xl:text-xl'>Junior School Certificate (J.S.C)</p>
                                <p className={`text-[10px] xl:text-[12px] text-[${primaryColor}]`}>Puthia P,N High School, Puthia</p>
                            </div>
                            <div className="">
                            <p className='text-[12px] text-[#636363] mb-[6px]'>2009-2013</p>
                                <p className='text-md xl:text-xl'>Primary School Certificate (P.S.C)</p>
                                <p className={`text-[10px] xl:text-[12px] text-[${primaryColor}]`}>Kanthalbaria Govt. Primary School, Puthia</p>
                            </div>
                            

                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Education;