"use server";

import { DB } from "@/lib/prisma";
import { AccountDataType } from "@/types";

import { auth } from "@clerk/nextjs/server";

export async function createAccount(accountData: AccountDataType) {
  try {
    const { userId } = await auth();

    console.log(userId);

    if (!userId) {
      throw new Error("Unauthorized!!");
    }

    // Create account
    const user = await DB.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const balanceFloat = parseFloat(accountData.balance);

    if (isNaN(balanceFloat)) {
      throw new Error("Invalid balance");
    }

    const existingAccounts = await DB.account.findMany({
      where: {
        userId: user.id,
      },
    });

    const shouldDefaultAccount = existingAccounts.length === 0 ? true : false;

    if (shouldDefaultAccount) {
      await DB.account.updateMany({
        where: {
          userId: user.id,
          isDefault: true,
        },
        data: {
          isDefault: false,
        },
      });
    }

    const account = await DB.account.create({
      data: {
        userId: user.id,
        name: accountData.name,
        type: accountData.type,
        balance: balanceFloat,
        isDefault: shouldDefaultAccount,
      },
    });

    return account;
  } catch (error) {
    console.error(error);
  }
}
