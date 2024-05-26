import Link from "next/link";
import { HeaderLogout } from "./header-logout";

export const Header = async () => {
  return (
    <header className="active:opacity-50 bg-white fixed z-10 top-0 left-0 flex w-screen justify-between items-center h-[var(--header-height)] px-4 border-b border-primary-800">
      <Link href={"/"} className="no-underline">
        <span className="font-semibold text-2xl">POC</span>
      </Link>

      <HeaderLogout />
    </header>
  );
};
