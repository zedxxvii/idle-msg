'use client'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useUser } from "@/contexts/UserContext";
import { Separator } from "@/components/ui/separator";
import RechargeItem from "@/components/RechargeItem";

export default function Page() {
    const [user, setUser] = useUser();
    const itemArray = [{
        id: 1,
        amount: 66,
        price: 0.99,
    },
    {
        id: 2,
        amount: 330,
        price: 4.99,
    },
    {
        id: 3,
        amount: 660,
        price: 9.99,
    },
    {
        id: 4,
        amount: 1320,
        price: 19.99,
    },
    {
        id: 5,
        amount: 3300,
        price: 49.99,
    },
    {
        id: 6,
        amount: 6600,
        price: 99.99,
    },
    ]
    return (
        <div className="justify-center items-center flex flex-col bg-slate-50 my-10 rounded-lg w-full lg:w-1/2 lg:mx-auto ">
            <div className="mt-10 font-bold"><p>Top Up Account Detail</p></div>
            <div className='flex-col flex items-start bg-[#E5E4E2] p-10 rounded-lg my-10 font-bold text-gray-400'>
                <div className="flex flex-col sm:flex-row"><p>Server: </p><p className="text-black ml-2">{user?.server}</p></div>
                <div className="flex flex-col sm:flex-row"><p>User ID: </p><p className="text-black ml-2">{`${user?.id}`}</p></div>
                <div className="flex flex-col sm:flex-row"><p>Username: </p><p className="text-black ml-2">{user?.username}</p></div>
                <div className="flex flex-col sm:flex-row"><p>Account: </p><p className="text-black ml-2">{user?.account}</p></div>
                <div className="flex flex-col sm:flex-row"><p>Diamond: </p><p className="text-black ml-2">{`${user?.daimond}`}</p></div>
            </div>
            <Separator className="my-10" />
            <div className="font-bold"><p>Select Item</p></div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 divide-x-2 divide-y-2 my-10">
                {itemArray.map((item, index) => {
                    return (
                        <RechargeItem key={index} amount={item.amount} price={item.price} id={item.id}/>
                    )
                })}
            </div>
        </div>
    )
}