import { SidebarLink } from './SidebarLink';

import { HiOutlineHome } from 'react-icons/hi2';
import { PiBookBookmark } from 'react-icons/pi';
import { HiOutlineRefresh } from 'react-icons/hi';
import { IoAddCircleOutline } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';


export default function Sidebar(){
    return(
        <article className="flex flex-col justify-center h-[100vh] w-[6%] fixed rounded-r-2xl bg-[var(--color-purple)]">
            <nav className="flex flex-col justify-between h-[90%] items-center text-white">
                <div>
                    <p>LOGO</p>
                </div>

                
                <ul className="flex flex-col gap-4 items-center">
                    <SidebarLink icon={<HiOutlineHome className="text-2xl"/>} text={"Ínicio"}/>
                    <SidebarLink icon={<PiBookBookmark className="text-2xl"/>} text={"Livros"}/>
                    <SidebarLink icon={<HiOutlineRefresh className="text-2xl"/>} text={"Trocas"}/>
                    <SidebarLink icon={<IoAddCircleOutline className="text-2xl"/>} text={"Adicionar"}/> 
                    <div></div>
                </ul>


                <div>
                    <a href="#"><LuLogOut className="text-2xl transition duration-500 ease hover:text-[var(--color-darkpurple)]"/></a>
                </div>
            </nav>
        </article>
    )
}