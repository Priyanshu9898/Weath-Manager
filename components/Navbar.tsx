import React from "react";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import { LayoutDashboard, PenBox } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto px-2 md:px-10 z-50 fixed top-0 bg-white/80 backdrop-blur-md border-b">
        <nav className="container flex justify-between items-center py-4 ">
          {/* Logo here */}
          <Link href="/">
            <div className="text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Wealth Manager
            </div>
          </Link>

          {/* Nav items here */}
          <div>
            <SignedIn>
              <div className="w-full flex items-center justify-between gap-x-4">
                <Link href="/transaction/create">
                  <Button type="button">
                    <PenBox className="" />
                    <span className="hidden md:flex">Add Transaction</span>
                  </Button>
                </Link>

                <Link href="/dashboard">
                  <Button
                    type="button"
                    variant={"outline"}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <LayoutDashboard className="" />
                    <span className="hidden md:flex">Dashboard</span>
                  </Button>
                </Link>

                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "h-10 w-10",
                    },
                  }}
                />
              </div>
            </SignedIn>
            <SignedOut>
              <SignInButton forceRedirectUrl={"/dashboard"}>
                <Button type="button" variant={"outline"}>
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
