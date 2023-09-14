"use client"
import Image from "next/image";
import GithubLogo from "../public/githubico.svg";
import LinkedInIcon from "../public/linkedinicon.svg";
import EmailIcon from "../public/emailico.svg";
import { useEffect, useState } from "react";
export default function Socials() {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  }, [isCopied]);

  return (
    <div className="flex flex-row gap-4 pt-4 items-center">
      <a
        href="https://www.linkedin.com/in/maciej-sobczyk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={LinkedInIcon} alt="LinkedIn" width={22} height={22} className="social-icon"></Image>
      </a>
      <a
        href="https://www.github.com/msobczyk-x"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={GithubLogo} alt="Github" width={24} height={24} className="social-icon"></Image>

      </a>
      <a onClick={()=> {
        setIsCopied(true);
        navigator.clipboard.writeText("m.sobczyk55@wp.pl");
      }}
      className="cursor-pointer relative"
      >
      <Image src={EmailIcon} alt="Email" width={28} height={28} className="social-icon" ></Image>
      {isCopied &&
      <div className="absolute bg-slate-500 w-48 flex text-xs items-center justify-center p-1 rounded -left-20">
          <p>Email saved to clipboard!</p>
      </div>
}
      </a>
      
    </div>
  );
}
