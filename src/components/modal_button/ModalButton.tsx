import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import AceEditor from "react-ace";
import { useFetch } from "@/hooks/useFetch"; // Importa o hook personalizado

// Importações dos modos do Ace Editor
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
// Importação do tema do Ace Editor
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";

export default function ModalButton() {
    const [snippetName, setSnippetName] = useState("");
    const [codeLanguage, setCodeLanguage] = useState("javascript");
    const [code, setCode] = useState("// Write your code here...");
    
    const { request, loading, error } = useFetch("http://localhost:3001/api/snippets"); // Usa o hook useFetch

    const handleSaveSnippet = async () => {
        await request({
            method: "POST",
            body: {
                name: snippetName,
                language: codeLanguage,
                code,
            },
        });
    };

    return (
        <Dialog>
            <DialogTrigger>
                <div className="w-[150px] h-[35px] bg-[#EECE65] rounded-md flex items-center justify-center cursor-pointer">
                    <span className="text-[#1e1e1e] font-inter font-medium text-[12px]">
                        Create new snippet
                    </span>
                </div>
            </DialogTrigger>
            <DialogContent className="bg-[#1E1E1E] border-[#3E3E3E] w-[1000px]">
                <DialogHeader>
                    <DialogTitle>Create New Snippet</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4">
                        <label htmlFor="SnippetName" className="flex flex-col gap-1">
                            Snippet Name:
                            <input
                                id="SnippetName"
                                type="text"
                                value={snippetName}
                                onChange={(e) => setSnippetName(e.target.value)}
                                className="h-[30px] w-[200px] bg-[#D9D9D9] bg-opacity-[5%] px-2 text-white"
                            />
                        </label>

                        <label htmlFor="CodeLanguage" className="flex flex-col gap-1">
                            Code Language:
                            <select
                                id="CodeLanguage"
                                value={codeLanguage}
                                onChange={(e) => setCodeLanguage(e.target.value)}
                                className="h-[30px] w-[200px] bg-[#D9D9D9] bg-opacity-[5%] px-2 text-white"
                            >
                                <option value="javascript" className="text-black">JavaScript</option>
                                <option value="python" className="text-black">Python</option>
                                <option value="java" className="text-black">Java</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label className="flex flex-col gap-1">
                            Snippet:
                            <AceEditor
                                mode={codeLanguage}
                                theme="tomorrow_night_eighties"
                                value={code}
                                onChange={setCode}
                                name="code-editor"
                                editorProps={{ $blockScrolling: true }}
                                fontSize={12}
                                width="100%"
                                height="200px"
                            />
                        </label>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div className="flex gap-4 justify-end mt-4">
                            <DialogClose>
                                <div className="w-[100px] h-[35px] bg-[#D23D3D] bg-opacity-[50%] rounded-md flex items-center justify-center cursor-pointer">
                                    <span className="text-[#eee] font-inter font-medium text-[10px]">
                                        Delete
                                    </span>
                                </div>
                            </DialogClose>

                            <div
                                onClick={handleSaveSnippet}
                                className={`w-[100px] h-[35px] rounded-md flex items-center justify-center cursor-pointer ${
                                    loading ? "bg-gray-500" : "bg-[#EECE65]"
                                }`}
                            >
                                {loading ? (
                                    <span className="text-[#1e1e1e] font-inter font-medium text-[10px]">
                                        Saving...
                                    </span>
                                ) : (
                                    <span className="text-[#1e1e1e] font-inter font-medium text-[10px]">
                                        Save Snippet
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
