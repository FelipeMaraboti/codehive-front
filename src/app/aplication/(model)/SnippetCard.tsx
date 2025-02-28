'use client'

import { useState, useEffect } from "react";

interface Snippet {
    id: number;
    title: string;
    code: string;
    language: string;
    tags: string[];
}

export default function SnippetCard() {
    const [snippets, setSnippets] = useState<Snippet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3333/api/snippets");
                if (!response.ok) throw new Error("Erro ao buscar snippets");

                const data = await response.json();
                setSnippets(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [snippets]);

    if (loading) return (
        <div className="m-4 h-[315px] bg-gray-200/10 mt-4 p-5 rounded-xl items-center flex flex-col">
            <p>Carregando...</p>
        </div>
    )
    if (error) return (
        <div className="m-4 h-[315px] mt-4 p-5 rounded-xl items-center justify-center flex flex-col text-xl">
            <p>Algo deu errado ao buscar as informações. Tente novamente mais tarde.</p>
            <p className="text-sm italic">" {error} "</p>
        </div>
    );
    if (snippets.length === 0) return <p>Nenhum snippet encontrado</p>;

    return (
        <>
            {snippets.map((snippet) => (
                <div key={snippet.id} className="m-4 h-[315px] bg-gray-200/10 mt-4 p-5 rounded-xl items-center flex flex-col">
                    <div className="flex justify-between py-6 w-full">
                        <h1 className="text-[16px]">{snippet.title}</h1>
                        <p className="text-[#EECE65]">
                            Language: <span className="text-[#eee] ml-1">{snippet.language}</span>
                        </p>
                    </div>
                    <div className="h-[150px] w-full bg-gray-200/10 overflow-auto ">
                        <pre className="p-4 text-sm">{snippet.code}</pre>
                    </div>
                    <div className="w-full h-[30px] mt-6 flex gap-4 justify-end">
                        <button className="w-[80px] bg-[#D23D3D] bg-opacity-[50%] rounded-md font-medium">Delete</button>
                        <button className="w-[100px] bg-black bg-opacity-[25%] rounded-md font-medium">Edit Code</button>
                        <button className="w-[150px] bg-[#EECE65] text-[#1e1e1e] rounded-md font-medium">Export to VSCode</button>
                    </div>
                </div>
            ))}
        </>
    );
}
