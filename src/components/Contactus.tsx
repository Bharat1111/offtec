"use client";

import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm, Controller, set } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Input from "@/components/Input";
import { db } from "@/lib/firebaseconfig";
const Contactus = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const addData = async (data: any) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "contactus"), data);
      console.log("Document written with ID: ", docRef.id);
      setSuccess(true);
      setLoading(false);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-6 col-span-12 md:col-span-9"
      onSubmit={handleSubmit((data) => {
        addData(data);
      })}
    >
      <div className="flex flex-col gap-1">
        <p className="  tracking-wide text-gray-500  uppercase">Hire us</p>
        <h2 className="text-6xl  font-medium uppercase">
          A project with offtec?
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium  text-gray-500  ">Sevices</p>
        <Controller
          name="services"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <RadioGroup
              defaultValue=""
              className="flex gap-3 flex-wrap"
              onValueChange={(value) => field.onChange(value)}
              value={field.value}
            >
              {[
                "Branding",
                "UI/UX Design",
                "Web Development",
                "Mobile Development",
                "Illustration",
                "Motion Graphics",
                "3D Design",
                "Other",
              ].map((item, index) => (
                <Label
                  htmlFor={item}
                  key={index}
                  className="flex font-normal hover:shadow-inner cursor-pointer flex-col text-xs items-center justify-center text-gray-500 bg-gray-100 rounded-full border-2 border-muted  px-6 py-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:bg-black  [&:has([data-state=checked])]:text-white"
                >
                  <RadioGroupItem value={item} id={item} className="sr-only" />
                  {item}
                </Label>
              ))}
            </RadioGroup>
          )}
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium  text-gray-500  ">Your Budget</p>
        <Controller
          name="budget"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <RadioGroup
              defaultValue=""
              className="flex gap-3 flex-wrap"
              onValueChange={(value) => field.onChange(value)}
              value={field.value}
            >
              {["2K-10K", "10K-20K", "20K-50K", "More than 50K"].map(
                (item, index) => (
                  <Label
                    htmlFor={item}
                    key={index}
                    className="flex font-normal flex-col hover:shadow-inner cursor-pointer text-xs items-center justify-center text-gray-500 bg-gray-100 rounded-full border-2 border-muted  px-6 py-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:bg-black  [&:has([data-state=checked])]:text-white"
                  >
                    <RadioGroupItem
                      value={item}
                      id={item}
                      className="sr-only"
                    />
                    {item}
                  </Label>
                )
              )}
            </RadioGroup>
          )}
        />
      </div>
      <div className="flex gap-6 flex-col md:flex-row">
        <Input
          label="Your Name"
          name="name"
          register={register}
          required={true}
        />
        <Input
          label="Your Email"
          name="email"
          register={register}
          required={true}
          pattern={/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}
        />
      </div>
      <div>
        <Input
          label="Project Details (Optional)"
          name="details"
          register={register}
        />
      </div>

      <button
        type="submit"
        className={`bg-black hover:shadow-inner
                    transition duration-500 ease-in-out
                    ${
                      success
                        ? "bg-green-500 hover:bg-green-500"
                        : loading
                        ? "bg-black"
                        : "bg-black hover:bg-accent hover:text-accent-foreground"
                    }
        text-white flex items-center uppercase text-sm tracking-wide font-semibold justify-center h-28 w-28 rounded-full  mx-auto`}
      >
        {loading ? (
          <svg
            className="animate-spin  h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        ) : success ? (
          "Thank you"
        ) : (
          "Send"
        )}
      </button>
    </form>
  );
};

export default Contactus;
