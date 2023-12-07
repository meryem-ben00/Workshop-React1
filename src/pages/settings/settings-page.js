import { Outlet } from "react-router-dom";
import SettingsPageLinks from "./settings-page-links";

export default function SettingsPage(){
  return(
    <div className="
      settingCom mt-10 sm:mr-5 lg:mr-20 mb-16 sm:ml-2 lg:ml-12 text-white
    ">
      <h2 className="text-3xl font-semibold">Settings</h2>
      <div className="childrenPagesHolder pt-10 sm:ps-10 lg:ps-20"> 
        <SettingsPageLinks />
        <Outlet /> 
      </div>
    </div>
  )
}