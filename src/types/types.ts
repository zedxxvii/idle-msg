import { z } from "zod";

export interface User {
    id: Number;
    username: String;
    server: String;
    account: String;
    daimond: Number;
}

export const LoginFormSchema = z.object({
    username: z.string().min(5).max(50),
    password: z.string().min(8).max(50),
})

export const RegisterFormSchema = z.object({
    username: z.string().min(5).max(50),
    password: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),
})

export const ChangePasswordFormSchema = z.object({
    currentPassword: z.string().min(8).max(50),
    newPassword: z.string().min(8).max(50),
    confirmNewPassword: z.string().min(8).max(50),
})