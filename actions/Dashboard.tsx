/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { DB } from "@/lib/prisma";
import { AccountDataType } from "@/types";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializeTransaction = (obj: any) => {
  const serialize = { ...obj };

  console.log("serialize: ", serialize);

  if (obj.balance) {
    serialize.balance = obj.balance.toNumber();
  }

  return serialize;
};

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

    const serializeAccount = serializeTransaction(account);

    revalidatePath("/dashboard");

    return {
      success: true,
      account: serializeAccount,
      message: "Account created successfully!!",
    };
  } catch (error: any) {
    console.error(error?.message);
  }
}
