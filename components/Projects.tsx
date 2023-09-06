"use client"
import { motion } from "framer-motion";
export default function Projects() {
    return (
        <motion.div id="projects" className="pt-12 h-screen snap-proximity snap-start snap-always"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{once: true, amount: 0.5}}
        >
            <h2 className="uppercase">Projects</h2>
            </motion.div>
    )

}