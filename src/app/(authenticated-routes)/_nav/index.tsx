"use client";

import { A11y } from "@/components/@common/buttons/a11y";
import { NextLink } from "@/components/@common/typography/link";
import { COLORS } from "@/utils/tailwind";
import { mdiCard, mdiCreditCard, mdiHome, mdiRecord } from "@mdi/js";
import Icon from "@mdi/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const PATHS = {
  home: "/home",
  transactions: "/transactions",
};

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <section className="w-[var(--navigation-aside-collapsed-width)] lg:w-[var(--navigation-aside-expanded-width)] border-r border-l-primary-800 h-full">
      <NextLink href={PATHS.home}>
        <NavigationButton isActive={pathname === PATHS.home}>
          <Icon
            path={mdiHome}
            color={
              pathname === PATHS.home
                ? // @ts-ignore => TODO overwride tailwind type
                  COLORS.primary.default
                : // @ts-ignore => TODO overwride tailwind type
                  COLORS.primary[600]
            }
          />
          <NavigationButtonText>Dashboard</NavigationButtonText>
        </NavigationButton>
      </NextLink>

      <NextLink href={PATHS.transactions}>
        <NavigationButton isActive={pathname === PATHS.transactions}>
          <Icon
            path={mdiCreditCard}
            color={
              pathname === PATHS.transactions
                ? // @ts-ignore => TODO overwride tailwind type
                  COLORS.primary.default
                : // @ts-ignore => TODO overwride tailwind type
                  COLORS.primary[600]
            }
          />
          <NavigationButtonText>Dashboard</NavigationButtonText>
        </NavigationButton>
      </NextLink>
    </section>
  );
};

const NavigationButton = ({
  isActive,
  children,
}: {
  isActive?: boolean;
  children: ReactNode;
}) => {
  return (
    <A11y
      className="rounded-none text-muted border-l-2 lg:grid lg:grid-cols-[1.5em_1fr] lg:gap-4 lg:text-left p-1 lg:px-2 lg:py-2"
      style={{
        // @ts-ignore => TODO overwride tailwind type
        borderColor: isActive ? COLORS.info.default : "transparent",
        // @ts-ignore => TODO overwride tailwind type
        color: isActive ? COLORS.info.default : COLORS.black,
      }}
    >
      {children}
    </A11y>
  );
};

const NavigationButtonText = ({ children }: { children: ReactNode }) => {
  return <div className="hidden lg:block">{children}</div>;
};
