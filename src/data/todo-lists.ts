import { Briefcase, Calendar, Check, ListTodo, Star, Trash, User } from "lucide-react";

export const todoLists = {
  general: [
    {
      id: 1,
      name: "All Tasks",
      badge: "101",
      icon: ListTodo,
    },
    {
      id: 2,
      name: "Completed",
      badge: "35",
      icon: Check,
    },
    {
      id: 3,
      name: "Today",
      badge: "4",
      icon: Calendar,
    },
    {
      id: 4,
      name: "Starred",
      badge: "6",
      icon: Star,
    },
    {
      id: 5,
      name: "Personal",
      badge: "35",
      icon: User,
    },
    {
      id: 6,
      name: "Work",
      badge: "16",
      icon: Briefcase,
    },
    {
      id: 7,
      name: "Trash",
      badge: "24",
      icon: Trash,
    },
  ],
  workSpace: [
    {
      id: 8,
      name: "Lorem Ipsum",
      badge: "16",
      icon: ListTodo,
    },
    {
      id: 9,
      name: "Lorem Ipsum 1",
      badge: "16",
      icon: ListTodo,
    },
    {
      id: 10,
      name: "Lorem Ipsum 2",
      badge: "16",
      icon: ListTodo,
    },
    {
      id: 11,
      name: "Lorem Ipsum 3",
      badge: "16",
      icon: ListTodo,
    },
  ],
};
