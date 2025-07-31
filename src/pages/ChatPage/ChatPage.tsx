import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { DropDownMenu } from "../../components/DropdownMenu/DropdownMenu";
import { UtilityBar } from "../../components/UtilityBar/UtilityBar";
import { ChatBubble } from "../../components/ChatBubble/ChatBubble";
import { Textarea } from "@digdir/designsystemet-react";
import { PaperplaneIcon } from "@navikt/aksel-icons";
import { sendMessageToDeski } from "../../api/chatApi";
import { BackButton } from "../../components/BackButton/BackButton";
import "./ChatPage.css";

type Message = {
  sender: "user" | "bot";
  message: string;
};

export default function ChatPage() {
  const location = useLocation();
  const solutions = location.state?.solutions ?? [];
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { sender: "user", message: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    try {
      const reply = await sendMessageToDeski(inputValue);
      const botReply: Message = { sender: "bot", message: reply };
      setMessages((prev) => [...prev, botReply]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          message: "Beklager, noe gikk galt med forbindelsen til desKI 🤖.",
        },
      ]);
    }
  };

  const basePath = location.pathname.startsWith("/servicedesk")
    ? "/servicedesk"
    : "/brukerstøtte";

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-header-left">
          <BackButton to={basePath} />
          <DropDownMenu solutions={solutions} />
        </div>
        <UtilityBar />
      </div>

      <div className="chat-body">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} sender={msg.sender} message={msg.message} />
        ))}
        <div ref={endRef} />
      </div>

      <div className="chat-footer">
        <div className="chat-input-wrapper">
    <Textarea
      placeholder="Spør et spørsmål"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSend()}
      className="chat-input ds-input"
      rows={1}
    />

    <button onClick={handleSend} className="chat-send-button">
      <PaperplaneIcon className="chat-send-icon" />
    </button>
  </div>
</div>

    </div>
  );
}
