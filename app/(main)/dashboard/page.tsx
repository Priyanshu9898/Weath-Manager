export const dynamic = "force-dynamic";

import { getCurrentBudget } from "@/actions/Budget";
import { fetchAllUserAccounts } from "@/actions/Dashboard";
import AccountCard from "@/components/AccountCard";
import CreateAccountDrawer from "@/components/CreateAccountDrawer";
import React from "react";
import { BudgetProgress } from "./_components/BudgetProgress";

const Dashboard = async () => {
  const userAccounts = (await fetchAllUserAccounts()) || [];

  const defaultAccount = userAccounts?.find((account) => account.isDefault);

  let budgetData = null;

  if (defaultAccount) {
    console.log(defaultAccount.id);
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  console.log(budgetData);

  return (
    <div>
      {/*  */}

      <BudgetProgress
        initialBudget={budgetData?.budget}
        currentExpenses={budgetData?.currentExpenses || 0}
      />

      {/*  */}

      {/* Create Account and All Account section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CreateAccountDrawer />

        {userAccounts.map((account) => (
          <>
            <AccountCard account={account} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
