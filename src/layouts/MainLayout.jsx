import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout({children}){
    return(
        <>
            <Sidebar/>
            <main className="flex flex-col items-center min-h-screen h-full">
                {children}
            </main>
        </>
    )
}