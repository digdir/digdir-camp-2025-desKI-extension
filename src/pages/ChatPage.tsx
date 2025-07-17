import { DropDownMenu } from "../components/DropdownMenu";
import { servicedeskSolutions } from "../data/servicedeskSolutions";
import { UtilityBar } from "../components/UtilityBar";
function Chat() {
  return (
    <div>
      <h1>Welcome to the Chat</h1>
      <UtilityBar />
      <DropDownMenu solutions={servicedeskSolutions} />
    </div>
  );
}


export default Chat;
