type Props = {
  message: string;
  sender: 'user' | 'bot';
};

export function ChatBubble({ message, sender }: Props) {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`max-w-[60%] px-4 py-3 text-sm break-words ${
          isUser
            ? 'bg-[var(--brand1-12)] text-white rounded-[20px_20px_4px_20px] self-end'
            : 'text-[var(--neutral-11)] bg-transparent self-start'
        }`}
      >
        {message}
      </div>
    </div>
  );
}



