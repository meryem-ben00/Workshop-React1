export default function ChatNavItem({ contact }) {
  const { fullName, message, status, image, id } = contact;

  const renderLastMessage = (
    <div className="flex items-center justify-between">
      <span className="text-gray-300 text-xs block mt-3 ">chat</span>
      <span className="text-xs block mt-3 ">00:31:00</span>
    </div>
  );

  const renderBadge = (
    <div
      className="h-3 w-3 rounded-full bg-blue-800 border-2 border-white absolute "
      style={{
        bottom: 0,
        left: "2rem",
      }}
    ></div>
  );

  const renderAvatar = (
    <div className="flex relative" style={{ width: "80%" }}>
      <img className="h-12 w-12 rounded-full " src={image} alt="" />

      {status === "active" && renderBadge}

      <div className="ms-5" style={{ width: "100%" }}>
        <h6 className="text-xs font-bold">{fullName}</h6>

        {renderLastMessage}
      </div>
    </div>
  );

  const renderCount = (
    <div className="h-5 w-5 rounded-full bg-gray-200 text-black flex items-center justify-center text-xs">
      1
    </div>
  );

  const renderPlay = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M8 5V19L19 12L8 5Z" fill="black" />
    </svg>
  );

  return (
    <>
      <div
        className={["bg-white rounded-md mt-5 p-3", id === 0 && "shadow-md"].join(
          " "
        )}
      >
        <div className="flex items-center justify-between">
          {renderAvatar}

          {message === "seen" ? renderPlay : renderCount}
        </div>
      </div>
    </>
  );
}
