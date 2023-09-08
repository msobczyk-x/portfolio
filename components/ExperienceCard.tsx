type ExperienceCardProps = {
    key: number;
    title: string;
    description: string;
    date: string;
};
import './styles/ExperienceCard.css'
export default function ExperienceCard(cardData: ExperienceCardProps) {
    return (
        <li className={`flex w-full min-h-32 flex-col border-l-2 experienceCard relative border-secondary pl-4 py-2 first-of-type:py-0 text-textC hover:border-accent hover:before:bg-accent2 transition-all select-none hover:text-textColor`}>
            <h3 className="uppercase">{cardData.title}</h3>
            <h5>{cardData.description}</h5>
            <p>{cardData.date}</p>

        </li>
    )
}