import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <>
      <section className=" text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex  lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-sky-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Manage Your Expenses
              <span className="sm:block"> with AI-Driven Insights. </span>
            </h1>

            <p className="mx-auto text-gray-600 mt-4 max-w-xl sm:text-xl/relaxed">
              Leverage cutting-edge artificial intelligence to track your daily
              spending, uncover hidden costs, and create a personalized budget
              in real-time. Gain clarity over your finances and secure a
              prosperous future.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/sign-in">
                <Button
                  className="w-full rounded-lg border border-purple-600 bg-gradient-to-r from-sky-300 via-blue-500 to-purple-600 px-12 py-6 text-sm font-medium text-white 
                 transition-all duration-300 ease-in-out 
                 hover:scale-105 hover:shadow-xl 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 active:opacity-90
                 sm:w-auto"
                >
                  Get Started
                </Button>
              </Link>

              <Link href="https://github.com/Priyanshu9898/Weath-Manager">
                <Button
                  variant="outline"
                  className="w-full rounded-lg border border-blue-600 px-12 py-6 text-sm font-medium text-gray-600
                 transition-all duration-300 ease-in-out 
                 hover:bg-gradient-to-r from-sky-300 via-blue-500 to-purple-600 hover:text-white hover:scale-105 hover:shadow-xl
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 active:bg-blue-500
                 sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
