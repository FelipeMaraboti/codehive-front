import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog";
import { DialogForm } from "./DialogForm";

export function ModalButton() {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="w-[150px] h-[35px] bg-[#EECE65] rounded-md flex items-center justify-center cursor-pointer">
                    <span className="text-[#1e1e1e] font-inter font-medium text-[12px]">
                        Create new snippet
                    </span>
                </div>
            </DialogTrigger>
            <DialogContent className="bg-[#1E1E1E] border-[#3E3E3E] min-w-[40rem]">
                <DialogHeader>
                    <DialogTitle>Create New Snippet</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                    <DialogForm />
                </div>
            </DialogContent>
        </Dialog>
    );
}
