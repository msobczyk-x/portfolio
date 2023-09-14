"use client"
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
export default function Experience() {
    const experience = [
        {
            title: "Zespół Szkół im. Marii Curie Skłodowskiej w Kętrzynie",
            description: "IT Technician",
            date: "2016 - 2020"
        },
        {
            title: "University of Gdańsk",
            description: "Computer Science, BSc",
            date: "2020 - 2023"
        },
        {
            title: "University of Gdańsk",
            description: "Computer Science, MSc",
            date: "2023 - present"
        }

    ];
    return (
        <motion.div className="pt-12 snap-start snap-always flex flex-col gap-2 text-secondary " id="education"
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.5 }}
        viewport={{once: true, amount: 0.5}}
        >
            <h2 className="uppercase text-xl font-semibold text-textColor">Education</h2>

            <motion.div>
                <ul className="flex flex-col">
                    {(experience.map((experience, index) => (
                        <ExperienceCard key={index} title={experience.title} description={experience.description} date={experience.date} />
                    )))
                    }
                </ul>
            </motion.div>
        </motion.div>
    )
}