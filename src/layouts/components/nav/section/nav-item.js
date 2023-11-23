import { Link } from "react-router-dom";

export default function NavItem({ item, active }) {
  const { title, path } = item;

  return (
    <>
      <Link
        to={path}
        className={
          active
            ? "active text-white rounded-md px-3 py-2 text-sm font-medium d-flex justify-center align-middle h-18"
            : " text-white rounded-md px-3 py-2 text-sm font-medium d-flex justify-center align-middle h-18"
        }
        aria-current="page"
      >
        {title}
      </Link>
    </>
  );
}
