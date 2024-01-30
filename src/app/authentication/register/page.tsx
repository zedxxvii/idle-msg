import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";

export default function Page() {
    
    return (
        <Card className={cn("w-[400px] mt-10")}>
            <CardHeader>
                <CardTitle className={cn("mb-2")}>Register</CardTitle>
                <CardDescription className={cn("mt-2")}>Already have an account? <Link href='/authentication' >Click here to login !!</Link></CardDescription>
            </CardHeader>
            <CardContent>
                <RegisterForm />
            </CardContent>
        </Card>
    )
}