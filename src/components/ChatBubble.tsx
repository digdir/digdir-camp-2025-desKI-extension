type Props = {
  message: string;
  sender: 'user' | 'bot';
};

export function ChatBubble({ message, sender }: Props) {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      <div className={`relative max-w-[60%] px-4 py-3 break-words text-sm 
        ${isUser 
          ? 'bg-[var(--brand1-12)] text-[var(--brand1-1)] rounded-[24px] rounded-br-none'
          : 'bg-[var(--neutral-4)] text-[var(--neutral-11)] rounded-[24px] rounded-bl-none'
        }`}
      >
        {message}

        {/* Hale */}
        <div className={`
          absolute bottom-0 w-[20px] h-[40px]
          ${isUser 
            ? 'right-[-10px] rounded-bl-[40px] bg-[var(--brand1-12)]'
            : 'left-[-10px] rounded-br-[40px] bg-[var(--neutral-4)]'}
        `}></div>
      </div>
    </div>
  );
}

