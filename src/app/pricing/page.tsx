import PriceCard from "@/components/PriceCard";
import React from "react";
import { Switch } from "@/components/ui/switch";

const Pricing = () => {
  return (
    <div className="flex flex-col gap-2 w-full md:py-14 px-[6%] items-center">
      <p className="font-semibold text-2xl">
        Choose your plan and make your first ad in minutes
      </p>
      <div className="flex gap-3">
        <p className="text-sm font-medium text-gray-400">Bill Monthly</p>

        <Switch />

        <p className="text-sm font-medium text-gray-400">Bill Yearly</p>
      </div>
      <div className="flex mt-10 justify-between flex-col md:flex-row gap-8 md:gap-12">
        <PriceCard
          price={23}
          title="Standard"
          desc="All the basics for businesses that are just getting started."
          list={[
            "Single project user",
            "Basic Dashboard",
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
          ]}
          bgColor="bg-black"
        />
      </div>
    </div>
  );
};

export default Pricing;
