export default function Header() {
    return (
        <div className="w-1/3 flex flex-col gap-y-3">
            <h1 className="text-6xl font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ">Maciej Sobczyk</h1>
            <h2 className="text-2xl font-medium">Junior Frontend Developer</h2>
            <h3 className="text-secondary">As a university student, I am an ambitious and passionate individual eager to apply my knowledge in software development and actively seeking a position in web development. Ever since a young age, I have been captivated by all things related to IT. Now, I am pursuing my lifelong dream of becoming a software engineer.</h3>
            <div className="flex flex-col text-lg gap-4 mt-12">
                <a className="uppercase">About</a>
                <a className="uppercase">Projects</a>
                <a className="uppercase">Experience</a>
            </div>
        </div>
    )
}