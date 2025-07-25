import { Metadata } from "next";
import TodoListPageContent from "./_components/TodoListPageContent";

export const metadata: Metadata = {
  title: "Todo Lists | TaskHub",
  description: "Manage your todo lists and tasks efficiently",
};

export default async function TodoListPage() {
  return <TodoListPageContent />;
}
