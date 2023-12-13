import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export default function NavItem({ item, active }) {
  const { type } = useParams();
  const { title, path } = item;

  const isRouteActive = () => {
    if(title == "Users" && type == "administrations" || active) return "active";
    return "";
  }

  return (
    <>
      <Link
        to={path}
        className={[
          "navBarItem text-white px-3 py-2 text-sm font-medium flex justify-center items-center",
          isRouteActive()
        ].join(" ")}
        aria-current="page"
      >
        {title}
      </Link>
    </>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.bool,
};
