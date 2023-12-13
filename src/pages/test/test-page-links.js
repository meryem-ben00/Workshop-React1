import { NavLink } from "react-router-dom";
import "./test-page.css";

export default function TestPageLinks(){
  return( 
    <div className=" testPageLinksCom 
      relative sm:me-20 lg:me-64 mb-7 pb-1 flex gap-2 items-stretch
    ">

      <NavLink 
        to="/dashboard/test/ADHD" 
        className="
          testPageLink px-2 relative transition duration-500"
      > ADHD </NavLink>

      <NavLink
        //TODO: No correspondent pages yet
        to="Nowhere"
        className="
          testPageLink px-2 relative transition duration-500"
      > Depression </NavLink>

      <NavLink
        //TODO: No correspondent pages yet
        to="Nowhere"
        className="
          testPageLink px-2 relative transition duration-500"
      > Anxiety </NavLink>

      <NavLink
        //TODO: No correspondent pages yet
        to="Nowhere"  
        className="
          testPageLink px-2 relative transition duration-500"
      > Bipolar Disorder </NavLink>

    </div>
  )
}

// TODO: Handle the long URL Here and in the user-page