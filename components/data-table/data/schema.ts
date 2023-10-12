import { object, Output, string } from "valibot";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = object({
  id: string(),
  title: string(),
  status: string(),
  label: string(),
  priority: string(),
});

export type Task = Output<typeof taskSchema>;
