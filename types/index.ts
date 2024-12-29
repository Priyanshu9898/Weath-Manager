import { AccountType } from "@prisma/client";

export interface AccountDataType {
  name: string;
  type: AccountType;
  balance: string;
  isDefault?: boolean;
}
