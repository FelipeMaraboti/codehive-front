'use client'

import ModalButton from "@/components/modal_button/ModalButton"
import { FaSearch } from "react-icons/fa"

export default function Aplication() {
  return (
    <div className="h-screen w-full p-2">
      <nav className="w-full flex flex-col gap-6">
        <div>
          <img src="/logo.png" alt="logo.png" className="w-14 ml-1" />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center bg-[#1E1E1E] rounded-lg h-[35px] w-[350px]">
            <input
              type="text"
              placeholder="Search snippets..."
              className="bg-transparent text-white placeholder-gray-400 h-full outline-none flex-grow px-4 rounded-l-lg"
            />
            <button className="bg-[#EECE65] w-[50px] h-[35px] rounded-r-lg flex items-center justify-center">
              <FaSearch className="text-black" />
            </button>
          </div>
          <ModalButton />
          {/* <button className="w-[150px] h-[35px] bg-[#EECE65] rounded-md">
            <span className="text-[#1e1e1e] font-inter font-medium text-[12px]">Create new snippet</span>
          </button> */}
        </div>
      </nav>
      <section className="h-auto bg-[#d9d9d9] bg-opacity-5 mt-8 rounded-xl; flex flex-col justify-center gap-2">
        <div className="m-4 h-[315px] bg-[#d9d9d9] bg-opacity-5 mt-4 rounded-xl items-center flex flex-col">
          <div className="flex justify-between px-10 py-8 w-full">
            <h1 className="text-[16px]">Algorithm that returns a quadratic root of a number</h1>
            <p className="text-[#EECE65]">Language: <span className="text-[#eee] ml-4">JavaScript</span></p>
          </div>
          <div className="h-[150px] w-[960px] bg-[#d9d9d9] bg-opacity-5 overflow-auto">
            <p className="p-4">
              "
              function quadraticRoot(a, b, c) &#123;"
            </p>
          </div>
          <div className="w-[960px] h-[30px] mt-6 flex gap-4 justify-end">
            <button className="w-[80px] bg-[#D23D3D] bg-opacity-[50%] rounded-md font-medium">Delete</button>
            <button className="w-[100px] bg-black bg-opacity-[25%] rounded-md font-medium">Edit Code</button>
            <button className="w-[150px] bg-[#EECE65] text-[#1e1e1e] rounded-md font-medium">Export to VsCode</button>
          </div>
        </div>
      </section>
    </div>
  )
}


