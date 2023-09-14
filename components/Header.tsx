"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./styles/Header.css";
import Socials from "./Socials";
type HeaderProps = {
  targetIds: string[];
};

export default function Header({ targetIds }: HeaderProps) {
  const [activeId, setActiveId] = useState<null | string>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 96;
      let foundActive = false;

      for (const id of targetIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveId(id);
            foundActive = true;
            break;
          }
        }
      }
      if (scrollY + window.innerHeight >= document.body.scrollHeight) {
        setActiveId(targetIds[targetIds.length - 1]);
        foundActive = true;
      }
      if (!foundActive) {
        setActiveId(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetIds]);

  return (
    <motion.header
      className="sticky top-0 flex max-h-screen w-1/3 flex-col justify-center py-24 pl-24 "
      initial={{ opacity: 0, x:-100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: "some" }}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          Maciej Sobczyk
        </h1>
        <h2 className="text-2xl font-medium">Junior Frontend Developer</h2>

        <h3 className="text-secondary"></h3>

        <nav className="flex flex-col text-lg gap-4 mt-12" id="navbar">
          <ul>
            {targetIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (id === "about") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      return;
                    }
                    document.getElementById(id)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className={`uppercase anchor hover:text-accent ${
                    activeId === id ? "active" : ""
                  }`}
                >
                  {id}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Socials />
    </motion.header>
  );
}
