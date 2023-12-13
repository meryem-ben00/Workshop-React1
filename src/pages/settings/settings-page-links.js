import { NavLink } from "react-router-dom";
import "./setting-page-style.css";

export default function SettingsPageLinks(){
  return( 
    <div className=" settingsPageLinksCom 
      relative sm:me-20 lg:me-64 mb-7 pb-1 flex gap-2 items-stretch
    ">

      <NavLink 
        to="/dashboard/settings/account-setting" 
        className="
          settingPageLink px-2 relative transition duration-500"
      > Account Setting </NavLink>

      <NavLink
        to="/dashboard/settings/password" 
        className="
          settingPageLink px-2 relative transition duration-500"
      > Password </NavLink>

      <NavLink
        to="/dashboard/settings/email" 
        className="
          settingPageLink px-2 relative transition duration-500"
      > Email </NavLink>

    </div>
  )
}

// TODO: Handle the long URL Here and in the user-page
