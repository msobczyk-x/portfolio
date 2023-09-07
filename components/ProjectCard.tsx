"use client"
import Image from 'next/image';
import GithubLogo from '../assets/github-mark-white.svg';
import { motion } from "framer-motion";
type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
    github: string;
    technologies: string[];
};

export default function ProjectCard(cardData: ProjectCardProps) {

    return ( 
        <motion.div className='flex flex-col justify-center hover:bg-slate-700 hover:scale-105 hover:backdrop-blur-xl transition py-2 px-1 rounded group cursor-pointer'
        initial={{ opacity: 0, y: 100}}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.2, ease: "easeIn" }}
        viewport={{ once: true, amount: "all" }}
        onClick={() => {
            window.open(cardData.link, "_blank");
        }
        }
        >
            
<h3 className="text-secondary font-semibold uppercase text-lg">{cardData.title}</h3>
        <div className="flex flex-row gap-2 items-center">
            <Image src={cardData.image} alt={cardData.title} className='w-64 h-32'></Image>
            <div className='flex flex-col gap-2 justify-center'>
            
            <p className="text-secondary">{cardData.description}</p>
            <div className="flex flex-row gap-2 flex-wrap">
                {cardData.technologies.map((technology) => (
                    <div key={technology} className='bg-slate-700  rounded-xl p-1 text-sm font-light group-hover:bg-slate-600'>

                    <span  className="text-textColor">{technology}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-row gap-2">
{/*                 {cardData.link && (
                    <a href={cardData.link} target="_blank" rel="noopener noreferrer">
                        <span className="text-secondary">Link</span>
                    </a>
                )} */}
            
            </div>
       {/*      <a href={cardData.github} target="_blank" rel="noopener noreferrer">
                    <Image src={GithubLogo} alt="Github" width={24} height={24} className=''></Image>
               
                </a> */}
            </div>
            
        </div>
        </motion.div>


    )

}