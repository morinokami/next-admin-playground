"use server";

import { parse } from "valibot";

import { ProfileFormSchema, ProfileFormValues } from "./schemas";

export async function profileFormAction(formData: ProfileFormValues) {
  parse(ProfileFormSchema, formData);

  // Do something with formData
  await new Promise((resolve) => setTimeout(resolve, 2000));
}
