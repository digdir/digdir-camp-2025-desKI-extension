import { useState, useCallback } from "react";

export function useChatInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const clearInput = useCallback(() => {
    setInputValue("");
  }, []);

  return {
    inputValue,
    handleInputChange,
    clearInput,
  };
}