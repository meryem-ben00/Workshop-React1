import NavList from "./nav-list";
import PropTypes from "prop-types";

export default function NavSection({ data }) {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {data.map((group, index) => (
          <Group key={index} items={group.items} />
        ))}
      </div>
    </div>
  );
}

export function Group({ items }) {
  const renderContent = items.map((list, index) => (
    <NavList key={index} data={list} />
  ));

  return renderContent;
}

NavSection.propTypes = {
  data: PropTypes.array,
};
