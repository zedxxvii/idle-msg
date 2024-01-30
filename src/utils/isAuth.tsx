"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useUser } from "@/contexts/UserContext";

//Client side route protection

export default function isAuth(Component: any) {
    const [user, setUser] = useUser();
    return function IsAuth(props: any) {
        const auth = user != null ? true : false;

        useEffect(() => {
            if (!auth) {
                return redirect("/");
            }
        }, []);

        if (!auth) {
            return null;
        }

        return <Component {...props} />;
    };
}