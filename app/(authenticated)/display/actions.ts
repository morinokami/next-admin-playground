"use server";

import { parse } from "valibot";

import { ActionResult } from "@/types";

import { DisplayFormSchema, DisplayFormValues } from "./schemas";

export async function displayFormAction(
  formData: DisplayFormValues,
): Promise<ActionResult> {
  parse(DisplayFormSchema, formData);

  try {
    // Do something with formData
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { success: true, message: "Success" };
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  }
}
