import { List, MagnifyingGlass, SquaresFour, PawPrint, User, Person, Gear, ArrowFatLeft} from "phosphor-react";

export function Sidebar(){
    return (
        <div>
            <div className="bg-green-400 flex flex-col w-20 items-center">
                <div className="p-2">
                    <a href=""><List size={24}/></a>
                </div>
                <div className="p-2">
                    <a href=""><MagnifyingGlass size={24}/></a>
                </div>
                <div className="p-2">
                <a href=""><SquaresFour size={24}/></a>
                </div>
                <div className="p-2">
                    <a href=""><MagnifyingGlass size={24}/></a>
                </div>
                <div className="p-2">
                    <a href=""><PawPrint size={24}/></a>
                </div>
                <div className="p-2">
                    <a href=""><User size={24}/></a>
                </div>
                <div className="p-2">
                    <a href=""><Person size={24}/></a>
                </div>
                <div className="p-2">
                    <a href=""><Gear size={24}/></a>
                </div>
            </div>

            <div className="bg-green-400 flex flex-col w-20 items-center">
                <a href=""><ArrowFatLeft size={24}/></a>
            </div>
        </div>
    )
}