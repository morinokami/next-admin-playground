"use server";

import { parse } from "valibot";

import { ActionResult } from "@/types";

import { NotificationsFormSchema, NotificationsFormValues } from "./schemas";

export async function notificationsFormAction(
  formData: NotificationsFormValues,
): Promise<ActionResult> {
  parse(NotificationsFormSchema, formData);

  try {
    // Do something with formData
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { success: true, message: "Success" };
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  }
}
