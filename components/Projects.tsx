"use client"
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const projects = [
        {
            title: "Tripsync",
            description: "TripSync is a mobile application designed to streamline and enhance the organization and management of school trips, providing features such as real-time student location tracking and instant alerts for teachers in case of student separation.",
            image: "",
            link: "https://github.com/msobczyk-x/TripSync",
            github: "",
            technologies: ["React Native","Typescript", "Socket.Io", "Express.js", "MongoDB", "Google Maps API"]
        },
        {
            title: "Vibe",
            description: "Vibe is a university group project where we developed a chatting application that utilizes hobby-based matching. Our aim was to create an interactive platform that connects individuals based on their shared interests. I was in charge of the frontend part. ",
            image: "",
            link: "https://github.com/msobczyk-x/chat-app",
            github: "",
            technologies: ["React.js","Typescript", "TailwindCSS", "Socket.Io", "Express.js", "MongoDB"]
        },
        {
            title: "Car rental fullstack website",
            description: "It features an intuitive interface for customers to browse and reserve vehicles, along with a robust back-end infrastructure for managing car information, user data, reservations.",
            image: "",
            link: "https://github.com/msobczyk-x/car-rental-fullstack",
            github: "",
            technologies: ["React.js","Javascript", "Django", "PostgreSQL", "Python"]
        },
        {
            title: "Tunemate",
            description: "Tunemate is a music application that is designed to replicate the features and functionality of the popular music streaming service, Spotify. This project utilizes the Spotify API to fetch data and play music.",
            image: "",
            link: "https://github.com/msobczyk-x/music-app",
            github: "",
            technologies: ["React.js","Typescript", "Spotify API", "TailwindCSS", "Firebase", "Sass","React Redux"]
        },
        {
            title: "Google Chrome Dino Game",
            description: "Popular Dinogame recreated in Go using the Ebiten library.",
            image: "",
            link: "https://github.com/msobczyk-x/dinogame",
            github: "",
            technologies: ["Go","Ebiten"]
        },
        {
            title: "Snake game",
            description: "Snake game created with React and Typescript.",
            image: "",
            link: "https://msobczyk-x.github.io/snake-game/build/",
            github: "",
            technologies: ["React.js","Typescript", "TailwindCSS"]
        }


    ]
    return (
        <motion.div id="projects" className="pt-12 snap-proximity snap-start snap-always flex flex-col gap-2"
     
        >
            <motion.h2 className="uppercase text-xl font-semibold"
               initial={{ opacity: 0, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
               viewport={{once: true, amount: 0.5}}
            >Projects</motion.h2>

            <div className="flex flex-col gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} title={project.title} description={project.description} image={project.image} link={project.link} github={project.github} technologies={project.technologies} />
                ))}


            </div>
            </motion.div>
    )

}