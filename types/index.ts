import {
  AccountType,
  RecurringInterval,
  TransactionType,
} from "@prisma/client";

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

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  date: Date;
  category: string;
  isRecurring: boolean;
  recurringInterval?: RecurringInterval;
  nextRecurringDate?: Date;
}
