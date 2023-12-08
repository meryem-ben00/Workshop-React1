import React from 'react'

const Patient = ({name,Tracking,time}) => {
    const fullname=name.split(' ');
    const nameSh=fullname[0].charAt(0)+fullname[1].charAt(0);
    let color;
    let bgcolor;
    switch (Tracking) {
        case 'Weekly Visit':
            color = "#F62088";
            bgcolor="rgb(246,32,136,0.15)"
          break;
        case 'Routine Checkup':
            color = "#0000FF";
            bgcolor="rgb(0,0,255,0.15)"
          break;
        case 'Report':
            color = "#128983";
            bgcolor="rgb(18,137,131,0.15)"
          break;
        }
  return (
    <div className=" flex justify-between items-center">
      <div className="flex items-center gap-x-[20px]">
        <div className={`w-[60px] h-[60px] rounded-full border-[1px] flex justify-center items-center`}
        style={{borderColor: color }}>
          <div className={`w-[50px] h-[50px] rounded-full flex justify-center items-center text-[18.82px]`}
          style={{backgroundColor: bgcolor}}>
            {nameSh}
          </div>
        </div>
        <div>
          <p className="text-[20px] font-medium">{name}</p>
          <span className={`text-[14px] font-medium`} style={{color: color }}>
            {Tracking}
          </span>
        </div>
      </div>
      <div className={`px-[15px] py-[5px] rounded-lg/10 rounded-lg`} style={{backgroundColor: bgcolor}}>
        <p style={{color: color }}>{time}</p>
      </div>
    </div>
  )
}

export default Patient