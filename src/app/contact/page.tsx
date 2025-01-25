"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [forminput, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormInput({
      ...forminput,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(forminput),
      });

      const data = await res.json();
      if (res.ok) {
        console.log("mukund chhapri");
      } else {
        console.error(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
    }
    setFormInput({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-neutral-950 min-h-screen w-full flex flex-col p-10 items-center">
      <div className="flex flex-col space-y-4 w-[90%] md:w-[50%] mt-20">
        <h1 className="text-3xl text-white">Let&apos;s Connect!</h1>
        <p className="text-lg text-neutral-500">
          Any questions or want to get in touch? Fill out the form, and I&apos;ll
          get back to you!
        </p>
      </div>
      <div className="flex flex-col space-y-2 w-[90%] md:w-[50%] mt-10">
        <Label htmlFor="ta3" className="text-white text-lg">
          Your Name
        </Label>
        <Input
          id="ta3"
          placeholder="Enter your name here."
          className="w-full bg-neutral-700 text-white border border-neutral-600 p-2 rounded-lg"
          value={forminput.name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col space-y-2 w-[90%] md:w-[50%] mt-10">
        <Label htmlFor="ta2" className="text-white text-lg">
          Your Email
        </Label>
        <Input
          id="ta2"
          placeholder="Enter your email here."
          className="w-full bg-neutral-700 text-white border border-neutral-600 p-2 rounded-lg"
          value={forminput.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col space-y-2 w-[90%] md:w-[50%] mt-10">
        <Label htmlFor="ta1" className="text-white text-lg">
          Your Message
        </Label>
        <Textarea
          id="ta1"
          placeholder="Enter your message here."
          className="w-full bg-neutral-700 text-white border border-neutral-600 p-2 rounded-lg"
          value={forminput.message}
          name="message"
          onChange={handleChange}
        />
      </div>
      <Button
        className="bg-white w-[90%] md:w-[50%] m text-black px-8 font-bold text-[14px] hover:bg-neutral-300 hover:bg-opacity-90 hover:text-black mt-10"
        onClick={HandleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default Page;
