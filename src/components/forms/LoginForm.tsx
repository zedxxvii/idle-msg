'use client'
import { useRouter } from 'next/navigation'
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
import { useUser } from "@/contexts/UserContext";
import { LoginFormSchema } from "@/types/types";
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useState } from 'react'

export default function LoginForm() {
    const [user,setUser] = useUser();
    // 1. Define your form.
    const router = useRouter();
    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onLogin(values: z.infer<typeof LoginFormSchema>) {
        // Do something with the form values. example, making api request.
        // ✅ This will be type-safe and validated.
        console.log(values)
        const token = ""
        if (token) {
            // Set token in localStorage
            localStorage.setItem('token', token);
            setUser({
                id: 284213,
                username: values.username,
                account: `${values.password}@login.com`,
                server: "Asia",
                daimond: 1000,
            })
            

          } else {
            // Handle sign-in failure
            console.error('Sign-in failed');
          }    
          router.push('/home');
    }
    return (
        <Form {...form}>
                    <form onSubmit={form.handleSubmit(onLogin)} className="space-y-8">
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
                        <p className="text-sm">Forgot Password</p>
                        <Button type="submit">Login</Button>
                    </form>
                </Form>
    )
}