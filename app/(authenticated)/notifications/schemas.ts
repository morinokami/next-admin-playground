import { boolean, enumType, object, optional, Output } from "valibot";

export const NotificationsFormSchema = object({
  type: enumType(
    ["all", "mentions", "none"],
    "You need to select a notification type.",
  ),
  mobile: optional(boolean(), false),
  communication_emails: optional(boolean(), false),
  social_emails: optional(boolean(), false),
  marketing_emails: optional(boolean(), false),
  security_emails: boolean(),
});

export type NotificationsFormValues = Output<typeof NotificationsFormSchema>;
