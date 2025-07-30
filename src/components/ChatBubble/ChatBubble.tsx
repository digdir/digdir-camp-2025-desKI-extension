import { MessageEditor } from "../MessageEditor/MessageEditor";
import "./ChatBubble.css";

type Props = {
  message: string;
  sender: "user" | "bot";
};

export function ChatBubble({ message, sender }: Props) {
  const isUser = sender === "user";

  return (
    <div className={`chat-bubble-container ${isUser ? "user" : "bot"}`}>
      <div className={`chat-bubble ${isUser ? "user" : "bot"}`}>
        {message}
      </div>
      <div className="editor-wrapper">
        <MessageEditor initialText={message} />
      </div>
    </div>
  );
}
