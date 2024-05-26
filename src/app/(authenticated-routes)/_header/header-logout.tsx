"use client";

import { PrimaryButton } from "@/components/@common/buttons/primary";
import { signOut } from "next-auth/react";

export const HeaderLogout = () => {
  return (
    <PrimaryButton onClick={() => signOut()} className="w-max py-2 px-4">
      Log out
    </PrimaryButton>
  );
};
