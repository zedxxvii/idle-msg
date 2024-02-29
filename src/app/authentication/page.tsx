import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import LoginForm from "@/components/forms/LoginForm";


export default function Page() {

    return (
        <Card className={cn("w-[400px] mt-10 shadow-lg")}>
            <CardHeader>
                <CardTitle className={cn("mb-2")}>Login</CardTitle>
                <CardDescription className={cn("mt-2")}> Do not have an account yet?   <span className="hover:text-red-500 hover:font-bold hover:underline">
 <Link href='/authentication/register'>Click here to register!</Link></span></CardDescription> 
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
        </Card>
    )
}