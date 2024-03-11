import React, { useContext } from 'react';
import { CssContext } from '../provider/CssProvider';
import { FaRegEnvelope } from "react-icons/fa6";
import Badge from './Badge';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { primaryColor } = useContext(CssContext)
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()



    const onSubmit = (data) => {

console.log(data)
if(data){
    reset()
}
    }

    return (
        <div className="">
            <div id="" className="xl:h-[90vh]  flex flex-col items-center xl:items-start " >
            <div className="">
                <Badge title={'Contact'}>
                    <FaRegEnvelope />
                </Badge>
            </div>
            <div className="pt-[58px] xl:pt-[0px] xl:mt-[170px] tracking-widest">
                <div className="flex flex-col xl:flex-row items-center xl:gap-1 2xl:gap-4">
                <h1 className=" text-[24px] xl:text-left text-center xl:text-[52px] 2xl:text-[64px] font-light  leading-none">Let&#180;s Talk About <br className='xl:hidden block'></br></h1>
                <p className={`text-[24px] xl:text-left text-center xl:text-[52px] 2xl:text-[64px] font-medium text-[${primaryColor}]`}>Projects</p>
                </div>


                <div className="pt-[76px] xl:pt-[105px] w-full xl:w-[530px] 2xl:w-[700px] ">

                    <form onSubmit={handleSubmit(onSubmit)} className="">

                        <div className="flex flex-col xl:flex-row gap-[45px] xl:gap-[71px]">
                            <input
                            required
                            
                                placeholder='Your Name'
                                type="text"
                                id="name"
                                {...register('name')}
                                className="  py-1.5 w-full border border-t-0 border-e-0 border-s-0 border-[#5C5C5C] placeholder:text-[#5C5C5C]  focus:outline-none bg-transparent focus:text-white text-center xl:text-left"
                            />

                            <input
                            required
                                placeholder='E-mail'
                                type="email"
                                id="email"
                                {...register('email')}
                                className="  py-1.5 w-full border border-t-0 border-e-0 border-s-0 border-[#5C5C5C] placeholder:text-[#5C5C5C]  focus:outline-none bg-transparent focus:text-white text-center xl:text-left"
                            />
                            <input
                            required

                                placeholder='Subject'
                                type="text"
                                id="subject"
                                {...register('subject')}
                                className="  py-1.5 w-full border border-t-0 border-e-0 border-s-0 border-[#5C5C5C] placeholder:text-[#5C5C5C]  focus:outline-none bg-transparent focus:text-white text-center xl:text-left"
                            />
                        </div>
                        <input
                            required

                            placeholder='Message'
                            type="text"
                            id="message"
                            {...register('message')}
                            className="pt-[45px] xl:pt-[84px]  py-1.5 w-full border border-t-0 border-e-0 border-s-0 border-[#5C5C5C] placeholder:text-[#5C5C5C]  focus:outline-none bg-transparent focus:text-white text-center xl:text-left"
                        />


                        <div className="pt-20 pb-[154px] xl:pb-[0px] xl:pt-24 text-center">
                        <button className={`uppercase btn btn-outline my-5 px-20 rounded-full text-[17px]  border-[${primaryColor}] text-white font-medium hover:bg-gradient-to-r  from-[#4600A0] to-[#9747FF]`}>Submit</button>
                        </div>
                        
                    </form>

                </div>




            </div>

        </div>
        </div>
    );
};

export default Contact;