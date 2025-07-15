import { ChatBubble } from "../components/ChatBubble";
import { DropDownMenu } from "../components/DropdownMenu";
import { servicedeskSolutions } from "../data/servidedeskSolutions";

function Chat() {
  return (
    <div>
      <h1>Welcome to the Chat</h1>
      <DropDownMenu solutions={servicedeskSolutions} />
    </div>
  );
}




export default Chat;
