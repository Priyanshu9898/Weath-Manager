export const dynamic = "force-dynamic";

import React from "react";

import HeroSection from "@/components/Landing/HeroSection";
import Stats from "@/components/Landing/Stats";
import FAQS from "@/components/Landing/FAQS";
import Testimonials from "@/components/Landing/Testimonials";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Stats />
      <FAQS />
      <Testimonials />
    </div>
  );
};

export default page;
