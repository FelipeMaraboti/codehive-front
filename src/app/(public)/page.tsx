import Button from "@/components/button/Button";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Navbar />
      <section className="max-h-[300px] h-full flex flex-col justify-center items-center">
        <div className="max-h-[170px] w-[500px] mb-[25px]">
          <h1 className="font-inter font-extrabold text-[32px] text-center leading-tight">
            Saved code is time saved<br />
            <span className="bg-gradient-to-r from-[#FFF70C] to-[#EEE] bg-clip-text text-transparent">Store your snippets </span>
            and speed up your development!
          </h1>
        </div>
        <div className="max-h-[50px] w-[500px] mb-[8px] md:mb-[20px]">
          <p className="font-bold text-justify">
            Stop wasting time searching for old code snippets.
            With our platform, you can store, organize, and access your snippets in seconds from anywhere.
            Simple, secure, and efficient!
          </p>
        </div>
        <Button text={"Try it for free now"} />
      </section>
      <section className="w-[1000px] h-full flex items-center justify-between mt-20">
        <div className="w-[405px]">
          <h1 className="font-bold text-[22px] leading-tight mb-2">
            A <span className="bg-gradient-to-r from-[#FFF70C] to-[#EEE] bg-clip-text text-transparent">minimalist </span>
            and <span className="bg-gradient-to-r from-[#FFF70C] to-[#EEE] bg-clip-text text-transparent">intuitive </span>
            interface for developers who value practicality and efficiency.
          </h1>
          <p className="text-justify max-h-[70px] text-[10px]">
            With a clean, modern, and distraction-free layout, our platform makes saving, 
            organizing, and finding your code snippets fast and easy. 
            Every element is crafted to provide a seamless experience, enhancing productivity and accessibility. 
            Here, simplicity meets functionality, allowing you to focus on what truly matters: coding.
          </p>
        </div>
          <img className="w-[100px] h-[70px] mx-10" src="/arrow.png" alt="arrow.png" />
        <div className="relative w-[350px] h-[300px] overflow-hidden">
          <img 
            src="/app1.png" 
            className="z-30 absolute top-24 right-24 h-[200px] w-[250px]"
          />
          <img 
            src="/app2.png" 
            className="z-20 absolute top-12 right-12 h-[200px] w-[250px]"
          />
          <img 
            src="/app3.png" 
            className="z-10 absolute top-0 right-0 h-[200px] w-[250px]"
          />
        </div>
      </section>
    </div>
  );
}
