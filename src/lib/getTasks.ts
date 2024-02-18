import { taskSchema } from "@/(dashboard)/userAssets/data/schema";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

interface Task {
  id: string;
  title: string;
}

// TODO: Fix the client bug
async function getTasks(): Promise<Task[]> {
  const data = await fs.readFile(
    path.join(process.cwd(), "@/(dashboard)/userAssets/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default getTasks;
