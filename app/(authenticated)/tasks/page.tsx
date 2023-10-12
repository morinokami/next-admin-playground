import { promises as fs } from "node:fs";
import path from "node:path";

import { array, parse } from "valibot";

import { columns } from "@/components/data-table/data/columns";
import { taskSchema } from "@/components/data-table/data/schema";
import { DataTable } from "@/components/data-table/data-table";
import { Separator } from "@/components/ui/separator";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "components/data-table/data/tasks.json"),
  );

  const tasks = JSON.parse(data.toString());

  return parse(array(taskSchema), tasks);
}

export default async function Tasks() {
  const tasks = await getTasks();

  return (
    <main className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Tasks</h3>
        <p className="text-sm text-muted-foreground">
          Here&apos;s a list of your tasks for this month!
        </p>
      </div>
      <Separator />
      <DataTable data={tasks} columns={columns} />
    </main>
  );
}
