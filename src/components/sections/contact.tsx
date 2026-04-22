"use client";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  const hasDirectEmail = Boolean(config.email);

  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">
              {hasDirectEmail ? "Contact Form" : "Direct Contact"}
            </CardTitle>
            <CardDescription>
              {hasDirectEmail
                ? "Please contact me directly by email or drop your info here."
                : "The fastest way to connect right now is through Behance, where the full case studies are also available."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {hasDirectEmail ? (
              <ContactForm />
            ) : (
              <div className="flex flex-col gap-4">
                <Link href={config.social.behance || config.featuredLink.href} target="_blank">
                  <Button className="w-full">Open Behance Profile</Button>
                </Link>
                <Link href="#projects">
                  <Button variant={"outline"} className="w-full">
                    Browse Selected Projects
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
