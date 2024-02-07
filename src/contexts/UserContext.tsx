'use client'

import { useState, createContext, useContext } from "react"
import { LoginFormSchema, RegisterFormSchema, type User } from '@/types/types'

const useUserState = () =>
    useState<User | null>(null);

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