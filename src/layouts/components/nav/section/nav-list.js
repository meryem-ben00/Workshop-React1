import { useActiveLink } from "../../../../hooks/use-active-link";
import NavItem from "./nav-item";

export default function NavList({ data }) {
    
  const active = useActiveLink(data.path);

  return <NavItem item={data} active={active} />;
}
