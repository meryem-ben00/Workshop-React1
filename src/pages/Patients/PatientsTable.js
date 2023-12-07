import React, { useState } from 'react'
import path_94_2x from "../../assets/images/patient/path-94-1@2x.png";
import pic1 from "../../assets/images/patient/boy-1@2x.png";
import pic2 from "../../assets/images/patient/girl-16-1@2x.png";
import pic3 from "../../assets/images/patient/boy-22-1@2x.png";
import pic4 from "../../assets/images/patient/girl-12-1@2x.png";
import Patient from './Patient';


const PatientsTable = () => {
    const [data,setdata]=useState([
        {
            id:87364523,
            name:"Brooklyn Simmons",
            illness:"Depression",
            Email:"brooklyns@mail.com",
            phone:"(603) 555-0123",
            date:"21/12/2022",
            time:"0:40 PM",
            status:'fair',
            picture:pic1
        },
        {
            id:93874563,
            name:"Kris Watson",
            illness:"ADHD",
            Email:"kristinw@mail.com",
            phone:"(219) 555-0114",
            date:"23/12/2022",
            time:"10:40 PM",
            status:'Critical',
            picture:pic2
        },
        {
            id:23847569,
            name:"Jacob Watson",
            illness:"Depression",
            Email:"brooklyns@mail.com",
            phone:"(603) 555-0123",
            date:"21/12/2022",
            time:"0:40 PM",
            status:'fair',
            picture:pic3
        },
        {
            id:39485632,
            name:"Cody Fisher",
            illness:"Depression",
            Email:"brooklyns@mail.com",
            phone:"(603) 555-0123",
            date:"21/12/2022",
            time:"0:40 PM",
            status:'fair',
            picture:pic4
        },
        {
            id:93874563,
            name:"Brooklyn Simmons",
            illness:"Depression",
            Email:"brooklyns@mail.com",
            phone:"(603) 555-0123",
            date:"21/12/2022",
            time:"0:40 PM",
            status:'fair',
            picture:pic1
        },
        {
            id:23847569,
            name:"kristin watson",
            illness:"Depression",
            Email:"brooklyns@mail.com",
            phone:"(603) 555-0123",
            date:"21/12/2022",
            time:"0:40 PM",
            status:'Critical',
            picture:pic2
        },
        {
            id:87364523,
            name:"Jacob jones",
            illness:"Depression",
            Email:"brooklyns@mail.com",
            phone:"(603) 555-0123",
            date:"21/12/2022",
            time:"0:40 PM",
            status:'fair',
            picture:pic3
        }
        
    ])
  return (
    <div className="mt-[24px]">
    <table className="w-full text-lg text-left">
      <thead className="text-xs bg-gray-200">       
           <tr>
                <th scope="col" className="px-[20px] py-[12px] text-[#b5b5c3] font-semibold rounded-l-md tracking-wide">
                    Name
                </th>
                <th scope="col" className="px-[20px] py-[12px] text-[#b5b5c3] font-semibold tracking-wide">
                    ID
                </th>
                <th scope="col" className="px-[20px] py-[12px]  text-[#b5b5c3] font-semibold tracking-wide">
                    Email
                </th>
                <th scope="col" className="px-[20px] py-[12px]  text-[#b5b5c3] font-semibold tracking-wide">
                    Phone number
                </th>
                <th scope="col" className="px-[20px] py-[12px] text-[#b5b5c3] font-semibold tracking-wide">
                    Date added
                </th>
                <th scope="col" className="px-[20px] py-[12px] text-[#b5b5c3] font-semibold rounded-r-md tracking-wide">
                    STATUS
                </th>
            </tr>
        </thead>
        <tbody className="space-y-4">
            {data.map(e=><Patient data={e}/>)}
        

        </tbody>

   </table> 
   </div>
  )
}

export default PatientsTable