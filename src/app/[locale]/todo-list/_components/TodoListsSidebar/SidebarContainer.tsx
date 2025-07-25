"use client";

import { useCallback } from "react";
import SidebarHeader from "./SidebarHeader";

export default function SidebarContainer() {
  const handleAddNewList = useCallback(() => {
    // TODO: Implement add new list functionality
  }, []);
  return (
    <div className="bg-primary-background flex h-full flex-col rounded-[var(--radius-lg)]">
      <SidebarHeader onAddNewList={handleAddNewList} />
      {/* <SidebarContent /> */}
      {/* <SidebarFooter /> */}
    </div>
  );
}
