import { Button } from "@/components";
import { ListTodo } from "lucide-react";

interface SidebarHeaderProps {
  onAddNewList?: () => void;
}

export default function SidebarHeader({ onAddNewList }: SidebarHeaderProps) {
  return (
    <div className="border-secondary flex h-1/12 min-h-22 items-center justify-between border-b border-dashed p-4">
      <div className="flex w-1/2 items-center justify-between">
        <span className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
          <ListTodo aria-hidden="true" />
        </span>
        <div>
          <h1 className="text-content font-semibold">To Do List</h1>
          <h3 className="text-muted">Create new list</h3>
        </div>
      </div>
      <div>
        <Button
          color="quaternary"
          radius="full"
          variant="soft"
          size="small"
          onClick={onAddNewList}
          aria-label="Add new todo list"
        >
          + Add New List
        </Button>
      </div>
    </div>
  );
}
