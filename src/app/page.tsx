"use client";
import { PrimaryButton } from "@/components/@common/buttons/primary";
import { Heading1 } from "@/components/@common/typography/heading";
import { Paragraph } from "@/components/@common/typography/paragraph";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <main className="mt-[22%] flex justify-center items-start">
      <div className="grid gap-6">
        <Heading1>WEB BFF POC</Heading1>
        <Paragraph>Do stuff here</Paragraph>
        <PrimaryButton onClick={() => signOut()}>Sign out</PrimaryButton>
      </div>
    </main>
  );
}
