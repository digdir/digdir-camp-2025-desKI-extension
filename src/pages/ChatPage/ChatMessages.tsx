import { ChatBubble } from "../../components/ChatBubble";
import { ChatMessage } from "./types";
import { RefObject } from "react";

interface ChatMessagesProps {
  messages: ChatMessage[];
  endRef: RefObject<HTMLDivElement | null>;
}

export function ChatMessages({ messages, endRef }: ChatMessagesProps) {
  return (
    <div className="flex-1 w-full overflow-y-auto px-2 py-4 space-y-4">
      {messages.map((msg, idx) => (
        <ChatBubble
          key={idx}
          sender={msg.sender}
          message={msg.message}
          imageUrls={msg.imageUrls}
          logResults={msg.logResults}
        />
      ))}
      <div ref={endRef} />
    </div>
  );
}
