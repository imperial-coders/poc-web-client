import { cn } from "@/utils/tailwind";
import { ReactNode } from "react";

export const ErrorLabel = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={cn("text-sm", "cursor-pointer", "font-light", "color-danger")}
    >
      {children}
    </div>
  );
};
