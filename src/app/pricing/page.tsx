import PriceCard from "@/components/PriceCard";
import React from "react";
import { Switch } from "@/components/ui/switch";

const Pricing = () => {
  return (
    <main className="flex flex-col gap-8 py-6 w-full md:py-12 px-[6%] items-center">
      <h1 className="font-semibold text-3xl">
        Choose your plan and make your first ad in minutes
      </h1>
      <div className="flex gap-3  ">
        <p className=" font-medium text-gray-400">Bill Monthly</p>

        <Switch />

        <p className=" font-medium text-gray-400">Bill Yearly</p>
      </div>
      <div className="flex  flex-col w-full md:flex-row gap-8 md:gap-8 items-center justify-center">
        <PriceCard
          price={23}
          title="Standard"
          desc="All the basics for businesses that are just getting started."
          list={[
            "Single project user",
            "Basic Dashboard",
            "All components included",
            "All components included",
          ]}
          bgColor="bg-black"
        />
        <PriceCard
          price={56}
          title="Essentials"
          desc="Better for growing businesses that want more customers."
          list={[
            "Unlimited project user",
            "Advance Insights",
            "All components included",
            "Advance Insights",
          ]}
          bgColor="bg-black"
        />
        <PriceCard
          price={78}
          title="Premium"
          desc="All the elements for businesses that are just getting started."
          list={[
            "Unlimited project user",
            "Advance Dashboard",
            "All components included",
            "All components included",
          ]}
          bgColor="bg-black"
        />
      </div>
    </main>
  );
};

export default Pricing;
