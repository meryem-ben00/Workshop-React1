import { Helmet } from "react-helmet-async";
import ChatView from "../../sections/chat/views/chat-view";

export default function ChatPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <ChatView />
    </>
  );
}
