'use client'
import { Menubar, MenubarContent, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarTrigger } from "@/components/ui/menubar"
import { Globe } from "lucide-react"
import { useState } from "react";
import Link from "next/link";


export default function LandingLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    const [lang, setLang] = useState<"en" | "kh" | "cn">("en");
    return (
        <div className="flex flex-col h-screen bg-[url('/images/bg_body.webp')] bg-cover bg-no-repeat overflow-hidden overflow-y-auto">
            <Menubar className="p-10 bg-[#ffffff] text-white h-16 flex rounded-lg justify-evenly m-2">
                <MenubarMenu>
                    <Link href="/landing">
                        <MenubarTrigger className="px-4 py-2 text-lg font-bold text-custom-green transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-hover-green">
                            Home
                        </MenubarTrigger>
                    </Link>
                </MenubarMenu>
                <MenubarMenu>
                    <Link href="/landing/update">
                        <MenubarTrigger className="px-4 py-2 text-lg font-bold text-custom-green transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-hover-green">
                            Updates
                        </MenubarTrigger>
                    </Link>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="px-4 py-2 text-lg font-bold text-custom-green transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-hover-green">
                        Download
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <Link href="/authentication">
                        <MenubarTrigger className="px-4 py-2 text-lg font-bold text-custom-green transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-hover-green">
                            Top Up
                        </MenubarTrigger>
                    </Link>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="px-4 py-2 text-lg flex flex-row font-bold text-custom-green transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-hover-green">
                        <Globe className="mr-2" />
                        {lang === "en"
                            ? "English"
                            : lang === "kh"
                                ? "Khmer"
                                : "中文 Chinese"}
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarRadioGroup value={lang}>
                            <MenubarRadioItem value="en" onClick={() => setLang("en")}>
                                English
                            </MenubarRadioItem>
                            <MenubarRadioItem value="kh" onClick={() => setLang("kh")}>
                                Khmer
                            </MenubarRadioItem>
                            <MenubarRadioItem value="cn" onClick={() => setLang("cn")}>
                                Chinese
                            </MenubarRadioItem>
                        </MenubarRadioGroup>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
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


