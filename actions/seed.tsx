/* eslint-disable @typescript-eslint/no-explicit-any */
// app/account/[id]/seedTransactions.ts

"use server";

import { DB } from "@/lib/prisma";
import { subDays } from "date-fns";
import { v4 as uuidv4 } from "uuid"; // Using uuid library for broader compatibility

// Constants for account and user IDs
const ACCOUNT_ID = "4440ff34-e541-4f6d-a784-2e07a8c92cb6"; // Replace with actual account ID or use environment variables
const USER_ID = "9f09201a-dc5a-4bc8-afb0-2044ea947e77"; // Replace with actual user ID or use environment variables

// Define Category and Type interfaces
interface Category {
  name: string;
  range: [number, number];
}

interface Categories {
  INCOME: Category[];
  EXPENSE: Category[];
}

// Categories with their typical amount ranges
const CATEGORIES: Categories = {
  INCOME: [
    { name: "salary", range: [5000, 8000] },
    { name: "freelance", range: [1000, 3000] },
    { name: "investments", range: [500, 2000] },
    { name: "other-income", range: [100, 1000] },
  ],
  EXPENSE: [
    { name: "housing", range: [1000, 2000] },
    { name: "transportation", range: [100, 500] },
    { name: "groceries", range: [200, 600] },
    { name: "utilities", range: [100, 300] },
    { name: "entertainment", range: [50, 200] },
    { name: "food", range: [50, 150] },
    { name: "shopping", range: [100, 500] },
    { name: "healthcare", range: [100, 1000] },
    { name: "education", range: [200, 1000] },
    { name: "travel", range: [500, 2000] },
  ],
};

// Define TransactionStatus as a union of possible statuses
type TransactionStatus = "COMPLETED" | "PENDING" | "FAILED";

// Transaction interface
interface Transaction {
  id: string;
  type: "INCOME" | "EXPENSE";
  amount: number;
  description: string;
  date: Date;
  category: string;
  status: TransactionStatus;
  userId: string;
  accountId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Seed result interface
interface SeedResult {
  success: boolean;
  message?: string;
  error?: string;
}

// Helper to generate random amount within a range
function getRandomAmount(min: number, max: number): number {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

// Helper to get random category with amount
function getRandomCategory(type: keyof Categories): {
  category: string;
  amount: number;
} {
  const categories = CATEGORIES[type];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const amount = getRandomAmount(category.range[0], category.range[1]);
  return { category: category.name, amount };
}

// Seed transactions function
export async function seedTransactions(): Promise<SeedResult> {
  try {
    // Generate 90 days of transactions
    const transactions: Transaction[] = [];
    let totalBalance = 0;

    for (let i = 90; i >= 0; i--) {
      const date = subDays(new Date(), i);

      // Generate 1-3 transactions per day
      const transactionsPerDay = Math.floor(Math.random() * 3) + 1;

      for (let j = 0; j < transactionsPerDay; j++) {
        // 40% chance of income, 60% chance of expense
        const type: "INCOME" | "EXPENSE" =
          Math.random() < 0.4 ? "INCOME" : "EXPENSE";
        const { category, amount } = getRandomCategory(type);

        const transaction: Transaction = {
          id: uuidv4(), // Using uuidv4 for UUID generation
          type,
          amount,
          description: `${
            type === "INCOME" ? "Received" : "Paid for"
          } ${category}`,
          date,
          category,
          status: "COMPLETED", // Assuming all transactions are completed; adjust if needed
          userId: USER_ID,
          accountId: ACCOUNT_ID,
          createdAt: date,
          updatedAt: date,
        };

        totalBalance += type === "INCOME" ? amount : -amount;
        transactions.push(transaction);
      }
    }

    // Insert transactions in batches and update account balance
    await DB.$transaction(async (tx) => {
      // Clear existing transactions
      await tx.transaction.deleteMany({
        where: { accountId: ACCOUNT_ID },
      });

      // Insert new transactions
      await tx.transaction.createMany({
        data: transactions,
      });

      // Update account balance
      await tx.account.update({
        where: { id: ACCOUNT_ID },
        data: { balance: totalBalance },
      });
    });

    return {
      success: true,
      message: `Created ${transactions.length} transactions`,
    };
  } catch (error: any) {
    console.error("Error seeding transactions:", error);
    return { success: false, error: error.message };
  }
}
