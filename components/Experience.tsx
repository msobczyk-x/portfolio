"use client"
import { motion } from "framer-motion";
export default function Experience() {
    return (
        <motion.div className="h-screen pt-12 snap-start snap-always" id="experience"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{once: true, amount: 0.5}}
        >
            <h2 className="uppercase">Experience</h2>
        </motion.div>
    )
}