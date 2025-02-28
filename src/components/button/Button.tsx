type ButtonProps = {
    text: string,
    onClick?: () => void
}

export default function Button({ text }: ButtonProps) {
    return (
        <button className="h-[35px] w-[200px] bg-gradient-to-r from-[#FFF70C] to-[#EEE] rounded-sm flex items-center justify-center">
            <a className="text-[#1E1E1E] text-[14px] font-medium" href="/aplication">{text}</a>
        </button>
    )
}