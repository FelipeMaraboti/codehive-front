'use client'

import { DialogClose } from "@/components/ui/dialog";

import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror from "@uiw/react-codemirror";

import { useEffect, useState } from 'react'

export function DialogForm() {
    const [snippetName, setSnippetName] = useState("");
    const [codeLanguage, setCodeLanguage] = useState("javascript");
    const [code, setCode] = useState("");
    const [extension, setExtension] = useState(javascript());

    useEffect(() => {
        switch (codeLanguage) {
            case "javascript":
                setExtension(javascript());
                break;
            case "python":
                setExtension(python());
                break;
            case "java":
                setExtension(java());
                break;
            default:
                setExtension(javascript());
        }
    }, [codeLanguage]);

    function handleCreateSnippet() {
        if (!snippetName.trim()) {
            alert("Snippet name is required");
            return;
        }

        if (!code.trim()) {
            alert("Snippet code is required");
            return;
        }

        const payload = {
            title: snippetName,
            language: codeLanguage,
            code: code,
            tags: [codeLanguage, codeLanguage],
        };

        fetch('http://localhost:3333/api/snippets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ops a problem occurred while creating snippet');
                }
                return response.json();
            })
            .then(data => {
                setSnippetName("");
                setCode("");
            })
            .catch(error => {
                console.error('Error creating snippet:', error, error.stack);
            });
    }

    return (
        <div className="flex gap-4 flex-col">
            <div className="flex flex-row gap-4">
                <label htmlFor="SnippetName" className="flex flex-col gap-1 w-full">
                    Snippet Name:
                    <input
                        id="SnippetName"
                        type="text"
                        value={snippetName}
                        onChange={(e) => setSnippetName(e.target.value)}
                        className="h-[30px] w-full bg-zinc-100/10 px-2 text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#5e5e5e] focus:border-[#5e5e5e]"
                        placeholder="Snippet Name here..."
                    />
                </label>

                <label htmlFor="CodeLanguage" className="flex flex-col gap-1 w-full">
                    Code Language:
                    <select
                        id="CodeLanguage"
                        value={codeLanguage}
                        onChange={(e) => setCodeLanguage(e.target.value)}
                        className="h-[30px] w-full bg-zinc-100/10 px-2 text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#5e5e5e] focus:border-[#5e5e5e]"
                    >
                        <option value="javascript" className="bg-neutral-700">JavaScript</option>
                        <option value="python" className="bg-neutral-700">Python</option>
                        <option value="java" className="bg-neutral-700">Java</option>
                    </select>
                </label>
            </div>

            <label htmlFor="codeEditor">
                Snippet code:
                <div className="w-full max-w-2xl mx-auto mt-4 border border-[#3E3E3E] rounded-lg overflow-hidden shadow-lg cursor-text">
                    <CodeMirror
                        id="CodeEditor"
                        value={code}
                        height="200px"
                        theme={oneDark}
                        extensions={[extension, EditorView.lineWrapping]}
                        onChange={(value) => setCode(value)}
                        className="text-sm"
                    />
                </div>
            </label>

            <DialogClose>
                <div className="flex gap-4 justify-end mt-4">
                    <div
                        className='w-[100px] h-[35px] bg-[#EECE65] rounded-md flex items-center justify-center cursor-pointer'
                        onClick={() => handleCreateSnippet()}
                    >
                        <span className="text-[#1e1e1e] font-inter font-medium text-[10px]">
                            Save Snippet
                        </span>
                    </div>
                </div>
            </DialogClose>
        </div>
    )
}