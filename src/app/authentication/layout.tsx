export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col items-center justify-start h-screen bg-[url('/images/bg.png')] bg-cover bg-no-repeat">
      <h2 className="font-zorque text-4xl text-center mt-20 mb-10">WELCOME TO IDLE MONSTER SAGA</h2>
      {children}
    </section>
  )
}