import { DropDownMenu } from "../../../components/DropdownMenu";
import { UtilityBar } from "../../../components/UtilityBar";
import { BackButton } from "../../../components/BackButton";

interface ChatHeaderProps {
  basePath: string;
  solutions: string[];
}

export function ChatHeader({ basePath, solutions }: ChatHeaderProps) {
  return (
    <div className="flex items-start justify-between w-full px-4 pt-4 mb-4">
      <div className="flex flex-row gap-1">
        <BackButton to={basePath} />
        <DropDownMenu solutions={solutions} />
      </div>
      <div className="pt-1">
        <UtilityBar />
      </div>
    </div>
  );
}
