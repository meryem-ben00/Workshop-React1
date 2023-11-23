import { Link } from "react-router-dom";

export default function NavItem({ item, active }) {
  const { title, path } = item;

  return (
    <>
      <Link
        to={path}
        className={
          active
            ? "active text-white  px-3 py-2 text-sm font-medium flex justify-center items-center navItem"
            : " text-white px-3 py-2 text-sm font-medium flex justify-center items-center navItem"
        }
        aria-current="page"
      >
        {title}
      </Link>
    </>
  );
}
