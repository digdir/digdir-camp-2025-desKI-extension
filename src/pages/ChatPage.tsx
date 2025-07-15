import { ChatBubble } from "../components/ChatBubble";

function Chat() {
  return (
    <div>
      <h1>Welcome to the Chat</h1>
      <ChatBubble message="Hello, how can I help you?" sender="bot" />
      <ChatBubble message="I need assistance with my account." sender="user" />
    </div>
  );
}




export default Chat;
