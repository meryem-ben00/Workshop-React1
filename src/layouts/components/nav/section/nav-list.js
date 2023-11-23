import { useActiveLink } from "../../../../hooks/use-active-link";
import NavItem from "./nav-item";
import PropTypes from "prop-types";

export default function NavList({ data }) {
  const active = useActiveLink(data.path);

  return <NavItem item={data} active={active} />;
}

NavList.propTypes = {
  data: PropTypes.object,
};
