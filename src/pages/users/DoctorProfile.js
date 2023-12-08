import { Link, Route, Router } from "react-router-dom"
import CalendraBox from "../../layouts/components/docProfile/CalendraBox"
import Consultation from "../../layouts/components/docProfile/Consultation"
import DAILYREAD from "../../layouts/components/docProfile/DAILYREAD"
import PatientList from "../../layouts/components/docProfile/PatientList"
import Statistic from "../../layouts/components/docProfile/Statistic"




const DoctorProfile = () => {
  return (
    
      <main className="flex justify-center px-[40px]">
        
      <div className="">
        <Link to={"/dashboard/users/doctors"}>
      <a href="" className="flex justify-end py-[20px] pr-[2%]">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none">
          <path d="M0.939338 10.9393C0.353551 11.5251 0.353552 12.4749 0.939338 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807614 11.0711 0.807614 10.4853 1.3934L0.939338 10.9393ZM32 10.5L2 10.5L2 13.5L32 13.5L32 10.5Z" fill="#FAFAFA"/>
        </svg></a>  </Link>
          <div className="flex space-x-[40px] self-start ">
            <Statistic />
            <PatientList/>
            <CalendraBox/>
          </div>
          
        <div className="flex space-x-[40px]  mt-[20px]">
          <Consultation/>
          <DAILYREAD/>
        </div>
      </div>
      </main>

  )
}

export default DoctorProfile