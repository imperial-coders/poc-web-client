import { ReactNode } from "react";
import LoginForm from "./login-form";
import { OptimizedBackgroundImage } from "@/components/@common/optimized-background-image";
import { Heading1, Heading4 } from "@/components/@common/typography/heading";
import { cn } from "@/utils/tailwind";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center relative min-h-screen">
      <OptimizedBackgroundImage
        src="/images/interior-design.jpg"
        alt="simple yet elegant room designed by interior designer. Thank you https://unsplash.com/@spacejoy for the free image"
      />

      <Section>
        <Heading1 className="text-center">WEB BFF POC</Heading1>
        <Heading4>Sign in/up</Heading4>
        <LoginForm />
      </Section>
    </div>
  );
}

const Section = ({
  className = "",
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "grid gap-6 px-10 py-40 justify-center items-center min-h-screen content-baseline justify-items-center z-10 bg-[rgba(255,255,255,0.2)]",
        className
      )}
    >
      {children}
    </section>
  );
};
