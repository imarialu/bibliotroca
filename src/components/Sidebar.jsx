import { SidebarLink } from './SidebarLink';

import { HiOutlineHome } from 'react-icons/hi2';
import { PiBookBookmark } from 'react-icons/pi';
import { IoAddCircleOutline } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa6';


export default function Sidebar(){
    return(
        <>
        <aside className="hidden flex flex-col justify-center h-[98%] m-2 p-4 fixed rounded-2xl bg-purple">
            <nav className="flex flex-col justify-between h-[95%] items-center">
                <div>
                    <p className="text-darkpurple">LOGO</p>
                    <hr className="mt-3 text-darkpurple"/>

                    <ul className="flex flex-col gap-5 items-center mt-5">
                        <SidebarLink url={"/"} icon={<HiOutlineHome className="text-2xl"/>}/>
                        <SidebarLink url={"/meus-livros"} icon={<PiBookBookmark className="text-2xl"/>}/>
                        <SidebarLink url={"/cadastro-de-livros"} icon={<IoAddCircleOutline className="text-2xl"/>}/> 
                        <SidebarLink icon={<AiOutlineInfoCircle className="text-2xl"/>}/>
                        <SidebarLink url={"/minha-conta"} icon={<FaRegUser className="text-2xl"/>}/>
                    </ul>
                </div>

                <div>
                    <SidebarLink icon={<LuLogOut className="text-2xl"/>}/>
                </div>
            </nav>
        </aside>

        <aside className="flex justify-center items-center w-full py-2 fixed bg-purple md:flex-col md:h-[98%] md:w-[75px] md:p-4 md:rounded-2xl md:m-2">
            <nav className="flex justify-center items-center w-[95%] md:flex-col md:justify-between md:h-[95%]">
                <div>
                    <p className="hidden md:block md:text-darkpurple">LOGO</p>
                    <hr className="hidden md:block md:mt-3 md:text-darkpurple"/>

                    <ul className="flex gap-5 items-center md:flex-col md:mt-5">
                    <SidebarLink url={"/"} icon={<HiOutlineHome className="text-2xl"/>}/>
                    <SidebarLink url={"/meus-livros"} icon={<PiBookBookmark className="text-2xl"/>}/>
                    <SidebarLink url={"/cadastro-de-livros"} icon={<IoAddCircleOutline className="text-2xl"/>}/> 
                    <SidebarLink icon={<AiOutlineInfoCircle className="text-2xl"/>}/>
                    <SidebarLink url={"/minha-conta"} icon={<FaRegUser className="text-2xl"/>}/>
                </ul>
                </div>

                

                <div className="hidden md:block">
                    <SidebarLink icon={<LuLogOut className="md:text-2xl"/>}/>
                </div>
            </nav>
        </aside>
        </>
    )
}