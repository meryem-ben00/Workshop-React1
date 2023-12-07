import ChatMessageItem from "./chat-messge-item";

export default function ChatMessageList() {
  const renderInfo = (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          className="h-12 w-12 rounded-full "
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="ms-5">
          <h6 className="text-xs font-bold">Saber Abdellah</h6>
          <span className="text-gray-300 text-xs block mt-3 ">chat</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <img src="/assets/icons/phone.svg" className="ms-14" alt="" />
        <img src="/assets/icons/videocam.svg" className="ms-14" alt="" />
        <img src="/assets/icons/info.svg" className="ms-14" alt="" />
      </div>
    </div>
  );

  const renderMessages = <ChatMessageItem />;

  return (
    <>
      {renderInfo}
      {renderMessages}

     
    </>
  );
}
