import SnippetCard from "./(model)/SnippetCard"
import { AplicationNavbar } from "./AplicationNavbar"

export default function Aplication() {
    return (
        <div className="h-[100dvh] p-2 w-full overflow-scroll">
            <AplicationNavbar />
            <div className="h-auto min-h-[100dvh] bg-gray-200/10 mt-4 rounded-xl flex flex-col justify-center gap-2">
                <SnippetCard />
            </div>
        </div>
    )
}