import {
  array,
  email,
  maxLength,
  minLength,
  object,
  Output,
  string,
  url,
} from "valibot";

export const ProfileFormSchema = object({
  username: string([
    minLength(2, "Username must be at least 2 characters."),
    maxLength(30, "Username must not be longer than 30 characters."),
  ]),
  email: string([minLength(1, "Please select an email to display."), email()]),
  bio: string([minLength(4), maxLength(160)]),
  urls: array(
    object({
      value: string([url("Please enter a valid URL.")]),
    }),
  ),
});

export type ProfileFormValues = Output<typeof ProfileFormSchema>;
