type HeaderProps = {
    targetIds: string[];
  };
import Socials from "./Socials";
export default function HeaderMobile({ targetIds }: HeaderProps) {

    return (
        <div className="flex flex-col gap-4 justify-center items-center mt-12 text-center">
            <h1 className="text-6xl font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                Maciej Sobczyk
            </h1>
            <h2 className="text-2xl font-medium">Junior Frontend Developer</h2>

            <h3 className="text-secondary"></h3>
            <Socials />
        </div>

    )
}