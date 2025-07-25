import { LucideIcon } from "lucide-react";

export interface TodoList {
  id: number;
  name: string;
  badge: string;
  icon: LucideIcon;
}

export interface TodoListsData {
  general: TodoList[];
  workSpace: TodoList[];
}
