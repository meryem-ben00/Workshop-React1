import { useNavData } from "../../dashboard/config-navigation";
import AvatarProfile from "../avatar-profile";
import NavSection from "./section/nav-section";
import "./styles.css";
import logo from "../../../assets/images/logo.png";

export default function NavDashboard() {
  const data = useNavData();

  return (
    <nav className="navbar ">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex  items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} alt="" />
            </div>
            {/* Logo */}

            {/* Items */}
            <NavSection data={data} />
          </div>

          <AvatarProfile />
        </div>
      </div>
    </nav>
  );
}
