"use server";

import { parse } from "valibot";

import { DisplayFormSchema, DisplayFormValues } from "./schemas";

export async function displayFormAction(formData: DisplayFormValues) {
  parse(DisplayFormSchema, formData);

  // Do something with formData
  await new Promise((resolve) => setTimeout(resolve, 2000));
}
