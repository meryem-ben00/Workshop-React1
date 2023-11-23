import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavItem({ item, active }) {
  const { title, path } = item;

  const activeClass = active ? "active" : "";

  return (
    <>
      <Link
        to={path}
        className={[
          " text-white  px-3 py-2 text-sm font-medium flex justify-center items-center navItem",
          activeClass,
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
