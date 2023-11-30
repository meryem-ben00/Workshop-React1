import React from 'react'
import daily from "../../../assets/images/daily.png";

const DAILYREAD = () => {
  return (
    <div className="w-[27%] bg-white gap-y-[10px] rounded-[15px] p-[15px] flex flex-col">
      <h2 className="text-[11px] text-[#000]/40 flex items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
        <circle cx="4.36721" cy="3.97146" r="3.68899" fill="#BFEBBF"/>
</svg>
        DAILY READ
    </h2>
      <p className="text-[16px] font-semibold text-[#000]">Equitable medical education with efforts toward real change</p>
      <img className="w-full" src={daily} alt="" />
    </div>
  )
}

export default DAILYREAD