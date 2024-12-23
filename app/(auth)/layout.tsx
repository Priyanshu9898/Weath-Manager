import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-[90vh] flex-1 items-center justify-center mt-[-20px]">
      {children}
    </div>
  );
};

export default AuthLayout;
