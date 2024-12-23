import React from "react";

import HeroSection from "@/components/Landing/HeroSection";
import Stats from "@/components/Landing/Stats";
import FAQS from "@/components/Landing/FAQS";
const page = () => {
  return (
    <div>
      <HeroSection />
      <Stats />
      <FAQS />
    </div>
  );
};

export default page;
