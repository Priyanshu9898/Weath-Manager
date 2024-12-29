import CreateAccountDrawer from "@/components/CreateAccountDrawer";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      {/*  */}

      {/*  */}

      {/* Create Account and All Account section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CreateAccountDrawer />
      </div>
    </div>
  );
};

export default Dashboard;
