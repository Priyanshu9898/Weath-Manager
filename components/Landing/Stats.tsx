import React from "react";

const Stats = () => {
  return (
    <>
      <div className="bg-gray-50 section w-full">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {/* Heading & Intro */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Trusted by Finance Enthusiasts
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              Our AI-powered platform is transforming how people manage their
              money— from everyday expenses to long-term wealth planning.
            </p>
          </div>

          {/* Stats Section */}
          <dl className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {/* 1. Active Users */}
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Active Users
              </dt>
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                50K+
              </dd>
            </div>

            {/* 2. Transactions Tracked */}
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Transactions Tracked
              </dt>
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                $2B+
              </dd>
            </div>

            {/* 3. Uptime */}
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Uptime
              </dt>
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                99.9%
              </dd>
            </div>

            {/* 4. User Rating */}
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                User Rating
              </dt>
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                4.9/5
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default Stats;
