"use client"
import { motion } from "framer-motion";

export default function Terminal() {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh_-_9rem)]">
      <div className="flex flex-col justify-center items-center bg-secondary rounded-lg pt-7 p-2 relative w-3/4 h-2/4">
        <div className="flex flex-row justify-center items-center gap-2 absolute top-2 left-3">
          <div className="rounded-full w-3 h-3 bg-red-500"></div>
          <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
          <div className="rounded-full w-3 h-3 bg-green-500"></div>
        </div>
        <div className="bg-primary w-full h-full rounded-lg relative">
            <div className="w-full border-t-2 border-cyan-600 absolute bottom-0">
                <p className="p-1">
                    <span className="text-cyan-600">maciej</span>@<span className="text-cyan-600">sobczyk</span>:<span className="text-cyan-600">~</span>$ <motion.span
                
                    animate={{ opacity: [0,1,0] }}
                   transition={{
                    duration:2,
                    ease: "easeIn",
                    repeat: Infinity,
                   }}

                    >|</motion.span>

                </p>
            </div>

        </div>
      </div>
    </div>
  );
}
