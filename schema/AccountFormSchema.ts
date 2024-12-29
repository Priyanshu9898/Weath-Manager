import { AccountType } from "@prisma/client";
import { z } from "zod";

export const CreateAccountFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name of the account is required!",
  }),
  type: z.nativeEnum(AccountType),
  balance: z.string().min(1, {
    message: "Balance is required!",
  }),
  isDefault: z.boolean().optional(),
});
