'use client'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ChangePasswordFormSchema } from "@/types/types"

export default function ChangePasswordForm () {
    // 1. Define your form.
    const form = useForm<z.infer<typeof ChangePasswordFormSchema>>({
        resolver: zodResolver(ChangePasswordFormSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        },
    })

    // 2. Define a submit handler.
    function onChangePassword(values: z.infer<typeof ChangePasswordFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onChangePassword)} className="space-y-8">
                <FormField
                    control={form.control}
                    name={"currentPassword"}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Current Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Current Password" type="password" {...field} value={field.value}/>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"newPassword"}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Current Password</FormLabel>
                            <FormControl>
                                <Input placeholder="New Password" type="password" {...field} value={field.value}/>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"confirmNewPassword"}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Current Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Confirm New Password" type="password" {...field} value={field.value}/>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}