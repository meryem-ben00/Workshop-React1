import ChatMessageInput from "../chat-message-input";
import ChatMessageList from "../chat-message-list";
import ChatNav from "../chat-nav";

export default function ChatView() {
  const renderNav = <ChatNav />;

  const renderMessages = (
    <div className="bg-white flex flex-col  justify-between rounded-md p-6 col-span-2">
      <ChatMessageList />

      <ChatMessageInput />
    </div>
  );

  return (
    <>
      <div className="container my-5">
        <div className="flex justify-between">
          <h1 className="text-white text-2xl"> Chat</h1>

          <div className="grid grid-cols-3 gap-4">
            {renderNav}

            {renderMessages}
          </div>
        </div>
      </div>
    </>
  );
}
