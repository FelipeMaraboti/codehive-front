import AsidebarItemsList from "./Asidebar-items-list";


export default function Asidebar() {
    return (
        <aside className="flex flex-col gap-2 w-[250px] h-[100%] bg-gray-200/5 rounded-[20px] py-2 px-3">
            <div className="h-[15%] border-b border-gray-400/70 flex gap-2 items-center">
                <div className="pl-2">
                    <img src="/avatar.png" alt="avatar.png" className="rounded-full" />
                </div>
                <div>
                    <p className="text-[14px]">Felipe Sabino</p>
                    <p className="text-[10px]">felipemarabotti989@gmail.com</p>
                </div>
            </div>
            <div className="h-[80%] border-b border-gray-400/70">
                <AsidebarItemsList />
            </div>
            <div className="h-[5%] flex items-center justify-left">
                <button
                    className="flex items-center justify-left p-3 w-[200px] gap-2"
                >
                    <img src="/logout.png" alt="" />
                    <p className="font-inter text-red-500">Log out</p>
                </button>
            </div>
        </aside>
    )
}