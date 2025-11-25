import { useAuth } from '../hooks/useAuth';

import { SidebarLink } from './SidebarLink';
import { HiOutlineHome } from 'react-icons/hi2';
import { PiBookBookmark } from 'react-icons/pi';
import { IoAddCircleOutline } from 'react-icons/io5';
import { PiInfo } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function Sidebar(){
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout;
        navigate('/login');
    }

    return(
        <>
            <aside className="flex justify-center items-center w-full py-2 fixed bg-purple md:flex-col md:h-[98%] md:w-[75px] md:p-4 md:rounded-2xl md:m-2">
                <nav className="flex justify-center items-center w-[95%] md:flex-col md:justify-between md:h-[95%]">
                    <div>
                        <p className="hidden md:block md:text-darkpurple">LOGO</p>
                        <hr className="hidden md:block md:mt-3 md:text-darkpurple"/>

                        <ul className="flex gap-5 items-center md:flex-col md:mt-5">
                            <SidebarLink url={"/"} icon={<HiOutlineHome className="text-2xl"/>}/>
                            <SidebarLink url={"/meus-livros"} icon={<PiBookBookmark className="text-2xl"/>}/>
                            <SidebarLink url={"/cadastro-de-livros"} icon={<IoAddCircleOutline className="text-2xl"/>}/> 
                            {/* <SidebarLink icon={<PiInfo className="text-2xl"/>}/> */}
                            <SidebarLink url={"/minha-conta"} icon={<HiOutlineUser className="text-2xl"/>}/>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <button 
                            onClick={handleLogout} 
                            className="flex flex-col items-center gap-1 p-2 rounded-lg text-darkpurple transition duration-500 ease hover:text-white hover:bg-darkpurple-tr"
                        >
                            <MdLogout className="md:text-2xl"/>
                        </button>
                    </div>
                </nav>
            </aside>
        </>
    )
}