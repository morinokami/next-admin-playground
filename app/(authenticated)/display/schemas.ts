import { array, minLength, object, type Output, string } from "valibot";

export const DisplayFormSchema = object({
  items: array(string(), [
    minLength(1, "You have to select at least one item."),
  ]),
});

export type DisplayFormValues = Output<typeof DisplayFormSchema>;
