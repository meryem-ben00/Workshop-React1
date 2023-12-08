import React from 'react'
import first from "../../assets/images/patient/icon---pagination---first-1@2x.png";
import prev from "../../assets/images/patient/icon---pagination---prev-1@2x.png";
import next from "../../assets/images/patient/icon---pagination---next-1@2x.png";
import last from "../../assets/images/patient/icon---pagination---last-1@2x.png";
const Patientspages = () => {
  return (
    <div className="flex justify-center space-x-2  text-black  text-[16px] h-[40px] text-bold mt-[40px]">
      <button className="bg-white rounded-[10px]">
          <img alt="Icon pagination"  className='px-[10px]'
              src= {first} />
      </button>
      <button className="bg-white rounded-[10px]">
        <img className="px-[10px]" alt="Icon pagination prev"
              src= {prev}/>
      </button>
      <button className="bg-white rounded-[10px] w-[40px] bg-[#2e8544] text-white">1</button>
      <button className="bg-white rounded-[10px] w-[40px]">2</button>
      <button className="bg-white rounded-[10px] w-[40px]">3</button>
      <button className="bg-white rounded-[10px] w-[40px]">...</button>
      <button className="bg-white rounded-[10px] w-[40px]">10</button>
      <button className="bg-white rounded-[10px]">
          <img alt="Icon pagination"  className='px-[10px]'
              src= {next} />
      </button>
      <button className="bg-white rounded-[10px]">
        <img className="px-[10px]" alt="Icon pagination prev" 
              src= {last} />
      </button>
    </div>
  )
}

export default Patientspages