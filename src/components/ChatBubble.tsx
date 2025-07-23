type Props = {
  message: string;
  sender: 'user' | 'bot';
};

export function ChatBubble({ message, sender }: Props) {
  const isUser = sender === 'user';

  return (
    <div className={isUser ? 'chat-container-user' : 'chat-container-bot'}>
      <div
        className={`chat-bubble-base ${
          isUser ? 'chat-bubble-user' : 'chat-bubble-bot'
        }`}
      >
        {message}
      </div>
    </div>
  );
}