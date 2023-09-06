export default function Header() {
    return (
        <header className="sticky top-0 flex max-h-screen w-1/2 flex-col justify-between py-24 pl-24">
            <div>

           
            <h1 className="text-6xl font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ">Maciej Sobczyk</h1>
            <h2 className="text-2xl font-medium">Junior Frontend Developer</h2>
            
            <h3 className="text-secondary"></h3>

            <nav className="flex flex-col text-lg gap-4 mt-12">
                <ul>
                    <li>
                        <a href="#about" className="uppercase">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="uppercase">Projects</a>
                    </li>
                    <li>
                        <a href="#experience" className="uppercase">Experience</a>
                    </li>

                </ul>
           
            </nav>
            </div>
        </header>
    )
}