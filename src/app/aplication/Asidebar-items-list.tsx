'use client'

import { useState } from "react";

import { IoCode } from "react-icons/io5";
import { LuShare } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";

export default function AsidebarItemsList() {
    const [isSelected, setIsSelected] = useState('snippets');

    function handleSelected(item: string) {
        setIsSelected(item);
    }

    return (
        <ul>
            <li className="space-y-2">
                <a
                    href="/aplication"
                    className={`flex items-center gap-2 px-2 rounded-[50px] h-[30px] w-[230px] ${isSelected === 'snippets' ? 'bg-gray-200/5' : ""} `}
                    onClick={() => handleSelected('snippets')}
                >
                    <IoCode size={16} />
                    <p>My Snippets</p>
                </a>
            </li>
            <li className="space-y-2">
                <a
                    href="#"
                    className={`flex items-center gap-2 px-2 rounded-[50px] h-[30px] w-[230px] ${isSelected === 'vscode' ? 'bg-gray-200/5' : ""}`}
                    onClick={() => handleSelected('vscode')}
                >
                    <LuShare size={16} />
                    <p>VS Code</p>
                </a>
            </li>
            <li className="space-y-2">
                <a
                    href="#"
                    className={`flex items-center gap-2 px-2 rounded-[50px] h-[30px] w-[230px] ${isSelected === 'settings' ? 'bg-gray-200/5' : ""}`}
                    onClick={() => handleSelected('settings')}
                >
                    <LuSettings size={16} />
                    <p>Settings</p>
                </a>
            </li>
        </ul>
    )
}
