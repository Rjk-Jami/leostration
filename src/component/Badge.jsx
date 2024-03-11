import React from 'react';

const Badge = ({children, title}) => {
    return (
        <div className="py-[7px] px-[17px] text-[#9747FF] w-[131px] h-[38px] rounded-[36px] border border-[#E3F2FD] flex justify-center   items-center gap-[7px]">
              <div className="hidden xl:block">
               {children}
              </div>
              <p className="uppercase">{title}</p>
            </div>
    );
};

export default Badge;