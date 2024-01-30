'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";
import { RegisterFormSchema } from "@/types/types";

export default function RegisterForm() {
    const [user, setUser] = useUser();
    const router = useRouter();
    const form = useForm<z.infer<typeof RegisterFormSchema>>({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: {
            username: "",
            password: "",
            confirmPassword: "",
        },
    })
    function onRegister(values: z.infer<typeof RegisterFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        setUser({
            id: 284213,
            username: values.username,
            account: `${values.password}@register.com`,
            server: "Asia",
            daimond: 1000,
        })
        router.push('/home');
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onRegister)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Username" type="text" {...field} value={field.value} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Password" type="password" {...field} value={field.value} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Confirm Password" type="password" {...field} value={field.value} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Register</Button>
            </form>
        </Form>
    )
}