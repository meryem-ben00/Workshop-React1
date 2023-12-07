import { _CONTACT_DATA } from "../../_mock/contacts";
import ChatNavItem from "./chat-nav-item";

export default function ChatNav() {
  const renderSearchInput = (
    <div className="flex items-center  mt-5">
      <div className="relative" style={{ width: "70%" }}>
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
          >
            <path
              d="M16.8947 14H16.0631L15.7684 13.73C16.8 12.59 17.421 11.11 17.421 9.5C17.421 5.91 14.3579 3 10.5789 3C6.79997 3 3.73682 5.91 3.73682 9.5C3.73682 13.09 6.79997 16 10.5789 16C12.2737 16 13.8316 15.41 15.0316 14.43L15.3158 14.71V15.5L20.5789 20.49L22.1473 19L16.8947 14ZM10.5789 14C7.95787 14 5.84208 11.99 5.84208 9.5C5.84208 7.01 7.95787 5 10.5789 5C13.2 5 15.3158 7.01 15.3158 9.5C15.3158 11.99 13.2 14 10.5789 14Z"
              fill="#ADADAD"
            />
          </svg>
        </div>

        <input
          type="text"
          id="search"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  "
          placeholder="Search"
          required
        />
      </div>

      <button className="bg-white   text-black mx-4  rounded text-sm font-semibold uppercase">
        Chat +
      </button>
    </div>
  );

  const renderList = _CONTACT_DATA.map((contact, index) => (
    <ChatNavItem key={index} contact={contact} />
  ));

  return (
    <div className="bg-white rounded-md p-6">
      <h1>Chat</h1>

      {renderSearchInput}

      <div className="mt-8">{renderList}</div>
    </div>
  );
}
