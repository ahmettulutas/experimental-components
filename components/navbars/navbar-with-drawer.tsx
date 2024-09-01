"use client";
// import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "@/lib/constants";
import Link from "next/link";
import { SearchIcon } from "../icons/search-icon";
import { DividerVerticalIcon } from "../icons/divider-vertical";
import { cn } from "@/lib/helpers";
import { PageContainer } from "../page-container";
import { NavbarToggle } from "./navbar-toggle";

type NavbarWithDrawerProps = {
  transparent: boolean;
  bordered?: boolean;
};

export const NavbarWithDrawer = (props: NavbarWithDrawerProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 70) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getClassNames = () => {
    const baseClass = scrolled ? "fixed" : "absolute";
    const backgroundColor = "bg-transparent";
    const textColor = "text-textSecondary";

    return `${baseClass} ${backgroundColor} ${textColor}`.trim();
  };

  return (
    <nav
      className={cn(
        "ease-in top-0 right-0 z-50 left-0 bg-transparent",
        getClassNames()
      )}
    >
      <PageContainer
        className={twMerge(
          "transition-all duration-300 flex py-6",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <section className="w-full flex items-center gap-4 justify-between bg-white rounded-[20px] p-5">
          <Link href="/" className="text-primary">
            <div
              aria-label="aksandık logo"
              className="bg-gray-400 rounded-3xl px-2 text-white"
            >
              LOGO
            </div>
          </Link>
          <ul className="gap-4 lg:gap-20 hidden md:flex justify-between m-auto">
            {navLinks.map(({ label, path }, idx) => (
              <li key={idx}>
                <Link
                  href={path}
                  className={`h-full block relative mx-auto ${
                    scrolled ? "before:h-1" : "before:h-0.25"
                  }`}
                >
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
        <div className="z-20 md:hidden">
          <NavbarToggle open={open} toggle={() => setOpen(!open)} />
        </div>
      </PageContainer>
    </nav>
  );
};
