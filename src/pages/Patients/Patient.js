import React from 'react'

const Patient = ({data}) => {
  return (
    <tr>
        <td scope="row" className="px-1 py-4 font-medium text-gray-900   text-white">
            <div className="flex items-center">
            <div className="pt-1 pl-0.5 pb-0 left-0 w-12 h-12 bg-[#f3f6f9] rounded-md">
                <img
                    className="w-[45px]"
                    alt="Boy"
                    src={data.picture}
                />
            </div>
            <div className="ml-3">
                <div className="text-white font-medium  text-base">{data.name}</div>
                <div className="text-[#b5b5c3]  font-medium text-sm  mt-2">{data.illness}</div>
            </div>
            </div>
        </td>
        <td className="text-white  font-medium text-base px-[20px]">
        {data.id}
        </td>
        <td className="text-white  font-medium text-base px-[20px]">
        {data.Email}
        </td>
        <td className="text-white  font-medium text-base px-[20px]">
        {data.phone}
        </td>
        <td className="px-[20px]">
            <div className="text-white font-medium  text-base ">{data.date}</div>
            <div className="text-[#b5b5c3]  font-normal text-sm  pt-1">{data.time}</div>
        </td>
        <td>
        <div className="flex justify-between pl-[20px]">
            <button className={data.status=="fair"?" bg-[#f3fff3] rounded-[6px] py-[5px] w-[75px]":" bg-[#FFE2E5] rounded-[6px] py-[5px] w-[75px]"} >
            <p className="text-center text-[#5f8d4e]  font-lg text-[13px] ">
            {data.status}
            </p>
            </button>
            
            <div className="bg-[#fafafa] rounded-[6px] flex items-center justify-center w-[40px] mr-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect opacity="0.3" x="3.43585" y="10.8203" width="1.64102" height="7.38461" rx="0.820512" transform="rotate(-90 3.43585 10.8203)" fill="#181C32"/>
                <path d="M9.41975 14.3429C9.09932 14.6634 9.09932 15.1829 9.41975 15.5033C9.74018 15.8238 10.2597 15.8238 10.5801 15.5033L15.5032 10.5803C15.8138 10.2696 15.8247 9.76945 15.5279 9.44562L11.015 4.52254C10.7088 4.1885 10.1898 4.16593 9.85576 4.47214C9.52171 4.77835 9.49914 5.29738 9.80535 5.63143L13.7873 9.97539L9.41975 14.3429Z" fill="#181C32"/>
            </svg>
            </div>
        </div>
        </td>
    </tr>
  )
}

export default Patient