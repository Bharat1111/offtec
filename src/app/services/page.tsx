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
            Our expert frontend developers craft visually stunning and
            responsive user interfaces that ensure a seamless user experience.
            Utilizing the latest technologies and best practices, we transform
            design concepts into interactive, intuitive, and dynamic websites
            that leave a lasting impression on your visitors.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Creative Development">
          <AccordionTrigger>Creative Development</AccordionTrigger>
          <AccordionContent>
            At our creative development wing, we harness innovation and
            imagination to design unique digital experiences tailored to your
            brand&apos;s identity. Our team of creative experts collaborates
            closely with you to understand your vision, bringing it to life
            through imaginative concepts and cutting-edge design.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Animation">
          <AccordionTrigger>Animation</AccordionTrigger>
          <AccordionContent>
            Elevate your brand&apos;s storytelling with captivating animations
            that breathe life into your digital presence. Our skilled animators
            create engaging motion graphics, animated logos, and visually
            appealing content to effectively communicate your brand's message
            and capture your audience&apos;s attention.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Landing pages">
          <AccordionTrigger>Landing pages</AccordionTrigger>
          <AccordionContent>
            Powerful landing pages are essential for converting visitors into
            customers. Our team specializes in crafting high-converting landing
            pages that are optimized for conversions. By focusing on compelling
            design, persuasive copy, and intuitive user flow, we ensure your
            landing pages generate tangible results for your business.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Perform ance optimiz ation">
          <AccordionTrigger>Performance optimization</AccordionTrigger>
          <AccordionContent>
            In today&apos;s fast-paced digital world, website performance is
            crucial for user satisfaction and search engine rankings. Our
            performance optimization services aim to enhance your website&apos;s
            speed, responsiveness, and overall performance, providing visitors
            with a smooth and engaging browsing experience.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Seo">
          <AccordionTrigger>SEO</AccordionTrigger>
          <AccordionContent>
            Drive organic traffic and improve your online visibility with our
            comprehensive SEO strategies. Our SEO experts employ industry best
            practices to optimize your website for search engines, increase
            rankings, and attract targeted traffic that converts into loyal
            customers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Social media marketing">
          <AccordionTrigger>Social media marketing</AccordionTrigger>
          <AccordionContent>
            Our social media experts harness the power of popular social
            platforms to engage your audience, increase brand awareness, and
            drive meaningful interactions. From content creation to strategic
            campaigns, we optimize your social media presence to deliver
            measurable results.
          </AccordionContent>
        </AccordionItem>
      </ServicesWrapper>
    </main>
  );
};

export default Server;
