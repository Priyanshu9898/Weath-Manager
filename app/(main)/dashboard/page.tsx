export const dynamic = "force-dynamic";

import { fetchAllUserAccounts } from "@/actions/Dashboard";
import AccountCard from "@/components/AccountCard";
import CreateAccountDrawer from "@/components/CreateAccountDrawer";
import React from "react";

const Dashboard = async () => {
  const userAccounts = (await fetchAllUserAccounts()) || [];

  return (
    <div>
      {/*  */}

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
