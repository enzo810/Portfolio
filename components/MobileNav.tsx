"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { links } from "./Nav";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const findVisibleSection = () => {
      let currentSection = "home";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight * 0.6) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    findVisibleSection();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-neon drop-shadow-neon" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center">
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
        <div className="text-center text-2xl mb-8">
          <Link href="/">
            <h1 className="text-2xl font-semibold">
              Portfolio <span className="text-neon drop-shadow-neon">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              onClick={() => setOpen(false)}
              href={link.path}
              key={index}
              className={cn(
                "text-xl capitalize hover:text-accent transition-all",
                activeSection === link.id &&
                  "text-neon drop-shadow-neon border-b-2 border-neon"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
