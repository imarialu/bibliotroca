import { SidebarLink } from './SidebarLink';

import { HiOutlineHome } from 'react-icons/hi2';
import { PiBookBookmark } from 'react-icons/pi';
import { IoAddCircleOutline } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa6';


export default function Sidebar(){
    return(
        <aside className="flex flex-col justify-center h-[98%] m-2 p-4 fixed rounded-2xl bg-[var(--color-purple)]">
            <nav className="flex flex-col justify-between h-[95%] items-center text-[var(--color-darkpurple)]">
                <div>
                    <p>LOGO</p>
                    <hr className="mt-3 text-[var(--color-darkpurple)]"/>

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
    )
}