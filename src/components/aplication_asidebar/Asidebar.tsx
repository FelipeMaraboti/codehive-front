'use client'

import { useState } from "react";

import { useSession } from "next-auth/react";

import { signOut } from "next-auth/react";
import { IoCode } from "react-icons/io5";
import { LuShare } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";


export default function Asidebar() {

    const [isSelected, setIsSelected] = useState('snippets');
    const { data: session } = useSession();

    function handleSelected(item: string) {
        setIsSelected(item);
    }

    return (
        <aside className="flex flex-col gap-2 w-[250px] h-[100%] bg-[#d9d9d9] bg-opacity-[5%] rounded-[20px] py-2 px-3">
            <div className="h-[15%] border-b border-[#ccc] flex gap-2 items-center">
                <div className="pl-2">
                    <img src="/avatar.png" alt="avatar.png" className="rounded-full" />
                </div>
                <div>
                    <p className="text-[14px]">{session?.user.name}</p>
                    <p className="text-[10px]">{session?.user.email}</p>
                </div>
            </div>
            <div className="h-[80%] border-b border-[#ccc]">
                <ul>
                    <li className="mb-2">
                        <a
                            href="/aplication"
                            className={`flex items-center gap-2 px-2 rounded-[50px] h-[30px] w-[230px] ${isSelected === 'snippets' ? 'bg-[#d9d9d9] bg-opacity-[3%]' : ""} `}
                            onClick={() => handleSelected('snippets')}
                        >
                            <IoCode size={16} />
                            <p>My Snippets</p>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a
                            href="#"
                            className={`flex items-center gap-2 px-2 rounded-[50px] h-[30px] w-[230px] ${isSelected === 'vscode' ? 'bg-[#d9d9d9] bg-opacity-[3%]' : ""}`}
                            onClick={() => handleSelected('vscode')}
                        >
                            <LuShare size={16} />
                            <p>VS Code</p>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a
                            href="#"
                            className={`flex items-center gap-2 px-2 rounded-[50px] h-[30px] w-[230px] ${isSelected === 'settings' ? 'bg-[#d9d9d9] bg-opacity-[3%]' : ""}`}
                            onClick={() => handleSelected('settings')}
                        >
                            <LuSettings size={16} />
                            <p>Settings</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="h-[5%] flex items-center justify-left">
                <button
                    className="flex items-center justify-left p-3 w-[200px] gap-2"
                    onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
                >
                    <img src="/logout.png" alt="" />
                    <p className="font-inter text-red-500">Log out</p>
                </button>
            </div>
        </aside>
    )
}