"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const ServicesWrapper = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<
    | "Front End"
    | "Creative Development"
    | "Anima tion"
    | "Landing pages"
    | "Perform ance optimiz ation"
    | "Animat ion2"
    | "Services"
    | ""
  >("Services");
  console.log(active);
  return (
    <>
      <div className="md:w-6/12 hidden md:block">
        <h1 className="text-8xl  font-bold mb-6 uppercase break-words">
          {active === "" ? "Services" : active}
        </h1>
      </div>
      <div className="md:w-6/12">
        <Accordion
          type="single"
          collapsible
          onValueChange={(value) => setActive(value as any)}
        >
          {children}
        </Accordion>
      </div>
    </>
  );
};

export default ServicesWrapper;
