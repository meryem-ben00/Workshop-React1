import { Outlet } from "react-router-dom";
import TestPageLinks from "./test-page-links";

export default function TestPage(){
  return(
    <div className="
      testCom mt-10 sm:mr-5 lg:mr-20 mb-16 sm:ml-2 lg:ml-12 text-white
    ">
      <h2 className="text-3xl font-semibold">Create test</h2>
      <div className="childrenPagesHolder pt-10 sm:ps-10 lg:ps-20"> 
        <TestPageLinks />
        <Outlet /> 
      </div>
    </div>
  )
}