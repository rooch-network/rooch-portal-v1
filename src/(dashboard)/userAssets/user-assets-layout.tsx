import { z } from "zod";
import { Task, taskSchema } from "./data/schema";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useEffect, useState } from "react";

export const UserAssetsLayout = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function getTasks() {
    try {
      const response = await fetch("public/data/tasks.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return z.array(taskSchema).parse(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  }

  useEffect(() => {
    getTasks().then((data) => {
      if (data) {
        setTasks(data);
      }
    });
  }, []);

  return (
    <div className="h-full flex-1 flex-col space-y-8 flex">
      <div className="flex items-center justify-between space-y-2">
        <span>
          <h1 className="text-2xl font-bold tracking-tight">Assets</h1>
          <p className="text-muted-foreground">
            Supported Cryptocurrencies for Transfer
          </p>
        </span>
        {/* add some details on the right of */}
      </div>
      <DataTable data={tasks} columns={columns} />
    </div>
  );
};
