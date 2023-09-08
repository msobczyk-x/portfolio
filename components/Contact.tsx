"use client"
import { motion } from "framer-motion";
export default function Contact() {
    return (
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{once: true, amount: 0.5}}
        className="w-full h-[50vh] flex flex-row"
        >
            <div className="w-1/2 bg-slate-700">

            </div>
<div className="w-1/2 bg-primary"></div>
        </motion.div>
    )
}