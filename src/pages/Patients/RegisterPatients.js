import React from "react";
import { Link } from "react-router-dom";

const RegisterPatients = () => {
  return (
    <div className="w-[70%] mx-auto my-[30px] text-white">
      <Link to={"/Patients"}>
      <a href="" className="flex justify-end py-[10px] pr-[2%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none">
          <path
            d="M0.939338 10.9393C0.353551 11.5251 0.353552 12.4749 0.939338 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807614 11.0711 0.807614 10.4853 1.3934L0.939338 10.9393ZM32 10.5L2 10.5L2 13.5L32 13.5L32 10.5Z"
            fill="#FAFAFA"
          />
        </svg>
      </a></Link>
      <div className="flex justify-between ">
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold text-white">
            OP - Register a patient
          </h1>
        </div>
        <div className="mt-12 text-white">
          <h2>ID : #123</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-x-10">
        <div className="  w-full mb-6  ">
          <label for="Name" className="block  text-[20px] font-medium  text-white">
            Name
          </label>
          <input className="w-full bg-[#D9D9D9] text-gray-900 mt-2 py-[12px] px-[27px] rounded-3xl focus:outline-none focus:shadow-outline" type="text"/>
        </div>
        <div className="  w-full mb-6  ">
          <label
            for="Date"
            className="block  text-[20px] font-medium  text-white"
          >
            Date
          </label>
          <input
            className="w-full bg-[#D9D9D9] text-gray-900 mt-2 py-[12px] px-[27px] rounded-3xl focus:outline-none focus:shadow-outline"
            type="date"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-6">
        <div className="  w-full mb-6  ">
          <label
            for="Name"
            className="block  text-[20px] font-medium  text-white"
          >
            Age
          </label>
          <input
            className="w-full bg-[#D9D9D9] text-gray-900 mt-2 py-[12px] px-[27px] rounded-3xl focus:outline-none focus:shadow-outline [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number" max="150" min="0"
          />
        </div>
        <div className="justify-center items-center w-full mb-6   border-x border-solid border-white px-[25px]">
          <label
            for="Gender"
            className="block  text-[20px] font-medium items-center justify-center  text-white"
          >
            Gender
          </label>
          <div className="flex  items-center justify-center py-[12px] mt-2 justify-between">
            <div className="flex items-center justify-center">
              <label
                for="inline-radio"
                className="text-sm font-medium text-white"
              >
                Male
              </label>
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio- "
                className="w-4 h-4 ml-2 text-blue-600 bg-[#D9D9D9] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="flex items-center">
              <label
                for="inline-2-radio"
                className=" text-sm font-medium text-white"
              >
                Female
              </label>
              <input
                id="inline-2-radio"
                type="radio"
                value=""
                name="inline-radio- "
                className="w-4 h-4 ml-2 text-blue-600 bg-[#D9D9D9] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="flex items-center">
              <label
                for="inline-3-radio"
                className=" text-sm font-medium text-white"
              >
                Author
              </label>
              <input
                id="inline-3-radio"
                type="radio"
                value=""
                name="inline-radio- "
                className="w-4 h-4 ml-2 text-blue-600 bg-[#D9D9D9] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
        <div className="  w-full mb-6  ">
          <label
            for="Date"
            className="block  text-[20px] font-medium  text-white"
          >
            Blood  
          </label>
          <input
            className="w-full bg-[#D9D9D9] text-gray-900 mt-2 py-[12px] px-[27px] rounded-3xl focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          for="default-input"
          className="block  text-[20px] font-medium  text-white"
        >
          House Address
        </label>
        <input
          type="text"
          id="default-input"
          placeholder="name, house, city, ...."
          className="w-full bg-[#D9D9D9] text-gray-900 mt-2 py-[12px] px-[27px] rounded-3xl focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-x-10">
        <div className="  w-full mb-6  ">
          <label
            for="Name"
            className="block  text-[20px] font-medium  text-white"
          >
            Phone
          </label>
          <input
            className="w-full bg-[#D9D9D9] text-gray-900 mt-2 py-[12px] px-[27px] rounded-3xl focus:outline-none focus:shadow-outline [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
          />
        </div>
        <div className="  w-full mb-6  ">
          <label
            for="Date"
            className="block  text-[20px] font-medium  text-white"
          >
            Date or Birth
          </label>
          <input
            className="w-full bg-[#D9D9D9] text-gray-900 mt-2 py-[12px] px-[27px] rounded-3xl focus:outline-none focus:shadow-outline"
            type="date" 
          />
        </div>
        <div className="w-full">
          <label
            for="Date"
            className="block  text-[20px] font-medium  text-white"
          >
            Department
          </label>
          <input
            className="w-full bg-[#D9D9D9] text-gray-900 mt-2 py-[12px] px-[27px] rounded-3xl focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full mt-auto">
          <button
            type="button"
            className="w-full text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-[20px] px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPatients;
