"use client"
import { motion } from "framer-motion";
export default function About() {
    return (
        <motion.div className="h-screen pt-12 snap-proximity snap-start snap-always" id="about"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{once: true, amount: 0.5}}
        >
            <h2 className="uppercase">About</h2>

            <p className="text-secondary">As a university student, I am an ambitious and passionate individual eager to apply my knowledge in software development and actively seeking a position in web development. Ever since a young age, I have been captivated by all things related to IT. Now, I am pursuing my lifelong dream of becoming a software engineer.</p>
            </motion.div>
    )
}