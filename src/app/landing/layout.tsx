import { Menubar, MenubarContent, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarTrigger } from "@/components/ui/menubar"
import LandingNavBar from "@/components/LandingNavBar";
import Link from "next/link";
import { Inter, Poppins } from 'next/font/google'

export default function LandingLayout({
    
    children, // will be a page or nested layout
    
}: {
    children: React.ReactNode
    
}) {
    return (
      
        <div className="{`${inter.variable} ${poppins.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`} flex flex-col h-screen bg-home bg-cover bg-no-repeat overflow-hidden overflow-y-auto">
            <LandingNavBar />
            {children}
            <div className="flex-grow">
                <Menubar className="menubar opacity-90 shadow-lg bg-[#f8f094] border border-gray-300 text-white h-16 p-10 flex justify-evenly m-2 overflow-hidden">
                    <MenubarMenu>
                    <Link href="/landing/privacy">
                        <MenubarTrigger className="text-black transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-hover-green">
                            Privacy Policy
                        </MenubarTrigger>
                        </Link>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="text-black transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-hover-green">
                            Contact Us!
                        </MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
       
    )
}


