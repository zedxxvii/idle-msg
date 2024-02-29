import { redirect } from "next/navigation"

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  async function a() {
    const token = localStorage.getItem("token");
    const response = await fetch(`${URL}/auth/verifytoken`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if(response.ok) redirect('/home');
    console.log(data);
  }
  a();
  // Get token and verify if authenticated. If authenticated, redirect to Home
  return (
    <section className="flex flex-col items-center justify-start h-screen bg-[url('/images/bg.png')] bg-cover bg-no-repeat">
      <h2 className="bg-black bg-opacity-25 rounded-lg p-6  font-zorque text-4xl text-center mt-20 mb-10">WELCOME TO IDLE MONSTER SAGA</h2>
      {children}
    </section>
  )
}

