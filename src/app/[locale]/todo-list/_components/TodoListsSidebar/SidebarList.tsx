import { memo } from "react";
import { Badge } from "@/components";
import { todoLists } from "@/data/todo-lists";
import { TodoList } from "../../_types/todolist.types";

interface SidebarListProps {
  onListSelect?: (list: TodoList) => void;
  selectedListId?: number;
}

const SidebarList = memo<SidebarListProps>(({ onListSelect, selectedListId }) => {
  const handleListClick = (list: TodoList) => {
    onListSelect?.(list);
  };

  const renderListItems = (lists: TodoList[], category: string) => (
    <div key={category} className="">
      <h1 className="text-muted font-semibold">{category}</h1>
      <ul className="text-emphasis mt-2 flex flex-col gap-2">
        {lists.map((list) => (
          <li
            key={list.id}
            className={`hover:bg-primary-subtle hover:text-primary flex cursor-pointer items-center gap-2 rounded-[var(--radius-md)] p-3 transition-colors ${
              selectedListId === list.id ? "bg-primary-subtle text-primary" : ""
            }`}
            onClick={() => handleListClick(list)}
          >
            <span className="text-primary">{<list.icon />}</span>
            <div className="flex w-full justify-between">
              <span className="no-wrap">{list.name}</span>
              <Badge color="primary" radius="full" size="small">
                {list.badge}
              </Badge>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
      {renderListItems(todoLists.general, "General")}
      {renderListItems(todoLists.workSpace, "Work Space")}
    </div>
  );
});

SidebarList.displayName = "SidebarList";

export default SidebarList;
