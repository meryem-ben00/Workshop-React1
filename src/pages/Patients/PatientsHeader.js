import React from 'react'
import { Link } from 'react-router-dom'

const PatientsHeader = () => {
  return (
    <div className="flex items-center justify-between"> 
        <div>
          <h1 className="text-white text-xl text-white font-medium text-lg mb-3.5 ">List of Patients</h1>
          <h2 className="text-white font-medium text-[12px] ">345 available Patients</h2>
        </div>
    
        <Link to={"Register"}>
        <button className="border-box rounded-lg bg-[#5f8d4e] flex items-center justify-center px-[20px] py-[10px]">
            <div className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M7.49984 9.16667C5.65889 9.16667 4.1665 7.67428 4.1665 5.83333C4.1665 3.99238 5.65889 2.5 7.49984 2.5C9.34079 2.5 10.8332 3.99238 10.8332 5.83333C10.8332 7.67428 9.34079 9.16667 7.49984 9.16667ZM15.8332 9.16667C15.3729 9.16667 14.9998 8.79358 14.9998 8.33334V6.66667H13.3332C12.8729 6.66667 12.4998 6.29358 12.4998 5.83334C12.4998 5.3731 12.8729 5.00001 13.3332 5.00001H14.9998V3.33334C14.9998 2.8731 15.3729 2.50001 15.8332 2.50001C16.2934 2.50001 16.6665 2.8731 16.6665 3.33334V5.00001H18.3332C18.7934 5.00001 19.1665 5.3731 19.1665 5.83334C19.1665 6.29358 18.7934 6.66667 18.3332 6.66667H16.6665V8.33334C16.6665 8.79358 16.2934 9.16667 15.8332 9.16667Z" fill="white"/>
                <path d="M0.00054307 16.8328C0.323549 12.8556 3.55159 10.8335 7.48612 10.8335C11.476 10.8335 14.7541 12.7445 14.9983 16.8335C15.008 16.9964 14.9983 17.5002 14.3722 17.5002C11.2843 17.5002 6.6956 17.5002 0.606252 17.5002C0.39726 17.5002 -0.0170515 17.0495 0.00054307 16.8328Z" fill="white"/>
              </svg>
            </div>
            <p className="text-white  font-semibold text-[12px]">
                Register a patient
            </p>
        </button>
        </Link>

      </div>
  )
}

export default PatientsHeader