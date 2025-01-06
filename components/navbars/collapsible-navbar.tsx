"use client";
import { useState } from "react";

import { navLinks } from "@/lib/constants";
import Link from "next/link";
import { SearchIcon } from "../icons/search-icon";
import { DividerVerticalIcon } from "../icons/divider-vertical";
import { cn } from "@/lib/helpers";
import { PageContainer } from "../page-container";

import { NavbarToggle } from "./navbar-toggle";

export const CollapsibleNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={cn("ease-in top-0 right-0 z-50 left-0 bg-transparent")}>
      <PageContainer className="transition-all duration-300 flex py-6">
        <section className="w-full flex items-center gap-4 justify-between bg-white rounded-[20px] p-5 flex-col md:flex-row">
          <div className="w-full md:w-auto flex items-center justify-between">
            <Link href="/" className="text-primary">
              <button className="bg-gray-700 text-white">LOGO</button>
            </Link>
            <div className="z-20 flex items-center gap-2 md:hidden">
              <SearchIcon />
              <NavbarToggle open={open} toggle={() => setOpen(!open)} />
            </div>
          </div>
          <div
            className="overflow-hidden grid transition-all duration-200 w-full md:hidden"
            style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
          >
            <ul className="transition-all duration-500 min-h-0 items-center justify-between text-base">
              {navLinks.map(({ label, path }, idx) => (
                <li key={idx}>
                  <Link href={path} className="h-full block relative mx-auto">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="gap-4 lg:gap-20 hidden md:flex justify-between m-auto">
            {navLinks.map(({ label, path }, idx) => (
              <li key={idx}>
                <Link href={path} className="h-full block relative mx-auto">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-2">
            <SearchIcon />
            <DividerVerticalIcon />
            <p>Profile</p>
          </div>
        </section>
      </PageContainer>
    </nav>
  );
};
