import { useCallback, useRef } from "react";
import { ChatMessage } from "../types";
import { useChatInput } from "./useChatInput";
import { useImageUpload } from "./useImageUpload";
import { useLogResults } from "./useLogResults";
import { useChatMessages } from "./useChatMessages";

export function useChat() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const chatInput = useChatInput();
  const imageUpload = useImageUpload();
  const logResults = useLogResults();
  const chatMessages = useChatMessages();

  const handleSend = useCallback(async () => {
    const { inputValue } = chatInput;
    const { uploadedImages } = imageUpload;
    const { logResults: currentLogResults, getAllLogs } = logResults;

    // Validation
    if (!inputValue.trim() && uploadedImages.length === 0 && currentLogResults.length === 0) {
      return;
    }

    // Get all logs if needed
    const allLogs = await getAllLogs();
    const logsToSend = [...currentLogResults, ...allLogs];

    // Create user message
    const userMessage: ChatMessage = {
      sender: "user",
      message: inputValue,
      imageUrls: uploadedImages.length > 0 ? uploadedImages : undefined,
      logResults: logsToSend.length > 0 ? logsToSend : undefined,
    };

    // Add user message and clear inputs
    chatMessages.addUserMessage(userMessage);
    chatInput.clearInput();
    imageUpload.clearImages();
    logResults.clearLogResults();

    // Send bot response
    const logAttachment = logsToSend.length > 0
      ? `\n\n[Loggvedlegg: ${logsToSend.join(", ")}]`
      : "";

    await chatMessages.sendBotMessage(inputValue, logAttachment);
  }, [chatInput, imageUpload, logResults, chatMessages]);

  return {
    fileInputRef,
    ...chatInput,
    ...imageUpload,
    ...logResults,
    ...chatMessages,
    handleSend,
  };
}