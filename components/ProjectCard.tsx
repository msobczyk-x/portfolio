"use client"
import Image from 'next/image';
import { motion } from "framer-motion";
type ProjectCardProps = {

    title: string;
    description: string;
    image: string | any;
    link: string;
    github: string;
    technologies: string[];
};

export default function ProjectCard(cardData: ProjectCardProps) {

    return ( 
        <motion.div className='flex flex-col justify-center hover:bg-slate-700 hover:scale-105 hover:backdrop-blur-xl transition-all px-1 rounded group cursor-pointer select-none min-h-32 hover:shadow-md'
        initial={{  y: 100}}
        whileInView={{ y: 0}}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut"}}
        viewport={{ once: true, amount: "some"}}
        onClick={() => {
            window.open(cardData.link, "_blank");
        }
        }
        >
            
<h3 className="text-secondary font-semibold uppercase  group-hover:text-textColor group-hover:after:content-['↗'] group-hover:after:ml-2 ">{cardData.title}</h3>
        <div className="flex flex-row gap-2 ">
            <Image src={cardData.image} alt={cardData.title} className='w-1/4 h-32 max-w-64 '></Image>
            <div className='flex flex-col gap-2 justify-center'>
            
            <p className="text-secondary group-hover:text-textColor text-md">{cardData.description}</p>
            <div className="flex flex-row gap-2 flex-wrap">
                {cardData.technologies.map((technology) => (
                    <div key={technology} className='bg-slate-700  rounded-xl p-1  font-light  group-hover:bg-slate-500  '>

                    <span  className="text-textColor  text-sm px-2">{technology}</span>
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