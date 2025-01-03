/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import { notFound } from "next/navigation";
import { getAccountDetails } from "@/actions/Account";
import TransactionTable from "../_components/TransactionTable";
import { Account } from "@/types";
import { AccountChart } from "../_components/AccountChart";

export default async function AccountPage({ params }: { params: any }) {
  const accountId = await params;

  const id = accountId.id;

  const accountData: Account | null = await getAccountDetails(id);

  if (!accountData) {
    notFound();
  }

  const { transactions, ...account } = accountData;

  return (
    <div className="container mx-auto py-8 px-5">
      <div className="space-y-8 px-5">
        <div className="flex gap-4 items-end justify-between space-y-0 pb-2">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 capitalize">
              {account.name}
            </h1>
            <p className="text-muted-foreground">
              {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
              Account
            </p>
          </div>

          <div className="text-right pb-2">
            <div className="text-xl sm:text-2xl font-bold">
              ${account.balance.toFixed(2)}
            </div>
            <p className="text-sm text-muted-foreground">
              {account._count.transactions} Transactions
            </p>
          </div>
        </div>

        {/* Chart Section */}
        <Suspense
          fallback={
            <BarLoader className="mt-4" width={"100%"} color="#9333ea" />
          }
        >
          <AccountChart transactions={transactions} />
        </Suspense>

        {/* Transactions Table */}
        <Suspense
          fallback={
            <BarLoader className="mt-4" width={"100%"} color="#9333ea" />
          }
        >
          <TransactionTable transactions={transactions} />
        </Suspense>
      </div>
    </div>
  );
}
