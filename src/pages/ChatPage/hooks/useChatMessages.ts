import { useCallback, useState, useRef, useEffect } from "react";
import { ChatMessage } from "../types/types";
import { sendMessageToDeski } from "../../../api/chatApi";

export function useChatMessages() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addUserMessage = useCallback((message: ChatMessage) => {
    setMessages(prev => [...prev, message]);
  }, []);

  const sendBotMessage = useCallback(async (userInput: string, logAttachment: string) => {
    setIsLoading(true);
    try {
      const reply = await sendMessageToDeski(userInput, logAttachment);
      const botReply: ChatMessage = { sender: "bot", message: reply };
      setMessages(prev => [...prev, botReply]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          message: "Beklager, noe gikk galt med forbindelsen til desKI 🤖.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    messages,
    isLoading,
    endRef,
    addUserMessage,
    sendBotMessage,
  };
}