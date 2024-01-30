'use client'

import { useState, createContext, useContext } from "react"
import { LoginFormSchema, RegisterFormSchema, type User } from '@/types/types'
import { useRouter } from 'next/navigation'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const initUser: User = {
    id: 0, 
    username: "",
    account: "",
    server: "",
    daimond: 0,
}

const useUserState = () =>
    useState<User>();

export const UserContext = createContext<ReturnType<
    typeof useUserState
> | null>(null);

export const useUser = () => {
	const user = useContext(UserContext);
	if (!user) {
		throw new Error("useReview must be used within a ReviewProvider");
	}
	return user;
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useUserState();
    return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>
}

export default UserProvider;