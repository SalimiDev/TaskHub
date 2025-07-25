import { Metadata } from "next";
import { TodoListsSidebar } from "./_components";

export const metadata: Metadata = {
  title: "Todo Lists | TaskHub",
  description: "Manage your todo lists and tasks efficiently",
};

export default async function TodoListPage() {
  return (
    <div className="container mx-auto flex flex-col px-4 py-6">
      <section
        id="top-charts"
        className="bg-primary-background mb-4 h-45 w-full rounded-[var(--radius-lg)]"
      >
        Top Charts Section
      </section>

      <div className="grid grid-cols-[minmax(250px,350px)_1fr] gap-4">
        <section className="bg-primary-background rounded-[var(--radius-lg)]">
          <TodoListsSidebar />
        </section>

        <div className="flex flex-col gap-4">
          <section className="bg-primary-background flex flex-col rounded-[var(--radius-lg)]">
            {Array.from({ length: 20 }).map((_, idx) => (
              <div key={idx} className="p-4">
                right main content {idx + 1}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
