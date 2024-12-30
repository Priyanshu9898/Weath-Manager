"use server";

import { DB } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Decimal } from "@prisma/client/runtime/library";
import { revalidatePath } from "next/cache";

/* eslint-disable @typescript-eslint/no-explicit-any */

const serializeDecimal = (obj: any) => {
  const serialized = { ...obj };
  if (obj.balance) {
    serialized.balance = obj.balance.toNumber();
  }
  if (obj.amount) {
    serialized.amount = obj.amount.toNumber();
  }
  return serialized;
};

export async function getAccountDetails(acccountId: string) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized!!");
    }

    // Get accounts
    const user = await DB.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const account = await DB.account.findUnique({
      where: {
        id: acccountId,
        userId: user.id,
      },
      include: {
        transactions: {
          orderBy: {
            createdAt: "desc",
          },
        },
        _count: {
          select: { transactions: true },
        },
      },
    });

    if (!account) return null;

    return {
      ...serializeDecimal(account),
      transactions: account.transactions.map(serializeDecimal),
    };
  } catch (error: any) {
    console.error(error?.message);
  }
}

export async function BulkDeleteTransaction(selectedIds: string[]) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized!!");
    }

    // Get accounts
    const user = await DB.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const transactions = await DB.transaction.findMany({
      where: {
        id: { in: selectedIds },
        userId: user.id,
      },
    });

    const accountBalanceChanges = transactions.reduce<{
      [key: string]: Decimal;
    }>((acc, transaction) => {
      const change =
        transaction.type === "EXPENSE"
          ? transaction.amount
          : transaction.amount.negated();
      acc[transaction.accountId] = (
        acc[transaction.accountId] || new Decimal(0)
      ).plus(change);
      return acc;
    }, {});

    // Delete transactions and update account balances in a transaction
    await DB.$transaction(async (tx) => {
      // Delete transactions
      await tx.transaction.deleteMany({
        where: {
          id: { in: selectedIds },
          userId: user.id,
        },
      });

      // Update account balances
      for (const [accountId, balanceChange] of Object.entries(
        accountBalanceChanges
      )) {
        await tx.account.update({
          where: { id: accountId },
          data: {
            balance: {
              increment: balanceChange,
            },
          },
        });
      }
    });

    revalidatePath("/dashboard");
    revalidatePath("/account/[id]");

    return { success: true };
  } catch (error: any) {
    console.error(error?.message);
  }
}
