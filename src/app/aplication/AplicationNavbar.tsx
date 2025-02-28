import { FaSearch } from "react-icons/fa";
import { ModalButton } from "./ModalButton";

export function AplicationNavbar() {
  return (
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
      </div>
    </nav>
  )
}


{/*   
      <button className="w-[150px] h-[35px] bg-[#EECE65] rounded-md">
        <span className="text-[#1e1e1e] font-inter font-medium text-[12px]">Create new snippet</span>
      </button> 
*/}