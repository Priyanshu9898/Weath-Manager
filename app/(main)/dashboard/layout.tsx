import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="px-5 lg:px-10">
        <h1 className="text-6xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
          Dashboard
        </h1>
        <Suspense
          fallback={
            <>
              <BarLoader color={"#93333ea"} width={"100%"} className="mt-4" />
            </>
          }
        >
          {children}
        </Suspense>
      </div>
    </>
  );
};

export default DashboardLayout;
