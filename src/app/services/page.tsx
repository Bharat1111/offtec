import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServicesWrapper from "@/components/Services";

const Server = () => {
  return (
    <main className=" py-3 md:py-10 px-[6%] flex flex-col md:flex-row gap-10 container">
      <ServicesWrapper>
        <AccordionItem value="Front End">
          <AccordionTrigger>Front End</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Creative Development">
          <AccordionTrigger>Creative Development</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Anima tion">
          <AccordionTrigger>Animation</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Landing pages">
          <AccordionTrigger>Landing pages</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Perform ance optimiz ation">
          <AccordionTrigger>Performance optimization</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Animat ion2">
          <AccordionTrigger>Animation</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </ServicesWrapper>
    </main>
  );
};

export default Server;
