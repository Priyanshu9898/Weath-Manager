import React from "react";

const FAQS = () => {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 text-base text-gray-600 sm:text-lg">
          Everything you need to know about our AI-driven expense management
          platform.
        </p>
      </div>

      <div className="mx-auto max-w-xl space-y-4">
        {/* 1. How does the AI track my expenses? */}
        <details
          className="group rounded-lg border border-gray-200 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between p-4 text-gray-900 transition-colors duration-200 hover:bg-gray-50">
            <h2 className="font-semibold">
              How does your AI track my daily expenses?
            </h2>
            <svg
              className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-2 px-4 pb-4 text-gray-700 leading-relaxed">
            Our platform securely connects to your bank and credit card
            accounts, then uses AI-powered algorithms to categorize and track
            your expenses in real-time. You&apos;ll see a clear view of where
            your money goes without having to lift a finger.
          </p>
        </details>

        {/* 2. Is my financial data safe with you? */}
        <details className="group rounded-lg border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between p-4 text-gray-900 transition-colors duration-200 hover:bg-gray-50">
            <h2 className="font-semibold">
              Is my financial data safe with you?
            </h2>
            <svg
              className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-2 px-4 pb-4 text-gray-700 leading-relaxed">
            Absolutely. We employ bank-grade encryption and comply with all
            relevant data security standards. Your information is never shared
            without your permission, and we continuously monitor our systems for
            potential vulnerabilities.
          </p>
        </details>

        {/* 3. How does the AI help me save money? */}
        <details className="group rounded-lg border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between p-4 text-gray-900 transition-colors duration-200 hover:bg-gray-50">
            <h2 className="font-semibold">
              How does the AI help me save money?
            </h2>
            <svg
              className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-2 px-4 pb-4 text-gray-700 leading-relaxed">
            By analyzing your spending habits, our AI identifies opportunities
            to reduce unnecessary expenses, offers budgeting recommendations,
            and even predicts future spending patterns. This holistic approach
            helps you make smarter financial decisions and reach your goals
            faster.
          </p>
        </details>

        {/* 4. Can I link multiple bank accounts? */}
        <details className="group rounded-lg border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between p-4 text-gray-900 transition-colors duration-200 hover:bg-gray-50">
            <h2 className="font-semibold">
              Can I link multiple bank accounts?
            </h2>
            <svg
              className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-2 px-4 pb-4 text-gray-700 leading-relaxed">
            Yes, our platform supports multiple accounts across various
            financial institutions. This gives you a comprehensive overview of
            your finances in one place, making it easier to manage and track
            your spending.
          </p>
        </details>
      </div>
    </section>
  );
};

export default FAQS;
