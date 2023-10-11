"use server";

import { parse } from "valibot";

import { NotificationsFormSchema, NotificationsFormValues } from "./schemas";

export async function notificationsFormAction(
  formData: NotificationsFormValues,
) {
  parse(NotificationsFormSchema, formData);

  // Do something with formData
  await new Promise((resolve) => setTimeout(resolve, 2000));
}
