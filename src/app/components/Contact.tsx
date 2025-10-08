"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdOutlineMail } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React from "react";

const Contact = () => {
  const [eventType, setEventType] = React.useState("");
  return (
    <div
      id="contact"
      className="p-8 pt-15 grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAF5F5] rounded-xl m-8"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg max-w-md text-gray-600 font-sans mb-8">
          Ready to plan your event? Fill out the form or email us directly for
          booking and pricing inquiries. {"Let's "}create something beautiful
          together!
        </p>
        <div className="flex items-center gap-2">
          <MdOutlineMail size={30} className="text-[#D4AF37]" />
          <Link
            className="text-black text-sm md:text-xl hover:underline font-medium"
            href="mailto:contact@therosedecoration.com"
          >
            contact@therosedecoration.com
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4 bg-white p-9 rounded-2xl shadow-md">
          <Label
            className="block text-sm font-medium text-gray-700 mb-2 font-sans"
            htmlFor="name"
          >
            Name
          </Label>
          <Input type="text" placeholder="Your Name" />
          <Label
            className="block text-sm font-medium text-gray-700 mb-2 font-sans"
            htmlFor="email"
          >
            Email
          </Label>
          <Input type="email" placeholder="Your Email" />
          <Label
            className="block text-sm font-medium text-gray-700 mb-2 font-sans"
            htmlFor="eventType"
          >
            Event Type
          </Label>
          <Select value={eventType} onValueChange={setEventType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent className="bg-blush-100">
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="birthday">Birthday</SelectItem>
              <SelectItem value="babyShower">Baby Shower</SelectItem>
              <SelectItem value="engagement">Engagement</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Label
            className="block text-sm font-medium text-gray-700 mb-2 font-sans"
            htmlFor="message"
          >
            Message
          </Label>
          <Textarea
            className="form-textarea w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary transition-all text-gray-700 placeholder:text-gray-400"
            placeholder="Tell us about your event..."
          />
          <Button
            className="mx-auto  bg-blush-500 hover:bg-blush-600 text-white font-bold hover:scale-110 transition-transform cursor-pointer"
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
