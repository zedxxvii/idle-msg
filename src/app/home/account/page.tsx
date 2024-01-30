import ChangePasswordForm from "@/components/forms/ChangePasswordForm";
import { Separator } from "@/components/ui/separator"



export default function Page() {
    return (
        <div className="w-full flex justify-center items-center">
        <div className="w-full lg:w-1/2 bg-slate-50 p-10 rounded-lg shadow-lg m-5">
        <p className="font-bold mb-5 text-2xl">Account Details</p>
        <Separator />
        <p className="font-bold my-5 text-l">Change Password</p>
        <ChangePasswordForm />
        </div>
        </div>
    );
}