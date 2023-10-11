"use server";

import { parse } from "valibot";

import { ActionResult } from "@/types";

import { ProfileFormSchema, ProfileFormValues } from "./schemas";

export async function profileFormAction(
  formData: ProfileFormValues,
): Promise<ActionResult> {
  parse(ProfileFormSchema, formData);

  try {
    // Do something with formData
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { success: true, message: "Success" };
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  }
}
