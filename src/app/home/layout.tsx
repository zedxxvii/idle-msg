"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CircleUser, Globe } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserContext";
import { User } from "@/types/types";
import loading from "./loading";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useUser();
  const router = useRouter();
  const [lang, setLang] = useState<"en" | "kh" | "cn">("en");

  useEffect(() => {
    // Fetch data with authorization token
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          // Redirect to login if no token exists
          router.push("/authentication");
          return;
        }

        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);

        const response = await fetch(
          "http://206.238.113.198:3000/auth/verifytoken",
          {
            method: "GET",
            headers: headers,
          }
        );

        if (!response.ok) {
          // Handle unauthorized access or other errors
          router.push("/authenticaiton");
          return;
        }

        const data = await response.json();
        // Set user data if needed
        setUser(data);
      } catch (error) {
        console.error("Error:", error);
        // Handle error
      }
    }

    fetchData();
  }, []);
  function logout() {
    localStorage.removeItem("token")
    router.push("/authentication");
  }
  return (
    <div className="h-full w-screen">
      <NavigationMenu className="flex justify-between h-16 w-full px-2 bg-[#ffffff]">
        <NavigationMenuList className="w-full">
          <NavigationMenuItem>
          {!loading && user && (
        <Link href="/home" passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Top Up
          </NavigationMenuLink>
        </Link>
      )}
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/home/history" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                History
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/home/account" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Account
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/landing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <Menubar className="p-0 border-none">
            <MenubarMenu>
              <MenubarTrigger className="text-sm font-bold text-custom-green ">
                <Globe className="mr-2" />
                <div className="hidden lg:block md:block">
                  {lang === "en"
                    ? "English"
                    : lang === "kh"
                    ? "Khmer"
                    : "中文 Chinese"}
                </div>
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
          <Menubar className="p-0 border-none">
            <MenubarMenu>
              <MenubarTrigger className="text-sm font-bold text-custom-green ">
                <CircleUser className="mr-2" />
                <div className="hidden md:block lg:block">{user?.username}</div>
              </MenubarTrigger>
              <MenubarContent className="mx-5">
                <Button className="mt-5 w-full" onClick={logout}>
                  Log Out
                </Button>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </NavigationMenuList>
      </NavigationMenu>
      {children}
    </div>
  );
}
