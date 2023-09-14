"use client";
import { motion } from "framer-motion";

export default function Terminal() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1, x: 0}}
    transition={{ duration: 0.5,
    type: "tween",
    ease: "easeInOut",
    }}
    viewport={{ once: true, amount: 0.5 }}

    
      className="flex flex-col justify-center items-center md:h-[calc(100vh_-_10rem)] text-secondary mb-12 md:min-w-[27rem]"
      id="about"
    >
      <div className="flex flex-col justify-center items-center bg-secondary rounded-lg pt-7 p-2 relative md:w-3/4 md:h-[25rem] backdrop-blur-lg shadow-md">
        <div className="flex flex-row justify-center items-center gap-2 absolute top-2 left-3">
          <div className="rounded-full w-3 h-3 bg-red-500"></div>
          <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
          <div className="rounded-full w-3 h-3 bg-green-500"></div>
        </div>
        <div className="bg-primary w-full h-full rounded-lg relative flex flex-col p-2">
          <div className="flex flex-row items-center gap-2">
            <span className="text-green-500 text-sm">
              ➜<span className="text-cyan-600"> ~</span> cat about.md
            </span>
          </div>
          <div className="flex flex-col gap-2 p-2">
            <p className="text-sm">
              ## <span className="text-cyan-600 uppercase">About me</span>
            </p>
            <p className="text-sm">
              
              {`As a university student, I am an ambitious and passionate individual eager to apply my knowledge in software development and actively seeking a position in web development. Ever since a young age, I have been captivated by all things related to IT. Now, I am pursuing my lifelong dream of becoming a software engineer.`}
            </p>
            <p className="text-sm mb-8 md:mb-0">
              {`I'm looking for a job as a web developer (junior/intern level). If you're
              interested in hiring me, please contact me via email.`}
            </p>
            </div>
          <div className="w-full absolute bottom-0">
            <p className="pb-1">
              <span className="text-green-500">
                ➜<span className="text-cyan-600"> ~ </span>
              </span>
              <motion.span
                animate={{ opacity: [1,1,0,0] }}
                transition={{
                  duration: 2,
                  ease: "easeIn",
                  repeat: Infinity,
                  type: "tween",
                }}
                className="text-textColor"
              >
                |
              </motion.span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
