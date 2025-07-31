export type ChatMessage = {
  sender: "user" | "bot";
  message: string;
  imageUrls?: string[];
  logResults?: string[];
};
