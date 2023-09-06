"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./styles/Header.css";
type HeaderProps = {
  targetIds: string[];
};

export default function Header({ targetIds }: HeaderProps) {
  const [activeId, setActiveId] = useState<null | string>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          Maciej Sobczyk
        </h1>
        <h2 className="text-2xl font-medium">Junior Frontend Developer</h2>

        <h3 className="text-secondary"></h3>

        <nav className="flex flex-col text-lg gap-4 mt-12" id="navbar">
          <ul>
            {/*        <li className="">
              <a href="#about" className="uppercase ">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="uppercase ">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="uppercase ">
                Experience
              </a>
            </li> */}

            {targetIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`uppercase ${
                    activeId === id ? "active show" : ""
                  }`}
                >
                  {id}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
