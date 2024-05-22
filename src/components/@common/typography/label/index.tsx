import { cn } from "@/utils/tailwind";
import { ReactNode } from "react";

export const Label = ({ children }: { children: ReactNode }) => {
  return (
    <label
      className={cn("text-black", "text-sm", "cursor-pointer", "font-light")}
    >
      {children}
    </label>
  );
};
