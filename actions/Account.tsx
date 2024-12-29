import { DB } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

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
