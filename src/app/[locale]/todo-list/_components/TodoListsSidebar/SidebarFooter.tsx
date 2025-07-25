interface SidebarFooterProps {
  completedTasks?: number;
  totalTasks?: number;
}

export default function SidebarFooter({
  completedTasks = 3,
  totalTasks = 28,
}: SidebarFooterProps) {
  return (
    <section className="border-secondary flex h-1/12 min-h-48 overflow-hidden border-t border-dashed p-4">
      <div className="border-primary-subtle bg-primary/18 relative z-10 flex w-full items-center justify-between border p-4">
        <div className="absolute inset-0 -z-10">
          <img
            src="/assets/images/media-todolist-2.png"
            alt=""
            className="h-full w-full object-cover opacity-16"
            aria-hidden="true"
          />
        </div>

        <div className="flex h-full flex-col justify-between">
          <div className="text-primary text-xl font-semibold">
            <div>Today Completed</div>
            <div>Tasks</div>
          </div>
          <h4 className="text-content text-3xl/relaxed font-semibold">
            {completedTasks}/{totalTasks} Tasks
          </h4>
        </div>

        <figure>
          <img src="/assets/images/media-todolist-1.png" alt="Task completion illustration" />
        </figure>
      </div>
    </section>
  );
}
