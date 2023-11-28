import React, { useState } from 'react'
import Patient from './Patient'



const PatientList = () => {
  return (
    <div className="flex flex-col items-center w-[33%] h-[467px] bg-white rounded-[15px] gap-y-[20px] pt-[30px] pr-[20px] pl-[20px]">
      <div className="w-full flex self-srart justify-between">
        <h2 className="text-[22px] font-medium">
          Patient List
        </h2>
        <select id="timePeriod" className="border-none focus:outline-none text-gray-500 ">
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
        <option value="thisWeek">This Week</option>
        <option value="thisMonth">This Month</option>
        <option value="thisYear">This Year</option>
      </select>
      </div>
      <div className="w-full flex flex-col  gap-y-[20px]">
        <Patient Tracking ={"Weekly Visit"} name={"Stacy Mitchell"} time={'9 : 15 AM'}/>
        <Patient Tracking ={"Routine Checkup"} name={"Amy Dunham"} time={'9 : 30 AM'}/>
        <Patient Tracking ={"Report"} name={"Demi Joan"} time={'9 : 50 AM'}/>
        <Patient Tracking ={"Weekly Visit"} name={"Susan Myers"} time={'10 : 15 AM'}/>
      </div>
      <a href="" className='underline decoration-solid font-medium pt-[20px]'>View more</a> 
    </div>
  )
}

export default PatientList