"use client";

import { useCallback, useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarList from "./SidebarList";
import { TodoList } from "../../_types/todolist.types";

export default function SidebarContainer() {
  const [selectedListId, setSelectedListId] = useState<number | undefined>();

  const handleListSelect = useCallback((list: TodoList) => {
    setSelectedListId(list.id);
  }, []);

  const handleAddNewList = useCallback(() => {
    // TODO: Implement add new list functionality
  }, []);

  return (
    <div className="bg-primary-background flex h-full flex-col rounded-[var(--radius-lg)]">
      <SidebarHeader onAddNewList={handleAddNewList} />
      <SidebarList onListSelect={handleListSelect} selectedListId={selectedListId} />
      {/* <SidebarFooter /> */}
    </div>
  );
}
