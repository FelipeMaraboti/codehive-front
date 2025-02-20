export default function Navbar() {
    return (
        <nav className="flex flex-col h-10 w-full justify-between px-4 mb-[40px] md:flex-row md:mb-[80px]">
            <div className="flex items-center justify-center mb-6 md:mb-0">
                <img src="./logo.png" alt="logo.png" />
            </div>
            <div className="flex items-center justify-center">
                <ul className="flex md:gap-6 gap-2">
                    <li className="border-r border-white pr-4 md:pr-6">
                        <a href="/about">About</a>
                    </li>
                    <li className="border-r border-white pr-4 md:pr-6">
                        <a href="/docs">Docs</a>
                    </li>
                    <li className="border-r border-white pr-4 md:pr-6">
                        <a href="/about">Try Now</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


