export default function Loading() {
    // Get token and then validate it if token exists allows access, if not redirect to authentication page
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
    )
}