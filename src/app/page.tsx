"use server";
import { redirect } from "next/navigation";
export default async function Home() {
  const token = ""
if (token){
  try {
    // Decode and verify token
    const decodedToken = ""

    // Check if token is expired
    const currentTime = Math.floor(Date.now() / 1000);
   // if (decodedToken.exp < currentTime) {
        // Token is expired
        // Handle accordingly (e.g., redirect to login page)
   // }

    // Extract necessary information from token
   // const { userId, role } = decodedToken;

    // Authorize access based on user role or any other criteria
    // For example:
   // if (role !== 'admin') {
        // User is not authorized
        // Handle accordingly (e.g., show error message)
  //  }
} catch (error) {
    // Token is invalid
    // Handle accordingly (e.g., redirect to login page)
}
} else {
// Token is not provided
// Handle accordingly (e.g., redirect to login page)
}
redirect("/landing");

}

