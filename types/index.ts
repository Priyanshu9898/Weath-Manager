import { AccountType } from "@prisma/client";

export interface AccountDataType {
  name: string;
  type: AccountType;
  balance: string;
  isDefault?: boolean;
}

export interface AccountCardProps {
  account: {
    id: string;
    name: string;
    type: string;
    balance: number;
    isDefault: boolean;
  };
}
