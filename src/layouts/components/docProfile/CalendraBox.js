import React from 'react'
import DateCalendarValue from './DateCalendarValue'

const CalendraBox = () => {
  return (
    <div className="w-[27%] h-[467px] bg-white rounded-[15px] flex flex-col overflow-x-hidden"> 
      
        <div className="w-full flex self-srart justify-between p-[20px] pb-0">
        <h2 className="text-[22px] font-medium pt-[10px]">
          Calendar
        </h2>
          <img src="./arrowd.svg" alt="" />
        </div>
        
         <DateCalendarValue/>
        
     
      <div className="flex flex-col gap-y-[10px] p-[20px]">
        <div className="w-full flex self-srart justify-between items-center">
          <h2 className="text-[18px] font-semibold">
            Upcoming
          </h2>
          <a className="text-[11px] text-[#1A71FF]" href="">View all</a>
        </div>
        <div className="bg-[#F0F9FD] rounded-[15px] p-[10px] flex gap-x-[20px]">
          <div className="text-[white] font-semibold flex items-center justify-center w-[42px] h-[42px] rounded-full bg-gradient-to-tr from-[#57B4DE] via-[#58B6DD] to-[#3B29AB]">
            M
          </div>
          <div>
            <p className="text-[#23262F] font-semibold text-[14px]">Montly doctor’s meet</p>
            <span className="text-[#000]/60 text-[11px]">8 April, 2021   |   04:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendraBox