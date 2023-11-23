import { useNavData } from "../../dashboard/config-navigation";
import NavSection from "./section/nav-section";
import "./styles.css";

export default function NavDashboard() {
  const data = useNavData();

  
  return (
    <nav className="navbar ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex  items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            {/* Logo */}

            {/* Items */}
            <NavSection data={data} />
          </div>
        </div>
      </div>
    </nav>
  );
}
