import { Menubar, MenubarContent, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarTrigger } from "@/components/ui/menubar"
import LandingNavBar from "@/components/LandingNavBar";


export default function LandingLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col h-screen bg-[url('/images/bg_body.webp')] bg-cover bg-no-repeat overflow-hidden overflow-y-auto">
            <LandingNavBar />
            {children}
            <div className="flex-grow">
                <Menubar className="menubar bg-[#ffffff] text-white h-16 p-10 flex justify-evenly m-2 overflow-hidden">
                    <MenubarMenu>
                        <MenubarTrigger className="text-black transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-hover-green">
                            Privacy Policy
                        </MenubarTrigger>
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


