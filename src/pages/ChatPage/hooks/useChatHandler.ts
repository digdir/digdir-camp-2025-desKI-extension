// File: ChatPage/hooks/useChatHandler.ts
import { useCallback, useEffect } from "react";
import { parseLogFile } from "../../../services/ParseLogFile";
import { sendMessageToDeski } from "../../../api/chatApi";
import { ChatMessage } from "../types";

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  uploadedImages: string[];
  setUploadedImages: React.Dispatch<React.SetStateAction<string[]>>;
  logResults: string[];
  setLogResults: React.Dispatch<React.SetStateAction<string[]>>;
  includeAllLogs: boolean;
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  endRef: React.RefObject<HTMLDivElement | null>
}

export function useChatHandler({
  inputValue,
  setInputValue,
  uploadedImages,
  setUploadedImages,
  logResults,
  setLogResults,
  includeAllLogs,
  setMessages,
  endRef,
}: Props) {
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [endRef, logResults, uploadedImages, inputValue]);

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const files = Array.from(e.target.files);
        if (files.length + uploadedImages.length > 5) {
          alert("Du kan maks laste opp 5 bilder.");
          return;
        }
        const newUrls = files.map((file) => URL.createObjectURL(file));
        setUploadedImages((prev) => [...prev, ...newUrls]);
      }
    },
    [uploadedImages, setUploadedImages]
  );

  const handleRemoveImage = useCallback(
    (index: number) => {
      setUploadedImages((prev) => prev.filter((_, i) => i !== index));
    },
    [setUploadedImages]
  );

  const handleRemoveLogResult = useCallback(() => {
    setLogResults([]);
  }, [setLogResults]);

  const handleSend = useCallback(async () => {
    if (!inputValue.trim() && uploadedImages.length === 0 && logResults.length === 0 && !includeAllLogs) return;

    let allLogs: string[] = [];

    if (includeAllLogs) {
      try {
        const res = await fetch("/data/log1.txt");
        const text = await res.text();
        allLogs = parseLogFile(text);
      } catch (err) {
        console.error("Kunne ikke laste hele loggen:", err);
      }
    }

    const logsToSend = [...logResults, ...allLogs];

    const userMessage: ChatMessage = {
      sender: "user",
      message: inputValue,
      imageUrls: uploadedImages,
      logResults: logsToSend.length > 0 ? logsToSend : undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setUploadedImages([]);
    setLogResults([]);

    try {
      const reply = await sendMessageToDeski(
        inputValue,
        logsToSend.length > 0 ? `\n\n[Loggvedlegg: ${logsToSend.join(", ")}]` : ""
      );
      const botReply: ChatMessage = { sender: "bot", message: reply };
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          message: "Beklager, noe gikk galt med forbindelsen til desKI 🤖.",
        },
      ]);
    }
  }, [
    inputValue,
    uploadedImages,
    logResults,
    includeAllLogs,
    setMessages,
    setInputValue,
    setUploadedImages,
    setLogResults,
  ]);

  return {
    handleImageUpload,
    handleRemoveImage,
    handleRemoveLogResult,
    handleSend,
  };
}
